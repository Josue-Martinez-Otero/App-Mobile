//Aquí va la configuración del Servidor
import express from 'express';//sirve para crear
import morgan from 'morgan';
import ejs from 'ejs';
import studentsRoutes from './routes/students.routes.js';
import teachersRoutes from './routes/teachers.routes.js';
import classroomRoutes from './routes/classrooms.routes.js'
const app=express();

    //Settings
    app.set('port',process.env.PORT||3000);
    app.set('view engine',ejs);//motor de vistas con ejs

    //Midelwares
    app.use(express.json());//lee los datos json
    app.use(express.urlencoded({extended:true}));//entiende formularios
    app.use(morgan('dev'));//vizualizar las peticiones en consola (saber si llegó o no la petición)**se activa aquí**

//Routes
app.use("/api/students", studentsRoutes);//envia a una ruta para activar el controlador(crea la ruta)[invoca una función]**Es un apuntador**
app.use("/api/teachers", teachersRoutes);
app.use("/api/classrooms", classroomRoutes);

export default app;
//investigar davt, react native