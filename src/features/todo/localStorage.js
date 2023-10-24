const persistData = (state, storage_name) => {
  //save array of todos in localstorage
  localStorage.setItem(
    storage_name,
    JSON.stringify(state.todos.map((todo) => todo))
  );
};

export default persistData;
