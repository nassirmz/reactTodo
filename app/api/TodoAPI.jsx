var $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      //localStorage can only store JSON
      return todos;
    }
  },
  getTodos: function () {
    var todosJSON = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(todosJSON);
    } catch (e) {

    }
    console.log(todos);
    return $.isArray(todos) ? todos : [];
  }
};
