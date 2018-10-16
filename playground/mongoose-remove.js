const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove()
//Todo.findByIdAndRemove()

Todo.findOneAndRemove({ _id: '5bc5a64ce4360f1012aeb15e' }).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5bc5a64ce4360f1012aeb15e').then((todo) => {
  console.log(todo);
});

