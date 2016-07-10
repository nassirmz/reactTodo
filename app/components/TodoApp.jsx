var React = require('react');
var uuid = require('node-uuid'); //node.uuid module to generate universal unique id
var moment = require('moment');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  render: function () {
    return (
      <div >
        <div className="page-actions">
          <a href="#">Logout</a>
        </div>
        <h1 className="page-title">Todo React App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
