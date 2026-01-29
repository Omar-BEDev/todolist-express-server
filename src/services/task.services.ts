import { ObjectId } from 'mongoose';
import {ITask} from '../interfaces'
import Task, { TaskDocument } from '../models/task.model';
import { User } from '../models/user.models';

export const processTaskRequest = (name : string, id : ObjectId) : ITask=> {
    
    
    const result : ITask = {
        taskName : name,
        userId : id,
        date : new Date()
    
    }
    return result;
}

export const processDeleterequest = async (id : string) : Promise<string> => {
    const deleteTask = await Task.findByIdAndDelete(id);
    if (!deleteTask) throw new Error("the task delete not completed")
    return "delete task complete"
}

export const updateTaskProcess = async (id : string, newName : string)  => {

   const taskInfo : TaskDocument | null = await Task.findOneAndUpdate(
    {_id : id},
    {taskName: newName},
    {new : true}

);
    if (!taskInfo)  throw new Error("we didnt fount task ")
    return taskInfo

}