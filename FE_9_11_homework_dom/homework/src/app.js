// ROOT
const rootNode = document.getElementById('root');
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

const fullListErr = document.createElement('p'); // Paragraph when list is full
fullListErr.innerText = 'Maximum item per list are created';

const checkUlLi = (event) => { // Check for input

  addNewTextInput.value === '' ? addNewButton.setAttribute('disabled', '') : addNewButton.removeAttribute('disabled');
  //can`t be empty, set disabled

  if (mainContUl.childElementCount === maxListLength) { // if ul has 10 li elem it is full
    document.getElementById(event.target.id).setAttribute('disabled', ''); // set disabled to prevent input and adding
    rootHeader.insertBefore(fullListErr, rootHeaderH1.nextSibling); //Show Error message
  }
};

const maxListLength = 10;

  const addNewAction = () => { // Adding a new list action
  const li = document.createElement('li');
  const checkActionIcon = document.createElement('button');
  const deleteActionIcon = document.createElement('button');
  const textActionLabel = document.createElement('label');

  li.setAttribute('class', addNewTextInput.value); //Set a class name same as inputted text
  deleteActionIcon.setAttribute('class', addNewTextInput.value);//Set the same name for children
  checkActionIcon.setAttribute('class', addNewTextInput.value);
  textActionLabel.setAttribute('class', addNewTextInput.value);

  //Dragging
  li.setAttribute('draggable', 'true');
  li.ondragstart = (event) => {
    event.dataTransfer.setData('key', event.target.className); // key value is name of the class
  };
  mainContUl.ondragover = (event) => {
    event.preventDefault(); //Allow drop item while dragging
  };
  mainContUl.ondrop = (event) => {
    const firstEl = 0;
    const received = event.dataTransfer.getData('key'); // received draggable element
    event.preventDefault();
    const droppedElem = document.getElementsByClassName(received)[firstEl]; //get first array element of classes
    mainContUl.insertBefore(droppedElem, document.getElementsByClassName(event.target.className)[firstEl]);
  };

  checkActionIcon.setAttribute('class', 'material-icons check');
  checkActionIcon.innerText = 'check_box_outline_blank'; //Create an empty check box

  textActionLabel.setAttribute('for' , addNewTextInput.value); //connect label with li item
  textActionLabel.innerText = addNewTextInput.value; //insert text in label

  deleteActionIcon.setAttribute('class', 'material-icons delete');
  deleteActionIcon.innerText = 'delete'; // crate a delete button

  li.addEventListener('click', () => {
    checkActionIcon.innerText = 'check_box'
  }); //add listener for check

  deleteActionIcon.addEventListener('click', () => {
    if (mainContUl.childElementCount === maxListLength) { //in cause if lists are 10, before removing li item :
      addNewTextInput.removeAttribute('disabled');// remove the "disable" from text input
      addNewButton.removeAttribute('disabled');// remove "disable" from button add
      rootHeader.removeChild(fullListErr);//remove the error message
    }
    mainContUl.removeChild(li); // actually remove the li
  });

  li.appendChild(checkActionIcon); // Adding children to li
  li.appendChild(textActionLabel);
  li.appendChild(deleteActionIcon);

  mainContUl.appendChild(li);
};
//Adding children to header :
rootHeader.appendChild(rootHeaderH1);// h1 and
rootHeaderH1.appendChild(rootHeaderText);// add text to h1
rootHeader.appendChild(addNewTextInput);// input
rootHeader.appendChild(addNewButton);//add button

addNewTextInput.setAttribute('type', 'text');//set attributes for input
addNewTextInput.setAttribute('placeHolder', 'Add NEW Action');

addNewButton.innerHTML = 'add_box';// add icon on the button
addNewButton.setAttribute('class', 'material-icons');
addNewButton.addEventListener('click', () => { //add listener for adding
  return addNewTextInput.value === '' || mainContUl.childElementCount === maxListLength ? false : addNewAction();
});

rootMain.appendChild(mainCont);//add container for main
mainCont.appendChild(mainContUl);

addNewButton.addEventListener('mouseover', checkUlLi);
addNewTextInput.addEventListener('mouseover', checkUlLi);
addNewTextInput.setAttribute('id', 'action-text');
addNewButton.setAttribute('id', 'action-button');

//Footer add:
rootFooter.appendChild(linkCat);// Link on the page that contain
linkCat.appendChild(linkCatImg); //Image with
linkCatImg.setAttribute('src', 'assets/img/cat.png');// src of required image
linkCat.setAttribute('href','#');

container.appendChild(rootHeader);//Adding children to container
container.appendChild(rootMain);
container.appendChild(rootFooter);
container.setAttribute('class', 'container');

rootNode.appendChild(container);