import {model,Schema} from 'mongoose';
const studentsSchema=new Schema({
    student_id:{
        unique:true,
        require:true,
        type:Number
    },
    name:String,
    lastname:String,
    grade:Number,
    group:String,   
    average:Number
},{
    versionKey:false,
    timestamps:true,
});
export default model('student',studentsSchema); 