// import connection
import db from "../config/database.js";
 
// Get All Products
export const showPegawai = (req, res) => {
    db.query("SELECT * FROM siswa", (err, results) => {             
        if(err) {
            console.log(err);
        } else {
            var data = {code: 200, data: results}
            res.json(data);
        }
    });   
}
 
// Get Single Product 
export const showPegawaiById = (req, res) => {
    var id = req.params.id;
    db.query("SELECT * FROM siswa WHERE id = ?", id, (err, results) => {             
        if(err) {
            console.log(err);
        } else {
            res.json(results[0]);
        }
    });   
}
 
// Create New Product
export const createPegawai = (req, res) => {
    var data = req.body;
    db.query("INSERT INTO siswa SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
        } else {
            res.json(results);
        }
    });   
}
 
// Update Product
export const updatePegawai = (req, res) => {
    var data = req.body;
    var id = req.params.id;
    var nis = data.nis;
    var namasiswa = data.namasiswa;
    var alamatsiswa = data.alamatsiswa;
    db.query("UPDATE siswa SET nis = ?, namasiswa = ?, alamatsiswa = ? WHERE id = ?", [nis, namasiswa, alamatsiswa, id], (err, results) => {             
        if(err) {
            console.log(err);
        } else {
            res.json(results);
        }
    });   
}
 
// Delete Product
export const delPegawai = (req, res) => {
    var id = req.params.id;
    db.query("DELETE FROM siswa WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
        } else {
            res.json(results);
        }
    });   
}