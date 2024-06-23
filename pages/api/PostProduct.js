import Products from "@/Models/PostProduct";
import connectDb from "@/middleware/db"
import fs from "fs/promises"; // Use the promise-based version of fs


let handler = async(req,res)=>{

    try {
        res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, DELETE, PUT');
        res.setHeader(
            'Access-Control-Allow-Headers',
            'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
        );

        // Handle preflight requests
        if (req.method === 'OPTIONS') {
            res.status(200).end();
            return;
        }
        let {name,imageUrl,price,description,category} = req.body
        let newProduct = new Products({
            name,imageUrl,price:`$${price}`,description,category,id:name
        })
        // let data = await fs.readFile("./Models/products.json","utf-8")
        // let products = JSON.parse(data)
        // products.push(newProduct)
        // await fs.writeFile("./Models/products.json",JSON.stringify(products,null,2))
        await newProduct.save({})
        return res.status(200).json({success:true,msg:"Product Posted",newProduct})


    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,msg:"Internal Error Try Again Later"})
    }

}

export default connectDb(handler)