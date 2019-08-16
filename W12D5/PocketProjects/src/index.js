import warmUp from "./warmup";
import Clock from "./clock.js"
import Dropdown from "./drop_down";
import Todo from "./todo_list";
import SlideScroll from "./slide_scroll";

Dropdown.prototype.attachDogLinks();

Todo.refresh();
Todo.addTodo();
Todo.checkToDo();