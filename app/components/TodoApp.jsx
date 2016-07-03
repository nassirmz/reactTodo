var React = require('react');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          task: 'Workout',
        },
        {
          id: 2,
          task: 'Clean room'
        }
      ]
    };
  },
  render: function () {
    return (
      <div>
        TodoApp.jsx
      </div>
    );
  }
});

module.exports = TodoApp;
