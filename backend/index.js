// import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
// import cart from "./routes/cart.route.js";
import route from "./routes/register.js";
const app = express();

import "./dataBase.js";
// app.use(bodyParser.json());
app.use(express.json())
app.use(cors());

app.use("/",route);
// app.use("/ex-cart",cart);
//here
// export default router;

app.listen(8001, () => {
    console.log(`Server is running on port 8001`);
});