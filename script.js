var inputText = document.getElementById('input');

let btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
    let input = inputText.value;
    if (input.trim() != 0) {

        let storage = localStorage.getItem("localstore");
        if (storage == null) {
            itemObj = [];
        }
        else {
            itemObj = JSON.parse(storage);
        }
        itemObj.push(input);
        localStorage.setItem("localstore", JSON.stringify(itemObj));
    }
    inputText.value = "";

    showItem();

})


function showItem() {
    let data = localStorage.getItem("localstore");
    if (data == null) {
        itemObj = [];
    }
    else {
        itemObj = JSON.parse(data);
    }

    let html = '';
    let datas = document.getElementById('table');

    itemObj.forEach((value, index) => {

        html += `
            <tr>
            <th>${index + 1}</th>
            <td>${value}</td>
             <td><i class="bi bi-pencil-square" onclick="edit(${index})" id="edit"></i></td>
            <td><i class="bi bi-trash" onclick="deleteItem(${index})" id="delete"></i></td>
            </tr>
       `;
    });
    datas.innerHTML = html;


}
showItem();


// edit task

let edit = (index) => {
    let indexInput = document.getElementById("indexInput");
    let saveBtn = document.getElementById('save');
    let addBtn = document.getElementById('btn');
    let edit = localStorage.getItem("localstore");
    let editItem = JSON.parse(edit);
    input.value = editItem[index];
    inputText.value = editItem[index];
    indexInput.value = index;
    addBtn.style.display = "none"
    saveBtn.style.display = "block"
}

// udate task

let saveBtn = document.getElementById('save');

saveBtn.addEventListener("click", function () {

    let update = localStorage.getItem("localstore");
    let udateObj = JSON.parse(update);
    let indexInput = document.getElementById("indexInput").value;
    udateObj[indexInput] = inputText.value;

    localStorage.setItem("localstore", JSON.stringify(udateObj));
    showItem();
    inputText.value = "";

    let saveBtn = document.getElementById('save');
    let addBtn = document.getElementById('btn');
    addBtn.style.display = "block"
    saveBtn.style.display = "none";
})


// delete task

let deleteItem = (index) => {
    let deleteList = localStorage.getItem("localstore");
    let deleteObj = JSON.parse(deleteList);
    deleteObj.splice(index, 1);
    localStorage.setItem("localstore", JSON.stringify(deleteObj));
    showItem();

}