var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  onCheckboxChange: function () {
    this.props.completed = this.props.completed ? false : true;
  },
  render: function () {
    var {id, task, completed, createdAt, completedAt} = this.props;
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
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
          <input type="checkbox" checked ={completed} />
          <p>{task}</p>
          <p>{renderDate()}</p>
      </div>
    )
  }
});

module.exports = Todo;
