var React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function () {
    var showCompleted = this.refs.showCompleted.checked;
    //checked build in attribute of html5
    var searchText = this.refs.searchText.value;
    this.props.onSearch(showCompleted, searchText);
  },
  render: function () {
    return (
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search Todo" onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
            Show completed todos
          </label>
        </div>
      </div>
    )
  }

});

module.exports = TodoSearch;
//onChange attribute kind of like onclick or onSubmit but it gets called everytime the value is changing someone types a letter a, its gonna update rendering only todos that has a or A.
