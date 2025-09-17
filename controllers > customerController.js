const Cust = require('../models/customerModel');
const createCustomer = async (req, res, next) => {
try{
const {name, email, phone, isActive) = req.body;
if(!name || ! email || !phone) return res.status (404).json({message: "Name, email, and phone are required"});
const c = new Cust({name, email, phone, isActive});
const s await c.save();
res.status(201).json(s);
} catch(err) { next(err); }
};
const getAllCustomers = async(req, res, next) => {
try { res.status(200).json(await Cust.find()); } catch(err) { next(err);}
};
const updateCustomer = async (req, res, next) => {
};
try {
const u await Cust.findByIdAndUpdate(req.params.id, req.body, {new: true});
if(!req.body.name || !req.body.email || !req.body.phone)
return res.status(404).json({message: "Name, email, and phone are required to update the customer"});
if(!u) return res.status (404).json({message: "Customer not found"});
res.status (200).json(u);
} catch(err) { next (err); }
