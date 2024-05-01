const path = require("path");
// 
 
module.exports = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false, //  
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')], 
  }  
};