import teacherDAO from "../dao/teachers.dao.js";

const teachersController = {};
teachersController.getAll = (req, res) => {
  teacherDAO
    .getAll()
    .then((teachers) => {
      res.json({
        data: teachers,
      });
    })
    .catch((error) => {
      res.json({
        data: {
          message: error,
        },
      });
    });
};
teachersController.getOne = (req, res) => {
  teacherDAO.getOne(req.params.teacher_number).then((teachers) => {
    if (teachers != null) res.json({ data: teachers });
    else res.json({ data: { message: "Teacher not found" } });
  });
};

teachersController.insert = (req, res) => {
  teacherDAO
    .insert(req.body)
    .then((response) => {
      res.json({
        data: {
          message: "Teacher saved",
          teacher: response,
        },
      });
    })
    .catch((error) => res.json({ data: { message: error } }));
};

teachersController.updateOne = (req, res) => {
  teacherDAO
    .updateOne(req.params.teacher_number, req.body)
    .then((response) => {
      res.json({
        data: {
          message: "teacher updated successfully",
          teacher: response,
        },
      });
    })
    .catch((error) => {
      res.json({ data: { message: error } });
    });
};

teachersController.deleteOne = (req, res) => {
  teacherDAO
    .deleteOne(req.params.teacher_number)
    .then((response) => {
      res.json({
        data: {
          message: "Teacher deleted successfully",
          teacher: response,
        },
      });
    })
    .catch((error) => {
      res.json({ data: { message: error } });
    });
};

export default teachersController;
