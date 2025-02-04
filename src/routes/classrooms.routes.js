import { Router } from "express";
import classroomController from '../controllers/classrooms.controller.js'

const classroomRoutes=Router();
classroomRoutes.get('/getAll',classroomController.getAll);
classroomRoutes.get('/getOne/:classroom_ID',classroomController.getOne);
classroomRoutes.post('/insert',classroomController.insert);
classroomRoutes.put('/updateOne/:classroom_id',classroomController.updateOne);
classroomRoutes.delete('/deleteOne/:classroom_id',classroomController.deleteOne);

export default classroomRoutes;