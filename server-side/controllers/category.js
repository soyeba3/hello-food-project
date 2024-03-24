const Category = require("../models/Category");
const createError = require("../error");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

const categorylist = async (req, res, next) => {
  try {
    const categories = await Category.find().populate("products");

    res.status(200).json(categories);
  } catch (err) {
    return next(err);
  }
};

const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;

    const regex = /[^a-zA-Z0-9 ]/g;

    let categoryUrl = name.toLowerCase().replace(regex, "").replace(/ /g, "-");

    //Check duplicate product name
    let dupCategoryName = await Category.findOne({ categoryUrl });

    if (dupCategoryName) {
      if (req.file) {
        fs.unlink(req.file.path, (err) => {
          return next(err);
        });
      }
      return next(
        createError(409, "Duplicate name found! Please change the name.")
      );
    }

    // handle image upload
    let uploadedFile;
    if (req.file) {
      // Save image to cloudinary
      const {filename, path} = req.file;

      // uploadedFile = await cloudinary.uploader.upload(req.file.path, {
        //   folder: "hallo_food/category_image",
        //   resource_type: "image",
        // });


        uploadedFile = {
          url: path,
          name: filename
        }
    } else {
      createError(404, "Image Not Found") 
    }

    const category = new Category({
      ...req.body,
      categoryUrl,
      img: {...uploadedFile},
    });

    await category.save();

    // if (req.file) {
    //   fs.unlink(req.file.path, (err) => {
    //     return next(err);
    //   });
    // }

    res.status(200).send("Product added succesfully!");
  } catch (err) {
    return next(err);
  }
};

//Update a catergory
const updateCategory = async (req, res, next) => {
  try {

    let {name} = req.body;
    const id = req.params.id;
    
    const category = await Category.findById(id);

    const img = category.img

    if(!name){
      name = category.name;
    }


    if (!category) {
      if (req.file) {
        fs.unlinkSync(req.file.path, (err) => {
          return next(createError(403, "Category Not Found!"));
        });
      }
      return next(createError(404, "Name not found!"));
    }

    const regex = /[^a-zA-Z0-9 ]/g;

    let categoryUrl = name.toLowerCase().replace(regex, "").replace(/ /g, "-");

    const dupCategoryName = await Category.findOne({
      _id: { $ne: id },
      categoryUrl,
    });

    if (dupCategoryName) {
      if (req.file) {
        fs.unlinkSync(req.file.path, (err) => {
          return next(createError(403, "Something went wrong!"));
        });
      }
      return next(
        createError(409, "Duplicate name found! Please change the name.")
      );
    }

    // handle image upload
    let uploadedFile = {
      url: img.url,
      name: img.name,
    };

    // if (req.file) {
    //   // Delete previous one first
    //   const response = await cloudinary.uploader.destroy(publicid);

    //   // Save image to cloudinary
    //   uploadData = await cloudinary.uploader.upload(req.file.path, {
    //     folder: "hallo_food/category_image",
    //     resource_type: "image",
    //   });

    //   uploadedFile = {
    //     url: uploadData.url,
    //     publicid: uploadData.public_id,
    //   };
    // }

    // If file exist
    if (req.file) {
      // Save image to cloudinary
      const {filename, path} = req.file;

      // uploadedFile = await cloudinary.uploader.upload(req.file.path, {
        //   folder: "hallo_food/category_image",
        //   resource_type: "image",
        // });

        

        fs.unlinkSync(uploadedFile.url, (err) => {
          return next( createError(403, "Image cannot be deleted!"));
        });


        uploadedFile = {
          url: path,
          name: filename
        }
    } else {
      createError(404, "Image Not Found") 
    }

    await Category.findByIdAndUpdate(id, {
      $set: {
        name,
        categoryUrl,
        img: uploadedFile,
      },
    });

    res.status(200).send("Product updated successfully!");
  } catch (err) {
    return next(err);
  }
};

//Delete a product
const deleteCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return next(createError(404, "Category not found!!!"));
    }

    if (category.products[0]) {
      return next(
        createError(
          403,
          "Products are exist in category. Please remove the products first!"
        )
      );
    }

    const categoryId = category?._id;

    // Cloudinary Image delete
    // const publicid = category.img.publicid;

    // await cloudinary.uploader.destroy(publicid);

    // File storage image delete
    const path = category.img.url ;

    await Category.deleteOne({ _id: categoryId });

    fs.unlinkSync(path,(err)=>{
      next (createError(
        403,
        "Image cannot be deleted!"
      ))
    });


    res.status(200).send("Product deleted succesfully!");
  } catch (err) {
    return next(err);
  }
};

//Get product according to category
const getCatProduct = async (req, res, next) => {
  try {
    const category = await Category.findOne({
      categoryUrl: req.params.categoryUrl,
    }).populate("products");

    res.status(200).json(category.products);
  } catch (err) {
    return next(err);
  }
};

//get a single category
const singleCategory = async (req, res, next) => {
  try {
    const category = await Category.findOne({
      categoryUrl: req.params.categoryUrl,
    }).populate("products");

    if (!category) return res.status(404).send("Category not found!");

    res.status(200).send(category);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  categorylist,
  createCategory,
  updateCategory,
  getCatProduct,
  deleteCategory,
  singleCategory,
};
