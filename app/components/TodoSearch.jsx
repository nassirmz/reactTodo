var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var TodoSearch = React.createClass({
  render: function () {
    var {dispatch, showCompleted, searchText} = this.props;
    return (
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search Todos" value={searchText} onChange={() => {
              var searchText = this.refs.searchText.value;
              dispatch(actions.setSearchText(searchText));
            }}/>
        </div>
        <div>
          <label>
            <input type="checkbox" checked={showCompleted} ref="showCompleted" onChange={() => {
                dispatch(actions.toggleShowCompleted());
              }} />
            Show completed todos
          </label>
        </div>
      </div>
    )
  }

});

module.exports = connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    };
  }
)(TodoSearch);
//onChange attribute kind of like onclick or onSubmit but it gets called everytime the value is changing someone types a letter a, its gonna update rendering only todos that has a or A.
