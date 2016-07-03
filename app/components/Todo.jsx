var React = require('react');

var Todo = React.createClass({

  render: function () {
    var {task} = this.props;
    return (
      <div>
        {task}
      </div>
    )
  }
});

module.exports = Todo;
