const classroomDAO = {};
import Classroom from "../models/Classrooms.js";

classroomDAO.getAll = async () => {
  return await Classroom.find();
};
classroomDAO.getOne = async (classroom_ID) => {
  return await Classroom.findOne({ classroom_ID: classroom_ID });
};
classroomDAO.insert = async (classroom) => {
  return await Classroom.create(classroom);
};
classroomDAO.updateOne = async (classroom_id, classroom) => {
  return await Classroom.findOneAndUpdate(
    { classroom_ID: classroom_id },
    classroom
  );
};
classroomDAO.deleteOne = async (classroom_id) => {
  return await Classroom.findOneAndDelete({ classroom_ID: classroom_id });
};

export default classroomDAO;
