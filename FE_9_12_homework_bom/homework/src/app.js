const rootNode = document.getElementById('root');

const todoItems = [
    {isDone: false, id: 12345, description: 'Todo 1'}
];

//#/main
const mainHash = '#/main';
const rootNodeFrags = document.createDocumentFragment();
const list = document.getElementById('list');
const listUl = document.createElement('ul');
const addNewBtn = document.getElementById('add-item');
const addNewTask = document.getElementById('add-new-task');
//#/addNew
const addNewHash = '#/addNew';
const addNewText = document.getElementById('add-new-text');
const addNewSubmit = document.getElementById('add-new-submit');
const addNewCancel = document.getElementById('add-new-cancel');
//LocalStorage
const taskMask = 'tdl_';
let tdlId = 0;
//modify
let modifiedItem;
const modifyItems = document.getElementById('modify-items');
const modifySave = document.getElementById('modify-save');
const modifyHash = '#/modify/:' + taskMask;

displayPart();
list.appendChild(listUl);

showStorage();
addNewSubmit.addEventListener('click', function () {
  let textValue = addNewText.value;
  if (textValue === '') {
    return alert('Input something!');
  }

  let key = taskMask + tdlId;
  const li = document.createElement('li');
  li.setAttribute('tdlID', key);
  const textNodeLi = document.createTextNode(textValue);
  const checkBoxLi = document.createElement('input');
  checkBoxLi.setAttribute('type','checkbox');
  const removeLi = document.createElement('button');
  removeLi.setAttribute('class', 'remove');
  removeLi.innerText = 'remove';

  tdlId++;

  localStorage.setItem(key, textValue);
  li.appendChild(checkBoxLi);
  li.appendChild(textNodeLi);
  li.appendChild(removeLi);

  listUl.appendChild(li);
  location.hash = mainHash;
  displayPart();
});
modifySave.addEventListener('click', function () {
  let modifyText = document.getElementById('modify-text');
  if (modifyText.value === '') {
    return alert('Input smth');
  }
  console.log(modifiedItem.getAttribute('tdlId'));
  for(let i = 0; i < listUl.childElementCount; i++) {
    if (listUl.children[i].getAttribute('tdlId') === modifiedItem.getAttribute('tdlId')){
      listUl.children[i].innerHTML = '';
      let text = document.createTextNode(modifyText.value);
      const checkBoxLi = document.createElement('input');
      listUl.children[i].appendChild(checkBoxLi);
      checkBoxLi.setAttribute('type','checkbox');
      const removeLi = document.createElement('button');
      removeLi.setAttribute('class', 'remove');
      removeLi.innerText = 'remove';
      listUl.children[i].appendChild(text);
      listUl.children[i].appendChild(removeLi);
console.log(listUl.children[i].childNodes)
    }
  }
  location.hash = mainHash;
  displayPart();
});
addNewBtn.addEventListener('click', function () {
  location.hash = addNewHash;
  displayPart();
});

listUl.onclick = (e) => {
  let el = e.target;
const ID = 4;
  let li = e.target.parentElement;
  let curLi = li.getAttribute('tdlid');
  if (el.className === 'remove') {
    li.remove();
    localStorage.removeItem(curLi)
  } else if (el.localName === 'li' && location.hash === mainHash) {
    modifiedItem = el;
    let key = el.getAttribute('tdlId').slice(ID);
    location.hash = modifyHash + key;
    let modifyText = document.getElementById('modify-text');
    console.log(el.innerText);
    modifyText.value = el.innerText;
  }
  displayPart();
};

function displayPart() {
  const strStart = 0;
  const strEND = -1;
  if (location.hash === mainHash) {
    modifyItems.style.display = 'none';
    addNewTask.style.display = 'none';
    list.style.display = 'grid';
  } else if (location.hash === addNewHash) {
    modifyItems.style.display = 'none';
    addNewTask.style.display = 'grid';
    list.style.display = 'none';
  } else if (location.hash.slice(strStart, strEND) === modifyHash) {
    modifyItems.style.display = 'grid';
    addNewTask.style.display = 'none';
    list.style.display = 'none';
  }
}

document.addEventListener('click', function (e) {
  const fEl = 0;
  if (e.target.className.match(/cancel/) !== null) {
    let cancel = e.target.className.match(/cancel/)[fEl];
    if(cancel === 'cancel'){
      location.hash = mainHash;
      displayPart();
    }
  }
});


function showStorage () {
  const ZERO = 0;
  const lsLength = localStorage.length;
  if(lsLength > ZERO){
    tdlId = lsLength;
  }
  if (lsLength > ZERO) {
    for (let i = 0; i < lsLength; i++) {
      let key = localStorage.key(i);
      if (key.indexOf(taskMask) === ZERO) {
        const li = document.createElement('li');
        li.setAttribute('tdlID', key);
        const textNodeLi = document.createTextNode(localStorage.getItem(key));
        const checkBoxLi = document.createElement('input');
        checkBoxLi.setAttribute('type','checkbox');
        const removeLi = document.createElement('button');
        removeLi.setAttribute('class', 'remove');
        removeLi.innerText = 'remove';

        li.appendChild(checkBoxLi);
        li.appendChild(textNodeLi);
        li.appendChild(removeLi);

        listUl.appendChild(li);
        location.hash = mainHash;
      }
    }
  }
}

rootNode.appendChild(rootNodeFrags);
