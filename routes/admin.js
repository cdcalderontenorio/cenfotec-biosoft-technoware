const express = require("express");
const router = express.Router();
const adminController = require('../controllers/admin.js');


const productsController = require('../controllers/products.js');
const tramosController = require('../controllers/tramos.js');
const userController = require('../controllers/user.js');
const ventasController = require('../controllers/ventas.js');



// Home page route.
router.get("/impuestoAdmin", adminController.getImpuestoAdmin);

//product report manager route
router.get("/reporteProductos", productsController.getReportProductsAdmin);

//Tramo report manager route
router.get("/reporteTramos", tramosController.getReportTramosAdmin);
router.post("/obtenerTramos",tramosController.getAllTramos);

//User report manager route
router.get("/reporteUsuarios", userController.getReportUserAdmin);

//Sales report manager route
router.get("/reporteVentas", ventasController.getReportSalesAdmin);

/**
 * Set the route for the administrator´s profile
 */
router.get("/perfilAdministrador", userController.getAdminProfile);

router.get("/solicitudesPendientes", adminController.getPendingRequests);

router.get("/registrarCategoria", adminController.getRegistrarCategoria);
router.get("/getAllVendors", userController.getAllVendors);

module.exports = router;