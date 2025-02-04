import {model,Schema} from 'mongoose';
const classroomSchema=new Schema({
    classroom_ID:{
        unique:true,
        require:true,
        type:Number
    },
    building:String,
    career:String,
    type:String,
    capacity:Number
},{
    versionKey:false,
    timestamps:true,
});
export default model('classrooms',classroomSchema);