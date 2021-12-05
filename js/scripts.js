function newItem() {
  let list = $("#list");
  let li = $("<li></li>");
  let input = $("#input");
  let inputValue = $("#input").val();

  li.append(inputValue);

  if (inputValue === "") {
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
