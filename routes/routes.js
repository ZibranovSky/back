// import express
import express from "express";
 
// import function from controller
import { showPegawai, showPegawaiById, createPegawai, updatePegawai, delPegawai } from "../controllers/pegawai.js";
 
// init express router
const router = express.Router();
 
// Get All Product
router.get('/pegawai', showPegawai);
 
// Get Single Product
router.get('/pegawai/:id', showPegawaiById);
 
// Create New Product
router.post('/AddPegawai', createPegawai);
 
// Update Product
router.put('/updatePegawai/:id', updatePegawai);
 
// Delete Product
router.delete('/delPegawai/:id', delPegawai);
 
// export default router
export default router;