const express = require("express");
const router = express.Router();
const {getProductById, postProduct, putProduct, deleteProductById} = require("../controllers/productController.js");
const checkAdminUtil = require("../utils/checkAdmin")

const ADMIN = process.env.ADMIN
const checkAdmin = checkAdminUtil(ADMIN);

router.get("/:id?", getProductById) 
router.post("/", checkAdmin, postProduct)
router.put("/:id", checkAdmin, putProduct)
router.delete("/:id", checkAdmin, deleteProductById)

module.exports = router;