import express from 'express';
import {registerController, loginController,testController, forgotPasswordController, updateProfileController, getOrdersController, getAllOrdersController, orderStatusController} from '../controllers/authController.js';
import { isAdmin, requireSignIn } from './../middleWare/authMiddleware.js';

//router object
const router = express.Router();

//routing
//REGISTER
router.post('/register', registerController );

//forgot password
router.post('/forgot-password', forgotPasswordController)

//LOGIN
router.post('/login', loginController);

//test routes
router.get('/test', requireSignIn,isAdmin, testController);

//protected user route
router.get('/user-auth', requireSignIn, (req,res) =>{
    res.status(200).send({ok: true});
});

//protected Admin route
router.get('/admin-auth', requireSignIn, (req,res) =>{
    res.status(200).send({ok: true});
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);


export default router;