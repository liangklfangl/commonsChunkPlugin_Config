require("./chunk1");
require("./chunk2");
require('../map.png');
// if(true){
//   require.ensure([],function(require){
//     require('jquery');
//   })
// }

if(true){
  require.ensure([],function(require){
    require('jquery');
  },'world')
}
