const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.')
  }
  console.log('Connected to MongoDB server.');

  const db = client.db('TodoApp');

  // db.collection('Todos').deleteMany({ text: "Walk the fish" }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({ text: "Eat sand" }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({ completed: true }).then((result) => {
  //   console.log(result);
  // });

  

  // client.close();
});