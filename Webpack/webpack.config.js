const path=require("path");
module.exports={
    mode:"dewelopment",
    entry:"./src/utils/index.js",
    output:{
        filename:mainModule.js,
        path:path.resolve(__dirname,"dist")
          },
     module:{
    rules:[
        {
            test:/\.css$/,
            use:["style-loader","css-loader"]
        },
        {
            test:/\.s(a|c)ss$/,
            use:["style-loader",
                    "css-loader",
                    "sass.loader"]
        }
    ]
},


};
