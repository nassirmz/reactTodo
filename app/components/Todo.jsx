var React = require('react');
var moment = require('moment');
var {connect} = require('react-redux');
var actions = require('actions');

export var Todo = React.createClass({
  onCheckboxChange: function () {
    this.props.completed = this.props.completed ? false : true;
  },
  render: function () {
    var {id, task, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo'
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;
      if(completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }
      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return (
      <div className={todoClassName} onClick={() => {
          // this.props.onToggle(id);
          dispatch(actions.startToggleTodo(id, !completed));
        }}>
        <div>
          <input type="checkbox" checked ={completed} />
        </div>
          <p>{task}</p>
          <p className="todo__subtext">{renderDate()}</p>
      </div>
    )
  }
});

module.exports = connect()(Todo);
