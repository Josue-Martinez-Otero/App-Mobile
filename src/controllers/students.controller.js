//Aquí se procesan las peticiones provenientes del routes
import studentDAO from "../dao/students.dao.js";

const studentsController = {};

studentsController.getAll = (req, res) => {
  studentDAO.getAll()
    .then((students) => {
      console.log(students);
     /* res.json({
        //Aqui se le pide a DAO los datos de los estudiantes
        data: students,
      });*/
       res.render('../src/views/index.ejs', {students});//guia la renderización a la carpeta
    })
    .catch((error) => {
      res.json({
        data: {
          message: error,
        },
      });
    });
};

studentsController.getOne = (req, res) => {
  studentDAO.getOne(req.params.student_id)
  .then((student) => {
   /* if (students != null) res.json({ data: students });
    else res.json({ message: "Student not found" });
  */
  res.render('../src/views/edit.ejs', {student});
    });
};

studentsController.insert = (req, res) => {
  studentDAO.insert(req.body)
    .then((response) => {
      /*res.json({
        data: {
          message: "Student saved",
          student: response,
        },
      });*/
      res.direct('/api/students/getAll');
    })
    .catch((error) => {
      res.json({ data: { message: error } });
    });
};

studentsController.updateOne = (req, res) => {
  studentDAO
    .updateOne(req.params.student_id, req.body)
    .then((response) => {
     /* res.json({
        data: {
          message: "Student updated successfully",
          student: response,
        },
      });*/
      res.redirect('/api/students/getAll')
    })
    .catch((error) => {
      res.json({ data: { message: error } });
    });
};
studentsController.deleteOne = (req, res) => {
  studentDAO.deleteOne(req.params.student_id)
    .then((response) => {
      /* res.json({
        data: {
          message: "Student deleted successfully",
          student: response,
        },
      });*/
      res.redirect('/api/students/getAll')
    })
    .catch((error)=>{
      res.json({
          data:{message:"Student not found"}
      })
  })
}

export default studentsController;
