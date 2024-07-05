import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import dbInit from "./data/db-init.js";

import trackRouter from "./routes/trackRouter.js";
import genreRouter from "./routes/genreRouter.js";

import logger from "./middlewares/requestLogger.js";
import errorHandler from "./middlewares/errorHandler.js";
import notFound from "./middlewares/notFound.js";

dotenv.config();

const app = express();

app
    .use(cors())
    .use(express.json());

// Logs
if (process.env.LOG === "true") {
    app.use(logger);
}

app.get("/api/status", (req, res) => {
    res.json({ respuesta: "API iniciada y escuchando..." });
});

app
    .use("/api/tracks", trackRouter)
    .use("/api/genres", genreRouter);

app
    .use(errorHandler)
    .use(notFound);

async function start() {
    const PORT = process.env.PORT || 3000;

    // Inicializar la conexión a la base de datos
    await dbInit();

    // Iniciar el servidor
    app.listen(PORT, () => {
        console.log(`Servidor iniciado y escuchando en el puerto ${PORT}`);
    });
}

await start();
