const {Product} = require('../../models');

exports.storeBook = async (req, res) => {
    try {
        const {body, files} = req;

        console.log("body books",body);
        console.log("files books",files);
    

        // // if (error) {
        // //     return res.status(400).send({
        // //         status : "validation error",
        // //         error : {
        // //             message : error.details.map((error) => error.message)
        // //         }
        // //     })
        // }

        // if (files.bookFile.length > 0) {
            // const uploadBook = files.bookFile.map( async (filebook) => {
            //     // const result = await cloudinary.uploader.upload(filebook.path);//harus path karna menangkap data path saja
            // })
            const book = await Product.create({
                ...body,
                bookFile: files.bookFile[0].filename,
                thumbnail: files.thumbnail[0].filename,

            });
            
            console.log("upload book ke cloud", book);
            

            if (!book) {
                return res.status(400).send({
                    status : "Error",
                    error : {
                        message : "Upload failed"
                    }
                })
            }

            // const response = await Product.findOne({
            //     where : {
            //         id : Product.id
            //     },
            //     attributes : {
            //         exclude : ["cloudinary_id_bookFile","cloudinary_id","createdAt","updatedAt"]
            //     }
            // })

            return res.send({
                status : "Success",
                message : "Book Success Created",
                // data : {
                //     book : response
                // }
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
