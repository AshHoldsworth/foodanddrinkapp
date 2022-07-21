const express = require('express')
const cors = require('cors')
const dbHelper = require('./db/database-helper')
const app = express()
const port = 8080

const process = require('process')
process.title = "FoodAndDrinkExpressApp"

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.get('/collection/:collectionName', async (request, response) => {
    const documents = await dbHelper.getCollection(request.params.collectionName)
    console.log("documents: ", documents)
    response.send(documents)
})

// Activate!
app.listen(port, () => {
    console.log(`App running on port ${port} as process ${process.title}`)
})
