const mongoClient = require('mongodb').MongoClient
const URL = "mongodb://mongodb:27017/"
const DATABASE_NAME = "foodanddrinkapp"

const getCollection = async (collectionName) => {
    const client = await mongoClient
        .connect(URL)
        .catch(
            error => {
                console.log(error)
            })
    const db = client.db(DATABASE_NAME)
    const documents = await db.collection(collectionName).find().toArray()
    return documents
}

module.exports = {
    getCollection
}
