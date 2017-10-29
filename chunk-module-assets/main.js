require("./chunk1");
require("./chunk2");
console.log('main1.');
if(true){
  //  require.ensure([],function(require){
  //    require('vue');
  // })
  require.ensure([],function(require){
     require('vue');
  },"hello")
}
