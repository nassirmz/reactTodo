export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

//should generate add todo action
export var addTodo = (task) => {
  return {
    type: 'ADD_TODO',
    task
  };
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var toggleTodo = () => {
  return {
    type: 'TOGGLE_TODO'
  };
};
