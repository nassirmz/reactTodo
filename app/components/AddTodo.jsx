var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function (e) {
    var {onAddTodo} = this.props;
    e.preventDefault();
    var todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" />
          <button className="button extended">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
