var React = require('react');
var {connect} = require('react-redux');
var Todo = require('Todo');
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
  render: function () {
    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = () => {
      if (todos.length ===0) {
        return (
          <p className="container-message">Nothing To Do</p>
        );
      }
      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
        //When you generating multiple instances of the same component we have to give them a unique key prop i.e key={todo.id}
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports =  connect(
  (state) => {
    return state;
  }
)(TodoList);
