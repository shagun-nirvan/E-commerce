import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://nirvanshagun:6398956446@cluster0.iregmvg.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}