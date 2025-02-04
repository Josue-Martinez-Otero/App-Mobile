import { Router } from "express";
import teachersController from '../controllers/teachers.controller.js';

const teachersRoutes=Router();
teachersRoutes.get('/getAll',teachersController.getAll);
teachersRoutes.get('/getOne/:teacher_number',teachersController.getOne);
teachersRoutes.post('/insert',teachersController.insert);
teachersRoutes.put('/updateOne/:teacher_number',teachersController.updateOne);
teachersRoutes.delete('/deleteOne/:teacher_number',teachersController.deleteOne);

export default teachersRoutes;