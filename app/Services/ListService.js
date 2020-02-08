import List from "../Models/List.js";
import _store from "../store.js"
//Public
class ListService {
  constructor() {

  }
  deleteList(listId) {
    _store.delList(listId)
  }
  /**
   * @param {EventTarget} formData
   */
  createList(formData) {
    let list = { name: formData.listName.value }
    let newlist = new List(list)
    _store.addList(newlist)
  }

  get lists() {
    return _store.lists
  }
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change

}

const SERVICE = new ListService();
export default SERVICE;
