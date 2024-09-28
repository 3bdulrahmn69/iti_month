// __________________________ 1. image slider _______________________

const imagesLocation = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'];
const imagElement = document.getElementById('img');

function nextImage() {
  let currentImage = imagElement.getAttribute('src');
  let currentImageIndex = imagesLocation.indexOf(currentImage);
  let nextImageIndex = currentImageIndex + 1;

  if (currentImageIndex < imagesLocation.length - 1) {
    imagElement.setAttribute('src', imagesLocation[nextImageIndex]);
  } else {
    console.log('No Next images');
  }
}

function prevImage() {
  let currentImage = imagElement.getAttribute('src');
  let currentImageIndex = imagesLocation.indexOf(currentImage);
  let prevImageIndex = currentImageIndex - 1;

  if (currentImageIndex > 0) {
    imagElement.setAttribute('src', imagesLocation[prevImageIndex]);
  } else {
    console.log('No prevues images');
  }
}

// __________________________ 2. Change paragraphs styles _______________________

let paragraphs = document.querySelectorAll('p');

function changeStyle(paragraphs) {
  paragraphs.forEach((paragraph) => {
    paragraph.style.color = 'red';
    paragraph.style.fontSize = '20px';
  });
}

changeStyle(paragraphs);

// __________________________ 3. Append to div _______________________

let textSrc = document.getElementById('textSrc');
let textArea = document.getElementById('textArea');

function appendText() {
  textArea.innerHTML += textSrc.value;
  textSrc.value = '';
}

// __________________________ 4. To Do List _______________________

let todoSrc = document.getElementById('todoSrc');
let todoList = document.getElementById('todoList');
let counter = 1;

function addTodo() {
  if (todoSrc.value === '') {
    return;
  }

  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = todoSrc.value;

  let numberTd = document.createElement('td');
  numberTd.textContent = counter;

  tr.appendChild(numberTd);
  tr.appendChild(td);

  todoList.appendChild(tr);

  todoSrc.value = '';
  counter++;
}

// __________________________ 5. change color _______________________
let textToChange = document.getElementById('textToChange');

function changeColorPink() {
  textToChange.style.color = 'pink';
}

function changeColorBlue() {
  textToChange.style.color = 'blue';
}
