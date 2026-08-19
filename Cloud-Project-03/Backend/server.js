require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/db");

connectDB()
.then(() => {
        app.listen(5000, () => {
            console.log("Server is running on port 5000");
        });
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB:", err.message);
        process.exit(1);
    });