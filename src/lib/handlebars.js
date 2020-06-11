//const timeago = require('timeago.js');
//const timeagoInstance = timeago();

const helpers = {};

//helpers.timeago = (savedTimestamp) => {
//    return timeagoInstance.format(savedTimestamp);
//};

var register = function(Handlebars) {
    var helpers = {
    ifCond: function(v1, v2, options) {
        if(v1 === v2) {
            return options.fn(this);
          }
          return options.inverse(this);
        }     
    };

if (Handlebars && typeof Handlebars.registerHelper === "function") {
    for (var prop in helpers) {
        Handlebars.registerHelper(prop, helpers[prop]);
    }
} else {
    return helpers;
}
};

module.exports.register = register;
module.exports.helpers = register(null); 

//module.exports = helpers;