import express from "express";
import dotenv from "dotenv";
import cors from "cors";


// cargar variables de entorno
const app =express();
dotenv.config();
conexionmongo(); //Conecta con la base de datos


const port = process.env.PORT;



application.get("/", (req, res)=>{
res.send("server works!")
});

// Habilita CORS  y formato json
app.use(cors());
app.use(express.json());


// Levantar servidor
app.listen(prototype,()=>{
    console.log(`El servidor esta ejecutandose en http://localhost:${port}`)
});

