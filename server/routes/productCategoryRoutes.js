// routes/productCategory.js
import express from "express";
import { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory } from "../controllers/productCategoryController.js";
import adminAuth from "../middleware/adminAuth.js";

const router = express.Router();

/**
 * CREATE category (ADMIN)
 */
router.post("/", adminAuth, createCategory);

/**
 * GET all categories (PUBLIC)
 */
router.get("/", getAllCategories);

/**
 * GET category by ID
 */
router.get("/:id", getCategoryById);

/**
 * UPDATE category (ADMIN)
 */
router.put("/:id", adminAuth, updateCategory);

/**
 * DELETE category (ADMIN)
 */
router.delete("/:id", adminAuth, deleteCategory);

export default router;