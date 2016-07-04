var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: uuid(),
          task: 'Workout',
        },
        {
          id: uuid(),
          task: 'Clean room'
        }
      ],
      showCompleted: false,
      searchText: '',
    };
  },
  handleAddTodo: function (task) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          task: task
        }
      ]
    });
    //node.uuid module to generate universal unique id
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function () {
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp;
