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
        <div class="col-12"> ${task}</div>
      `
    });
    return ret
  }
  get template() {
    return /*html*/`
<div class="col-12 col-md-3">
  <h3>${this.name}</h3>
  <button onclick="app.listController.deleteList('${this.id}')">delete list</button>
  <div class="row">
  ${this.listTemplate}
  </div>
</div>
    `
  }


  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}
