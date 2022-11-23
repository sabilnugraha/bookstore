const {Category} = require('../../models');
exports.addCategory = async (req, res) => {
    try {
      const newCategory = await Category.create(req.body);
  
      res.send({
        status: "success...",
        data: {
          id: newCategory.id,
          name: newCategory.name,
        },
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        status: "failed",
        message: "Server Error",
      });
    }
  };