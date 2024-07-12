const mongoose = require('mongoose');

const main = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/e-comm");
    const ProductSchema = new mongoose.Schema({name:String});

    const productModel = mongoose.model('products',ProductSchema);
    let data = new productModel({name:"m8"});
    let result = await data.save();
    console.log(result);
}

main();