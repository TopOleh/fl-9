// ROOT
const rootNode = document.getElementById('root');
const rootFrags = document.createDocumentFragment();
const container = document.createElement('div');
//HEADER
const rootHeader = document.createElement('header');
const rootHeaderH1 = document.createElement('h1');
const rootHeaderText = document.createTextNode('TODO Cat List');
const addNewTextInput = document.createElement('input');
const addNewButton = document.createElement('button');
//MAIN
const rootMain = document.createElement('main');
const mainCont = document.createElement('section');
const mainContUl = document.createElement('ul');
//FOOTER
const rootFooter = document.createElement('footer');
const linkCat = document.createElement('a');
const linkCatImg = document.createElement('img');

const fullListErr = document.createElement('p');
fullListErr.innerText = 'Maximum item per list are created';

const maxListLength = 10;

  const checkUlLi = (event) => {

    if (addNewTextInput.value === '') {
      addNewButton.setAttribute('disabled', '')
    } else {
      addNewButton.removeAttribute('disabled');
    }

    if (mainContUl.childElementCount === maxListLength) {
      document.getElementById(event.target.id).setAttribute('disabled', '');
      rootHeader.insertBefore(fullListErr, rootHeaderH1.nextSibling);
    }
  };

  const addNewAction = () => {
  const li = document.createElement('li');
  const checkActionIcon = document.createElement('button');
  const deleteActionIcon = document.createElement('button');
  const textActionLabel = document.createElement('label');
  li.setAttribute('class', addNewTextInput.value);
  deleteActionIcon.setAttribute('class', addNewTextInput.value);
  checkActionIcon.setAttribute('class', addNewTextInput.value);
  textActionLabel.setAttribute('class', addNewTextInput.value);

  //Dragging
  li.setAttribute('draggable', 'true');
  li.ondragstart = (event) => {
    event.dataTransfer.setData('key', event.target.className);
  };
  mainContUl.ondragover = (event) => {
    event.preventDefault();
  };
  mainContUl.ondrop = (event) => {
    const firstEl = 0;
    const received = event.dataTransfer.getData('key');
    event.preventDefault();
    const droppedElem = document.getElementsByClassName(received)[firstEl];
    mainContUl.insertBefore(droppedElem, document.getElementsByClassName(event.target.className)[firstEl]);
  };

  checkActionIcon.setAttribute('class', 'material-icons');
  checkActionIcon.innerText = 'check_box_outline_blank';

  textActionLabel.setAttribute('for' , addNewTextInput.value);
  textActionLabel.innerText = addNewTextInput.value;

  deleteActionIcon.setAttribute('class', 'material-icons');
  deleteActionIcon.innerText = 'delete';

  li.addEventListener('click', () => {
    checkActionIcon.innerText = 'check_box'
  });
  deleteActionIcon.addEventListener('click', () => {
    if (mainContUl.childElementCount === maxListLength) {
      addNewTextInput.removeAttribute('disabled');
      addNewButton.removeAttribute('disabled');
      rootHeader.removeChild(fullListErr);
    }
    mainContUl.removeChild(li);
  });

  li.appendChild(checkActionIcon);
  li.appendChild(textActionLabel);
  li.appendChild(deleteActionIcon);

  mainContUl.appendChild(li);
};


container.appendChild(rootHeader);
container.appendChild(rootMain);
container.appendChild(rootFooter);
container.setAttribute('class', 'container');

rootFrags.appendChild(container);

rootHeader.appendChild(rootHeaderH1);
rootHeader.setAttribute('id','cat-list-header');
rootHeaderH1.appendChild(rootHeaderText);
rootHeader.appendChild(addNewTextInput);
rootHeader.appendChild(addNewButton);
addNewTextInput.setAttribute('type', 'text');
addNewTextInput.setAttribute('placeHolder', 'Add NEW Action');
addNewButton.innerHTML = 'add_box';
addNewButton.setAttribute('class', 'material-icons');
addNewButton.addEventListener('click', () => {
  return addNewTextInput.value === '' || mainContUl.childElementCount === maxListLength ? false : addNewAction();
});
rootMain.appendChild(mainCont);
mainCont.appendChild(mainContUl);

addNewButton.addEventListener('mouseover', checkUlLi);
addNewTextInput.addEventListener('mouseover', checkUlLi);
addNewTextInput.setAttribute('id', 'action-text');
addNewButton.setAttribute('id', 'action-button');


rootFooter.appendChild(linkCat);
linkCat.appendChild(linkCatImg);
linkCat.setAttribute('href','#');
linkCatImg.setAttribute('src', 'assets/img/cat.png');


rootNode.appendChild(rootFrags);