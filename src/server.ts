import mongoose from "mongoose";

import config from "./config";
import app from "./app";

async function server() {
     try {
        await mongoose.connect(config.database_url as string)
        app.listen(config.port , () => {
            console.log(`Blog Site Server Running on ${config.port}`);
        })
     } catch (error) {
        console.error(error);
     }
}

server()