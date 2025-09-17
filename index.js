const ex = require('express');
const mg = require('mongoose');
constr = require('./routers/customerRoutes');
const eh = require('./middlewares/errorHandler');
const app = ex();
app.use(ex.json());
mg.connect("mongodb://127.0.0.1:27017/customerDB")
.then(() => console.log("DB connected"))
.catch(err => console.error(err));
app.use('/api', r);
app.use(eh);
app.listen(8080, () => console.log("Server running on 8080"));
