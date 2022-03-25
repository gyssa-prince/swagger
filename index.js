import express from 'express'
import router from './routes/index.js'
import swaggerDocs from './swagger.js'

const app = express()
const port = 4000

app.use(express.json())
app.use(router)


  swaggerDocs(app, port)

//To listen the server
app.listen(process.env.PORT || 4000);
