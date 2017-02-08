// var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
// module.exports = {
//   entry: 
//   {
//     main:process.cwd()+'/example1/main.js',
//   },
//   output: {
//     path:process.cwd()+'/dest/example1',
//     filename: '[name].js'
//   },
//   plugins: [
//    new CommonsChunkPlugin({
//        name:"chunk",
//        minChunks:2
//    })
//   ]
// };




// var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
// module.exports = {
//   entry: 
//   {
//       main:process.cwd()+'/example2/main.js',
//       main1:process.cwd()+'/example2/main1.js',
//   },
//   output: {
//     path:process.cwd()+'/dest/example2',
//     filename: '[name].js'
//   },
//   plugins: [
//    new CommonsChunkPlugin({
//        name:"chunk",
//        minChunks:2
//    })
//   ]
// };





// var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
// module.exports = {
//     entry: {
//         main: process.cwd()+'/example3/main.js',
//         main1: process.cwd()+'/example3/main1.js',
//         common1:["jquery"],
//         common2:["vue"]
//     },
//     output: {
//         path: process.cwd()+'/dest/example3',
//         filename: '[name].js'
//     },
//     plugins: [
//         new CommonsChunkPlugin({
//             name: ["chunk",'common1','common2'],

//             minChunks:2

//         })
//     ]
// };



// var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
// module.exports = {
//     entry: {
//         main: process.cwd()+'/example4/main.js',
//         main1: process.cwd()+'/example4/main1.js',
//         jquery:["jquery"],
//         vue:["vue"]
//     },
//     output: {
//         path: process.cwd() + '/dest/example4',
//         filename: '[name].js'
//     },
//     plugins: [
//         new CommonsChunkPlugin({
//             name: ["common","jquery","vue","load"],
//             minChunks:2
//         })
//     ]
// };


var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
    entry: {
        main: process.cwd()+'/example5/main.js',
        main1: process.cwd()+'/example5/main1.js',
        jquery:["jquery"]
    },
    output: {
        path: process.cwd() + '/dest/example5',
        filename: '[name].js'
    },
    plugins: [
        new CommonsChunkPlugin({
            name: "jquery",
            minChunks:2

        })
    ]
};




