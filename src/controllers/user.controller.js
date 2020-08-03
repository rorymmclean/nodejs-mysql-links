const userCtrl = {};

const pool = require("../database");

userCtrl.renderUserProfile = (req, res, next) => {
  pool.query('SELECT * FROM openemr.patient_data limit 10', (err, rows) => {
      res.render('profile', { rows }) 
  });
}

module.exports = userCtrl;