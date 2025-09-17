const ex = require('express
const {cc, gc, uc} = require("../controllers/customerController");
constr = ex. Router()
r.post('/customers', cc);
r.get('/customers', gc);
r.put('/customer/:id', uc);
module.exports = r;
