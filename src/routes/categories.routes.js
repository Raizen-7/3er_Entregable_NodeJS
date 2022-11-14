const { Router } = require("express");

//Controllers
const { 
    createCategory,
    deleteCategory
} = require('../controllers/categories.controllers');

const router = Router();

router.post("/categories", createCategory);

router.put("/categories", deleteCategory);

module.exports = router;