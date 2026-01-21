import { Request, Response } from "express";
import { processTaskRequest ,processDeleterequest,updateTaskProcess} from "../services/task.services";
import Task from "../interfaces";


let tasks : Task[] = []


export const addTask = (req : Request, res : Response) => {
    const {name, id} = req.body

    const newTask : Task = processTaskRequest(name,id);
    
    tasks.push(newTask)
    
    res.status(201).json(tasks)
}

export const getTask = (req : Request,res : Response) => {
    res.status(200).json(tasks)
}

export const deleteTask = (req : Request,res : Response) => {
    const id = Number(req.params.id)
    try {
     const tasksprocessResult : string = processDeleterequest(tasks,id);
       return res.status(200).json(tasksprocessResult)

    } catch (error) {
      return  res.status(404).json("error :" + error)
    }
    
}
export const updateTask = (req : Request,res : Response) => {
  const {id, newId, newName} = req.body;
  try{
    const taskUpdate : Task = updateTaskProcess(tasks,id,newId,newName)
    return res.status(200).json(taskUpdate)
  }
  catch (error){
    return res.status(400).json("error :" + error)
  }
  
}