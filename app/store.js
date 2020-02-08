import List from "./Models/List.js";

let _state = {

  lists: {},
}

//NOTE You should not need to change the code from this point down

//NOTE this method will get the lists from local storage at the start of the app
function _loadState() {
  let data = JSON.parse(localStorage.getItem("AlexTaskMaster"));
  if (data) {
    let newData = {}
    for (const key in data.lists) {
      if (data.lists.hasOwnProperty(key)) {
        const item = data.lists[key];
        newData[item.id] = new List(item)
      }
    }
    _state.lists = newData;
  }
}
_loadState();

//NOTE call bellow for saving the state
function _saveState() {
  localStorage.setItem("AlexTaskMaster", JSON.stringify(_state));
}
class Store {
  addTask(listId, task) {
    _state.lists[listId].tasks.push(task)
  }
  /**
   * @param {List} newlist
   */
  addList(newlist) {
    _state.lists[newlist.id] = (newlist)
    _saveState()
  }
  /**
   * @param {string} listid
   */
  delList(listid) {
    delete _state.lists[listid]
  }

  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
  get lists() {
    let lists = []
    for (const todoList in _state.lists) {
      if (_state.lists.hasOwnProperty(todoList)) {
        const list = _state.lists[todoList];
        lists.push(new List(list))
      }
    }
    return lists;
  }
  //NOTE call saveState everytime you change the state in any way

}

const store = new Store();
export default store;
