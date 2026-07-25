const app = require("./src/App")
const connectDB = require("./src/db/db")    // Connects DataBase (DB)

connectDB();

app.listen(4000, () => {
    console.log("Server is running on port 4000");
})