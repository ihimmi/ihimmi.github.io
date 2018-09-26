// Create a new list item when clicking on the "Add" button
function newToDo()
{
  //Creates the elements and gathers the information necessary, and then assigns them the needed classes
  var ul = document.createElement("ul");
  var li = document.createElement("li");
  var checkbox = document.createElement("input");
  ul.classList.add("inline");
  checkbox.type = "checkbox";
  checkbox.classList.add("check");
  var input = document.createTextNode(document.getElementById("task").value);
  var timedue = document.createTextNode(document.getElementById("timedue").value);
  var category = document.createTextNode(document.getElementById("category").selectedOptions[0].text);

  //Appends the elements so that a new task is created
  li.appendChild(ul);
  document.getElementById("head").appendChild(li);
  ul.appendChild(checkbox);
  var li2 = document.createElement('li');
  li2.appendChild(input);
  ul.appendChild(li2);
  var li3 = document.createElement('li');
  li3.appendChild(timedue);
  ul.appendChild(li3);
  var li4 = document.createElement('li');
  li4.appendChild(category);
  ul.appendChild(li4);

  return ul;
}