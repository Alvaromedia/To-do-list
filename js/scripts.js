let li = $("<li></li>");
let inputValue = $("#input").val();
li.append(inputValue);

if (inputValue === "") {
  alert("You must write something!");
} else {
  $("#list").append(li);
}
//2. Crossing an item out:
function crossOut() {
  li.toggleClass("strike");
}

li.on("dblclick", function crossOut() {
  li.toggleClass("strike");
});
//3. Adding a delete button
let crossOutButton = $("<crossOutButton></crossOutButton>");
crossOutButton.append(document.createTextNode("X"));
li.append(crossOutButton);

//   crossOutButton.on("click", deleteListItem);
//   function deleteListItem(){
//         li.addClass("delete")
//     }
$("#list").sortable();

js;
function newItem() {
  let list = $("#list");
  let li = $("<li></li>");
  let input = $("#input");
  let inputValue = $("#input").val();

  li.append(inputValue);

  if (inputValue === "") {
    input.addClass("error");
    alert("Please fill out the input field!");
  } else {
    $(list).append(li);
    $(input).val("");
  }

  function cross() {
    li.toggleClass("strike");
  }

  li.on("click", cross);

  let crossOutButton = $("<crossOutButton></crossOutButton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  function deleteListItem() {
    li.addClass("delete");
  }
  crossOutButton.on("click", deleteListItem);

  $("#list").sortable();
}
