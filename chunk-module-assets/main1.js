require("./chunk1");
require("./chunk2");
if(true){
  require.ensure([],function(require){
     require('../map.png');
  })
}
