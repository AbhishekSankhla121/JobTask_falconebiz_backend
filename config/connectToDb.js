import mongoose from "mongoose"
const connectToDb = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.DATABASE_URL);
        console.log("\nserver connected with mongodb sucessfully with:", connection.host);
    } catch (error) {
        console.log("\nerror in connection of Database:", error);
    }
}

export default connectToDb;