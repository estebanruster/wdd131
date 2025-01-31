let input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        let itemList = document.createElement("li");
        itemList.textContent = input.value;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        itemList.append(deleteButton);

        deleteButton.addEventListener("click", () => {
            itemList.remove();
            input.value = "";
            input.focus();
        })

        list.appendChild(itemList);
        input.value = "";
        input.focus();
    }

    else {
        input.value = "";
        input.focus();
    }
})