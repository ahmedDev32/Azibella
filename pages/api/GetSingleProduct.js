import fs from "fs";
import connectDb from "@/middleware/db"
import Products from "@/Models/PostProduct";
import path from "path";


let handler = async (req, res) => {
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
        let id = req.query.Id;
        console.log(id);

                try {
                    let filteredData = await Products.findOne({_id : id}); // Filter out the data with the given id
                    console.log(filteredData)
                    return res.status(200).json({ data: filteredData, success: true }); // Send the filtered data as response
                } catch (parseError) {
                    return res.status(500).json({ msg: "Error Parsing JSON", success: false });
                }
   

    } catch (error) {
        return res.status(500).json({ msg: "Internal Error", success: false });
    }
}

export default connectDb(handler);
