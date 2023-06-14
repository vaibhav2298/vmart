import express from "express";
import {
  brainTreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productListController,
  productPhotoController,
  realtedProductController,
  updateProductController,
} from "./../controllers/productController.js";
import { isAdmin, requireSignIn } from "./../middleWare/authMiddleware.js";
import formidable from "express-formidable";
 
const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);


//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

//payments routes

//token
router.get("/braintree/token", braintreeTokenController);


//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router;