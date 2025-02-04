//Aquí van la conexión a la Base de Datos mongoose
import mongoose from "mongoose";

mongoose.connect('mongodb+srv://JosOtero:db230166@bdjos.qd3wi.mongodb.net/?retryWrites=true&w=majority&appName=BDJos')
.then((db)=>console.log("MongoDB atlas connected"))
.catch((error)=>console.error(error));


export default mongoose;