import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import Catalog from "../views/Catalog.vue";
import Products from "../views/Products.vue";
import LoginForm from "../views/LoginForm";
import Registration from "../views/RegistrationForm";
import ProductDetails from "../views/ProductDetails.vue";
import ShoppingCart from "../views/ShoppingCart";
import Subcategories from "../views/Subcategories";
import ForgetPassword from "../views/ForgetPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: Catalog,
  },
  {
    path: "/catalog/:category_id",
    name: "Catalog",
    component: Subcategories,
  },

  {
    path: "/subcategories/:category_id/:subcategory_id",
    name: "Subcategories",
    component: Products,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/products/:product_id",
    name: "ProductDetails",
    component: ProductDetails,
  },
  {
    path: "/cart",
    name: "Cart",
    component: ShoppingCart,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginForm,
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/resetPassword",
    name: "ResetPassword",
    component: ResetPassword,
  },
  {
    path: "/resetPassword/:token",
    name: "ResetPassword",
    component: ResetPassword,
  },
  {
    path: "/forgetPassword",
    name: "ForgetPassword",
    component: ForgetPassword,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
