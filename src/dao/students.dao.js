//Aqui se comunica con la base de datos
const studentDAO = {};
import Student from "../models/Student.js";

studentDAO.getAll = async () => {
  return await Student.find();
};
studentDAO.getOne = async (student_id) => {
  return await Student.findOne({ student_id: student_id }); //no confundir el atributo con el metodo de busqueda
};
studentDAO.insert = async (student) => {
  return await Student.create(student);
};
studentDAO.updateOne = async (student_id, student) => {
  return await Student.findOneAndUpdate({ student_id: student_id }, student);
};
studentDAO.deleteOne = async (student_id) => {
  return await Student.findOneAndDelete({ student_id: student_id });
};

export default studentDAO;
