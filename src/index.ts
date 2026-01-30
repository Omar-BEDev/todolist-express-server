import express from 'express'
import taskApp from './api/routes/tasks.routes';
import userRoutes from './api/routes/users.routes';
import cors from "cors"
import swaggerui from "swagger-ui-express"
import swaggerDocument from "./docs/swagger.json"


const app = express();
app.use(cors())
app.use(express.json())
app.use("/api/tasks",taskApp)
app.use("/api/users",userRoutes)
app.use("/docs",swaggerui.serve,swaggerui.setup(swaggerDocument))

export default app
