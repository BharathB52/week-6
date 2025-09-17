const mg = require("mongoose");
const cs = new mg. Schema ({
name: {
type: String,
required: true
},
email: {
type: String,
required: true
},
phone: {
type: String,
required: true
},
isActive: {
type: Boolean,
default: true
}
});
module.exports = mg.model("Customer", cs);
