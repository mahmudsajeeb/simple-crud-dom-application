let formId = document.getElementById('formId');
let item = document.getElementById('item');
 formId.addEventListener('click', youClicked);

 function youClicked(e){
  e.preventDefault();

  let value = document.getElementById('value').value;

  if(value ==""){
    alert("Write new Item")
  }else{
    let li = document.createElement('li');
    li.className = "itemContent";
    li.appendChild(document.createTextNode(value));

    let btn = document.createElement('button');
    btn.className ="but";
    btn.appendChild(document.createTextNode("X"));

    li.appendChild(btn);
    item.appendChild(li)
  }
 }

let del = document.getElementById('item');
del.addEventListener('click', remove);

function remove(e){
  if(e.target.classList.contains('but')){
    if(confirm('Are you Sure')){
      let delParent = e.target.parentElement;
      delParent.removeChild()
    }
  }
}


let search = document.getElementById('search');
search.addEventListener('keyup', searchItem);

function searchItem(e){
  let text= e.target.value.toLowerCase();
  let items = item.getElementsByTagName('li');
  Array.from(items).forEach(function(item){
    let itemName = item.firstChild.textContent;
    if(itemName.toLocaleLowerCase().indexOf(text) != -1){
      item.style.display ='block'
    }else{
      item.style.display = 'none'
    }
  })
}