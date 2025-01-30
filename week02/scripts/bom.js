let input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let itemList = document.createElement("li");
const deleteButton = document.createElement("button");

itemList.textContent = input.value;
deleteButton.textContent = "❌";

itemList.append(deleteButton);
list.appendChild(itemList);