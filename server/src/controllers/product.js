const {Product} = require('../../models');
const {Category} = require('../../models');
const {Productcategory} = require('../../models');

exports.storeBook = async (req, res) => {
    try {
        let { idCategory } = req.body;
        idCategory = idCategory.split(",");
        const {body, files} = req;

        console.log("body books",body);
        console.log("files books",files);
            const book = await Product.create({
                ...body,
                bookFile: files.bookFile[0].filename,
                thumbnail: files.thumbnail[0].filename,

            });
            
            if (!book) {
                return res.status(400).send({
                    status : "Error",
                    error : {
                        message : "Upload failed"
                    }
                })
            }

            const productCategoryData = idCategory.map((item) => {
                return { idProduct: book.id, idCategory: parseInt(item) };
              });
            

            await Productcategory.bulkCreate(productCategoryData);
            let productData = await Product.findOne({
                where: {
                  id: book.id,
                },
                include: [
                  {
                    model: Category,
                    as: "categories",
                    through: {
                      model: Productcategory,
                      as: "bridge",
                      attributes: [],
                    },
                    attributes: {
                      exclude: ["createdAt", "updatedAt"],
                    },
                  },
                ],
                attributes: {
                  exclude: ["createdAt", "updatedAt", "idUser"],
                },
              });
              productData = JSON.parse(JSON.stringify(productData));
          
            return res.send({
                status : "Success cuyy",
                
            });

    } catch (err) {
        console.log(err);
    }
}

exports.getAllBooks = async (req,res) => {
    try {
        let data = await Product.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
        });

        data = JSON.parse(JSON.stringify(data));
        data = data.map((item) => {
            return {
                ...item,
                bookFile: process.env.PATH_FILE + item.bookFile,
                thumbnail: process.env.PATH_FILE + item.thumbnail
            };
        });
        res.send({
            status: "success...",
            data,
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
}

exports.getProduct = async (req, res) => {
    try {
      const { id } = req.params;
      let data = await Product.findOne({
        where: {
          id,
        },
        include: [
          {
            model: Category,
            as: "categories",
            through: {
              model: Productcategory,
              as: "bridge",
              attributes: [],
            },
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
          },
        ],
        attributes: {
          exclude: ["createdAt", "updatedAt", "idUser"],
        },
      });
  
      data = JSON.parse(JSON.stringify(data));
  
      data = {
        ...data,
        thumbnail: process.env.PATH_FILE + data.thumbnail,
        bookFile: process.env.PATH_FILE + data.bookFile
      };
  
      res.send({
        status: "success...",
        data,
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: "failed",
        message: "Server Error",
      });
    }
  };
  