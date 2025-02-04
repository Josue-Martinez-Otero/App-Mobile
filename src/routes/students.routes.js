//Rutas para los estudiantes
import { Router } from 'express';
import studentsController from '../controllers/students.controller.js';

const studentsRoutes = Router();
studentsRoutes.get('/getAll',studentsController.getAll);
studentsRoutes.get('/getOne/:student_id',studentsController.getOne);
studentsRoutes.post('/insert',studentsController.insert);
studentsRoutes.post('/updateOne/:student_id',studentsController.updateOne);
studentsRoutes.get('/deleteOne/:student_id',studentsController.deleteOne);

export default studentsRoutes;