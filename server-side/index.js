const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 4000;
const app = express();

// With this:
app.use(cors({
  origin: 'http://localhost:5173', // or use process.env.FRONTEND_URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ijevv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("You successfully connected to MongoDB!");





    const database = client.db('AdvisorData');
    const courseCollection = database.collection('courses');
    const userCollection = database.collection('users');

    // post courses
    app.post('/courses', async (req, res) => {
      const newCourse = req.body;
      console.log(newCourse)
      const result = await courseCollection.insertOne(newCourse)
      res.send(result)
    })
    app.post('/users', async (req, res) => {
      const newUser = req.body;
      console.log(newUser)
      const result = await userCollection.insertOne(newUser)
      res.send(result)
    })

    //get post
    app.get('/courses', async (req, res) => {
      const cursor = courseCollection.find();
      const result = await cursor.toArray();
      res.send(result)
    })


    app.get('/users', async (req, res) => {
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result)
    })
    





  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('course running')
})

app.listen(port, () => {
  console.log(`course is running : ${port}`)
})