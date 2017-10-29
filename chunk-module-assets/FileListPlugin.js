const util = require('util');
function FileListPlugin(options) {}

FileListPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {
    // Create a header string for the generated file:
    var filelist = 'In this build:\n\n';

    // Loop through all compiled assets,
    // adding a new line item for each filename.
    for (var filename in compilation.assets) {
      filelist += ('- '+ filename +'\n');
    }
    const chunks = compilation.chunks;
    chunks.forEach(function(chunk,i){
      console.log('chunk.name====',chunk);
    });



    const assets = compilation.getStats().toJson().assets;
    assets.forEach(function(asset,i){
      console.log('asset.name====',asset.name);
      console.log('asset.chunkNames====',asset.chunkNames);
       console.log('asset.chunks====',asset.chunks);
        console.log("----------------");
    });
    // 所有的chunk的都有name，但是通过require.ensure产生的chunk除外
    // console.log('++++++++',util.inspect(compilation.chunks,{showHidden:true,depth:3}));
    // Insert this list into the Webpack build as a new file asset:
    compilation.assets['filelist.md'] = {
      source: function() {
        return filelist;
      },
      size: function() {
        return filelist.length;
      }
    };

    callback();
  });
};

module.exports = FileListPlugin;
