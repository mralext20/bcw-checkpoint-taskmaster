import { generateId } from "../utils.js";

export default class List {
  /**
   * @param {{ name: string; tasks: string[]; id: string; }} data - the data representign this 
   */
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.name = data.name
    this.tasks = data.tasks || []
    this.id = data.id || generateId();
  }

  //Be sure to add the methods needed to create the view template for this model
  get listTemplate() {
    let ret = ""

    this.tasks.forEach(task => {
      ret += /*html*/`
        <div class="col-10"> ${task}</div>
        <div class="col-2"><button onclick="app.listController.delTask('${this.id}','${task}')" class="btn btn-danger">delete</button></div>
      `
    });
    return ret
  }
  get template() {
    return /*html*/`
<div class="col-12 col-md-3">
  <h3>${this.name}</h3>
  <button class="btn btn-danger" onclick="app.listController.deleteList('${this.id}')">delete list</button>
  <div class="row">
  ${this.listTemplate}
  </div>
  <form onsubmit="app.listController.addTask(event, '${this.id}')">
                    <div class="form-group">
                        <label for="">Task</label>
                        <input type="text" name="newTask" class="form-control" placeholder=""
                            aria-describedby="helpId">
                        <button class="btn btn-primary" type="submit">
                            Add Task
                        </button>
                    </div>
                </form>
</div>
    `
  }
}
