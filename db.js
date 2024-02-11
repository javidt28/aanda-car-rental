const { MongoClient, ServerApiVersion } = require('mongodb');

const connectToMongoDB = async () => {
  const username = encodeURIComponent("javidmitchell16");
  const password = encodeURIComponent("PaVxi3EKCuNcQxuh");

  const uri = `mongodb+srv://javidmitchell16:${password}@aacarrental.dytu2db.mongodb.net/?retryWrites=true&w=majority`;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB!");
  } finally {
    await client.close();
  }
};

module.exports = connectToMongoDB;
