import express from 'express'
import taskApp from './api/routes/tasks.routes';
import userRoutes from './api/routes/users.routes';

const app = express();

app.use(express.json())
app.use("/api/tasks",taskApp)
app.use("/api/users",userRoutes)

export default app