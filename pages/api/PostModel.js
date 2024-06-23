import connectDb from "@/middleware/db";
import Products from "@/Models/PostProduct";

let handler = async (req, res) => {
  try {
    for (let i = 0; i < req.body.length; i++) {
      let newProduct = new Products({
        name: req.body[i].name,
        category: req.body[i].category,
        description: req.body[i].description,
        price: req.body[i].price,
        id: req.body[i].name, // Ensure this is unique or use a different unique field
        imageUrl: req.body[i].imageUrl
      });
      await newProduct.save();
    }
    return res.status(200).json({ msg: "Products Posted", success: true });
  } catch (error) {
    console.error("Error saving products:", error);
    return res.status(500).json({ success: false, msg: "Internal Error Occurred" });
  }
}

export default connectDb(handler);
