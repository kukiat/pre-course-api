import express from 'express'
import bodyParser from 'body-parser'
import 'babel-polyfill'
import cors from 'cors'
import router from './router'
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

const options = {
	origin: true,
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	credentials: true,
	exposedHeaders: ['x-auth-token']
}
app.use(cors(options)) 

app.use('/api', router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`server start at port ${PORT}`)
})
