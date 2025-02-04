import classroomDAO from "../dao/classrooms.dao.js";

const classroomsController = {};
classroomsController.getAll = (req, res) => {
  classroomDAO
    .getAll()
    .then((classrooms) => {
      res.json({
        data: classrooms,
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
classroomsController.getOne = (req, res) => {
  classroomDAO.getOne(req.params.classroom_ID).then((classrooms) => {
    if (classrooms != null) res.json({ data: classrooms });
    else res.json({ data: { message: "Classroom not found" } });
  });
};

classroomsController.insert = (req, res) => {
  classroomDAO
    .insert(req.body)
    .then((response) => {
      res.json({
        data: {
          message: "Classroom saved",
          classroom: response,
        },
      });
    })
    .catch((error) => {
      res.json({ data: { message: error } });
    });
};

classroomsController.updateOne = (req, res) => {
  classroomDAO
    .updateOne(req.params.classroom_id, req.body)
    .then((response) => {
      res.json({
        data: {
          message: "Classroom updated successfully",
          classroom: response,
        },
      });
    })
    .catch((error) => {
      res.json({ data: { message: error } });
    });
};

classroomsController.deleteOne = (req, res) => {
  classroomDAO
    .deleteOne(req.params.classroom_id)
    .then((response) => {
      res.json({
        data: {
          message: "Classroom deleted successfully",
          classroom: response,
        },
      });
    })
    .catch((error) => {
      res.json({ data: { message: error } });
    });
};

export default classroomsController;
