var express = require('express');
var router = express.Router();
const { MongoClient, ObjectId } = require('mongodb');


// Connection URL
const url = 'mongodb://abhirajkale:abhiraj@ac-p4qzc4t-shard-00-00.m6zi7fe.mongodb.net:27017,ac-p4qzc4t-shard-00-01.m6zi7fe.mongodb.net:27017,ac-p4qzc4t-shard-00-02.m6zi7fe.mongodb.net:27017/?ssl=true&replicaSet=atlas-bekpup-shard-0&authSource=admin&retryWrites=true&w=majority';
const client = new MongoClient(url);

// Database Name
const dbName = 'event_info';


var bodyParser = require('body-parser')

router.use(bodyParser.json())

const base = "/api/v3/app";

router.get(base + `/events`, async function(req, res) {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('events');
    const _id = req.query.id
    if(_id == undefined){
      const type = req.query.type;
      const limit = req.query.limit;
      const page = req.query.page;
      console.log(type + " "+ limit + " " + page)
      if(type == "latest"){
        const result = await collection.find({}).sort({"date": -1}).limit(parseInt(limit)).toArray();
        res.status(200).json(result)   
      }else 
        res.status(200).json("Invalid body params")
    }else{
      const result = await collection.find({"_id": new ObjectId(_id)}).toArray();
      res.status(200).json(result)      
    }

    return ('Successfully returned data.');

});


router.post(base + '/events', (req, res)=>{
  async function main() {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('events');
    const data = req.body;
    const type = data["type"]
    const uid = data["uid"]
	  const name = data["name"]
	  const tagline = data["tagline"]
	  const schedule = data["schedule"]
	  const description = data["description"]
    const file = data["files[image]"]
    const moderator = data["moderator"]
	  const category = data["category"]
	  const sub_category = data["sub_category"]
	  const rigor_rank = data["rigor_rank"]
	  const attendees = data["attendees"]

    try {
      collection.insertOne(
        {
          "type":type,
          "uid":uid,
          "name": name,
          "tagline": tagline,
          "schedule": schedule,
          "description": description,
          "date": new Date(),
          "file": file,
          "moderator": moderator,
          "category": category,
          "sub_category": sub_category,
          "rigor_rank": rigor_rank,
          "attendees": attendees
        }
      )
      res.status(200).json('Successfully inserted data.')
  
      return ('Successfully inserted data.');      
    } catch (error) {
      console.error(error)
    }

  }  
  main()
    .then(console.log)
})

router.put(base + '/events/:id', (req, res)=>{
  async function main() {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('events');
    const data = req.body;
    const id = req.params.id;
    const type = data["type"]
    const uid = data["uid"]
	  const name = data["name"]
	  const tagline = data["tagline"]
	  const schedule = data["schedule"]
	  const description = data["description"]
    const file = data["files[image]"]
    const moderator = data["moderator"]
	  const category = data["category"]
	  const sub_category = data["sub_category"]
	  const rigor_rank = data["rigor_rank"]
	  const attendees = data["attendees"]

    try {
      collection.insertOne(
        {
          _id: ObjectId(id),
          "type":type,
          "uid":uid,
          "name": name,
          "tagline": tagline,
          "schedule": schedule,
          "description": description,
          "date": new Date(),
          "file": file,
          "moderator": moderator,
          "category": category,
          "sub_category": sub_category,
          "rigor_rank": rigor_rank,
          "attendees": attendees
        }
      )
      res.status(200).json(_id)
  
      return ('Successfully inserted data.');      
    } catch (error) {
      console.error(error)
    }

  }  
  main()
    .then(console.log)
})

router.delete(base + '/events/:id', (req, res)=>{
  async function main() {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('events');
    const _id = req.params.id;
    try {
        await collection.deleteOne({_id: ObjectId(_id)})
        res.status(200).json('Successfully deleted data with id'+_id)
        return ('Successfully deleted data with id'+_id);
    } catch (error) {
      if (error instanceof MongoServerError) {
        console.log(`Error worth logging: ${error}`); 
        res.status(500).json("Could not delete data")
      }
      throw error;
    }
  }  
  main()
    .then(console.log)
})

module.exports = router;
