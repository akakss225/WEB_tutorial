let itemBox = document.getElementById('item');
let addBtn = document.getElementById('add');
let ul = document.getElementById('itemList');
let itemList = [];

addBtn.addEventListener('click',addList);
function addList(){
    if(itemBox.value != "" && itemBox.value != null){
        itemList.push(itemBox.value);
    }
    itemBox.value = "";
    itemBox.focus();
    console.log(itemList);
    
    showList();
}
function removeBtn(){
    let indexNum = this.getAttribute("id");
    itemList.splice(indexNum,1);
    console.log(itemList);

    showList();
}
function showList(){
    let li = "";
    for(let i = 0; i < itemList.length; i++){
        li += `<li>${itemList[i]}<span class='close' id='${i}'>x</span></li>`;
    }
    ul.innerHTML = li;

    let closeBtn = document.querySelectorAll('.close');
    for(let i = 0; i < closeBtn.length; i++){
        closeBtn[i].addEventListener('click', removeBtn)
    }
}