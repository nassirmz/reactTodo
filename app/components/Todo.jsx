var React = require('react');

var Todo = React.createClass({
  onCheckboxChange: function () {
    this.props.completed = this.props.completed ? false : true;
  },
  render: function () {
    var {id, task, completed} = this.props;
    return (
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
          <input type="checkbox" checked ={completed} />
          {task}
      </div>
    )
  }
});

module.exports = Todo;
