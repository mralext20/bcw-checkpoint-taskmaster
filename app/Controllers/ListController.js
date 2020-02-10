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
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        _listService.deleteList(listId)
        _drawLists()
        Swal.fire(
          'Deleted!',
          'Your List has been deleted.',
          'success'
        )
      }
    })
  }
  /**
   * @param {Event} event
   * @param {string} listId
   */
  addTask(event, listId) {
    event.preventDefault()
    // @ts-ignore
    let task = event.target.newTask.value
    _listService.addTask(listId, task)
    _drawLists()
  }
  /**
   * @param {any} listId
   * @param {any} task
   */
  delTask(listId, task) {


    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        _listService.deleteTask(listId, task)
        _drawLists()
        Swal.fire(
          'Deleted!',
          'Your Task has been deleted.',
          'success'
        )
      }
    })
  }
}
  //TODO: Your app will need the ability to create, and delete both lists and listItems
