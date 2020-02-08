import _listService from "../Services/ListService.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let target = document.getElementById('listTarget')
  let newHTML = ""
  let lists = _listService.lists
  lists.forEach(list => {
    newHTML += list.template
  });
  target.innerHTML = newHTML
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }
  /**
   * @param {event} event - event
   */
  createList(event) {
    event.preventDefault()
    _listService.createList(event.target)
    _drawLists()
  }
  /**
   * @param {string} listId
   */
  deleteList(listId) {
    _listService.deleteList(listId)
    _drawLists()
  }
  addTask(event, listId) {
    let task = event.target.newTask.value
    _listService.addTask(listId, task)
    _drawLists()
  }
}
  //TODO: Your app will need the ability to create, and delete both lists and listItems
