var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  onCheckboxChange: function () {
    this.props.completed = this.props.completed ? false : true;
  },
  render: function () {
    var {id, task, completed, createdAt, completedAt} = this.props;
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
          this.props.onToggle(id);
        }}>
        <div>
          <input type="checkbox" checked ={completed} />
        </div>
          <p>{task}</p>
          <p>{renderDate()}</p>
      </div>
    )
  }
});

module.exports = Todo;
