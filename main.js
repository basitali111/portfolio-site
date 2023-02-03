const mobileNav = document.querySelector('.mobile-header');
const navHeader = document.querySelector('.header');
const toggleNavbar = () => {
  navHeader.classList.toggle('active');
};
mobileNav.addEventListener('click', () => toggleNavbar());
const main = document.querySelector('#porfilio');

// const works=document.querySelector('.works');
// function card profolio array
const portfolio = [
  {
    heading: 'British-Classic-Meals',
    area: 'Frontend',
    deveoper: 'Full Stack Dev',
    date: '2022',
    highlights:
      ' This App is about British Food where you find a list of meals that you can like and comment.',
    image: 'images/project1.png',
    btn1: 'html',
    btn2: 'css',
    btn3: 'javascript',
    btn4: 'ruby',
    btn5: 'See project',
    btn6: 'bootstrap',
  },
  {
    heading: 'ToDo-List',
    highlights:
      'This project contains a to-do list project where tasks can be added, marked as completed, and deleted. Users can edit a task by double-clicking on the task title section. A task can be deleted by clicking on the trash can icon on the right side of each task. Tasks can be marked as completed by clicking on the corresponding checkbox. All complete',
    image: 'images/project2.png',
    area: 'Canopy',
    deveoper: 'Back End Dev',
    date: '2015',
    btn1: 'html',
    btn2: 'css',
    btn3: 'javascript',
    btn4: 'ruby',
    btn5: 'See project',
    btn6: 'bootstrap',
  },
  {
    heading: 'Math Magicians',
    highlights:
      'Math-Magician is a web app for all lovers of mathematics. It is a Single Page Application (SPA) that allows users to make simple calculations and read a random math-related quotes.',
    image: 'images/project5.png',
    area: 'Frontend',
    deveoper: 'Full Stack Dev',
    date: '2022',
    btn1: 'html',
    btn2: 'css',
    btn3: 'react',
    btn4: 'ruby',
    btn6: 'bootstrap',
    btn5: 'See project',
  },
  {
    heading: 'Online-Shopping-Store',
    highlights:
      'online-shiopping-store - A web application based on an external API which contains information about items for sell. The web app allows the user to view one page with a list of items that could be filtered by some parameters. Its a list of metrics that can be filtered by each specific item on sell. It also shows one page for the item details',
    image: 'images/project4.png',
    area: 'Frontend',
    deveoper: 'Full Stack Dev',
    date: '2022',
    btn1: 'html',
    btn2: 'css',
    btn3: 'react',
    btn4: 'ruby',
    btn6: 'bootstrap',
    btn5: 'See project',
  },
];
const works = document.createElement('div');
works.classList.add('works');
main.appendChild(works);
// create featured cards
const article = document.createElement('article');
article.classList = 'workcard';
article.setAttribute('data-name', 'p-1');
works.appendChild(article);
// for image class
const divimage = document.createElement('div');
divimage.classList = 'image';
article.appendChild(divimage);
divimage.setAttribute('id', '#img1');
// divimage.id = "img1"
const image1 = document.createElement('img');
image1.src = portfolio[0].image;
divimage.appendChild(image1);
image1.classList.add('image1');
// text div
const text = document.createElement('div');
text.classList = 'intro';
article.appendChild(text);
text.setAttribute('id', 'text1');
// heading h2 of card
const h2 = document.createElement('h2');
h2.innerText = portfolio[0].heading;
text.appendChild(h2);
// adding list of experinece
const ul = document.createElement('ul');
text.appendChild(ul);
// li items in ul
let li = document.createElement('li');
li.classList = 'area';
li.innerText = portfolio[0].area;
ul.appendChild(li);
li = document.createElement('li');
li.classList = 'dev';
li.innerText = portfolio[0].deveoper;
ul.appendChild(li);
li = document.createElement('li');
li.classList = 'date';
li.innerText = portfolio[0].date;
ul.appendChild(li);
// paragraph
const p = document.createElement('p');
p.id = 'para-item1';
p.innerHTML = portfolio[0].highlights;
text.append(p);
//  skill ul list
const ul2 = document.createElement('ul');
ul2.classList = 'button';
text.appendChild(ul2);
// skill li
let list = document.createElement('li');
list.classList = 'html';
ul2.appendChild(list);
let a = document.createElement('a');
a.classList = 'button1';
a.innerText = portfolio[0].btn1;
list.appendChild(a);
list = document.createElement('li');
list.classList = 'css';
ul2.appendChild(list);
a = document.createElement('a');
a.classList = 'button1';
a.innerText = portfolio[0].btn2;
list.appendChild(a);
list = document.createElement('li');
list.classList = 'java';
ul2.appendChild(list);
a = document.createElement('a');
a.classList = 'button1';
a.innerText = portfolio[0].btn3;
list.appendChild(a);
// adding see projct button
const projectbtn = document.createElement('a');
projectbtn.classList = 'see';
projectbtn.id = 'project1';
projectbtn.setAttribute('href', '#');
projectbtn.innerHTML = portfolio[0].btn5;
text.appendChild(projectbtn);

// for loop for creating cards
for (let i = 1; i <= 3; i += 1) {
  const main = document.querySelector('#porfilio');
  const works = document.createElement('div');
  works.classList.add('works');
  main.appendChild(works);
  // create featured cards
  const article = document.createElement('article');
  article.classList = 'workcard';
  if (i === 1) {
    article.id = 'flipped';
    article.setAttribute('data-name', 'p-2');
  } else if (i === 2) {
    article.setAttribute('data-name', 'p-3');
  } else if (i === 3) {
    article.id = 'flipped';
    article.setAttribute('data-name', 'p-4');
  }

  works.appendChild(article);
  // for image class
  const divimage = document.createElement('div');
  divimage.classList = 'image';
  article.appendChild(divimage);
  divimage.setAttribute('id', '#img1');
  // divimage.id = "img1"
  const image1 = document.createElement('img');
  image1.src = portfolio[i].image;
  divimage.appendChild(image1);
  image1.classList.add('image1');
  // text div
  const text = document.createElement('div');
  text.classList = 'intro';
  article.appendChild(text);
  text.setAttribute('id', 'text1');
  // heading h2 of card
  const h2 = document.createElement('h2');
  h2.innerText = portfolio[i].heading;
  text.appendChild(h2);
  // adding list of experinece
  const ul = document.createElement('ul');
  text.appendChild(ul);
  // li items in ul
  let li = document.createElement('li');
  li.classList = 'area';
  li.innerText = portfolio[0].area;
  ul.appendChild(li);
  li = document.createElement('li');
  li.classList = 'dev';
  li.innerText = portfolio[0].deveoper;
  ul.appendChild(li);
  li = document.createElement('li');
  li.classList = 'date';
  li.innerText = portfolio[0].date;
  ul.appendChild(li);
  // paragraph
  const p = document.createElement('p');
  p.id = 'para-item1';
  p.innerHTML = portfolio[i].highlights;
  text.append(p);
  //  skill ul list
  const ul2 = document.createElement('ul');
  ul2.classList = 'button';
  text.appendChild(ul2);
  // skill li
  let list = document.createElement('li');
  list.classList = 'html';
  ul2.appendChild(list);
  let a = document.createElement('a');
  a.classList = 'button1';
  a.innerText = portfolio[0].btn1;
  list.appendChild(a);
  list = document.createElement('li');
  list.classList = 'css';
  ul2.appendChild(list);
  a = document.createElement('a');
  a.classList = 'button1';
  a.innerText = portfolio[0].btn2;
  list.appendChild(a);
  list = document.createElement('li');
  list.classList = 'java';
  ul2.appendChild(list);
  a = document.createElement('a');
  a.classList = 'button1';
  a.innerText = portfolio[0].btn3;
  list.appendChild(a);
  // adding see projct button
  const projectbtn = document.createElement('a');
  projectbtn.classList = 'see';
  projectbtn.id = 'project1';
  projectbtn.setAttribute('href', '#');
  projectbtn.innerHTML = portfolio[0].btn5;
  text.appendChild(projectbtn);
}
// popup loop
const popuparray = [
  {
    heading: 'British-Classic-Meals',
    area: 'Frontend',
    deveoper: 'Full Stack Dev',
    date: '2022',
    highlights:
      ' This App is about British Food where you find a list of meals that you can like and comment.',
    image: 'images/project1.png',
    btn1: 'html',
    btn2: 'css',
    btn3: 'javascript',
    seeproject:
      'https://tiagomarin.github.io/British-Classic-Meals/',
    seesource:
      'https://github.com/basitali111/British-Classic-Meals',
  },
  {
    heading: 'ToDo-List',
    area: 'Fronted',
    deveoper: 'Full Stack Dev',
    date: '2022',
    highlights:
      'This project contains a to-do list project where tasks can be added, marked as completed, and deleted. Users can edit a task by double-clicking on the task title section. A task can be deleted by clicking on the trash can icon on the right side of each task. Tasks can be marked as completed by clicking on the corresponding checkbox. All complete',
    image: 'images/project2.png',
    btn1: 'html',
    btn2: 'css',
    btn3: 'javascript',
    seeproject:
      'https://basit-todolist.netlify.app/',
    seesource:
      'https://github.com/basitali111/ToDo-List',
  },
  {
    heading: 'Math Magicians',
    area: 'Fronted',
    deveoper: 'Full Stack Dev',
    date: '2022',
    highlights:
      ' Math-Magician is a web app for all lovers of mathematics. It is a Single Page Application (SPA) that allows users to make simple calculations and read a random math-related quotes.',
    image: 'images/project5.png',
    btn1: 'html',
    btn2: 'css',
    btn3: 'react',
    seeproject:
      'https://basit-math.netlify.app/calculator',
    seesource:
      'https://github.com/basitali111/Math-magicians-',
  },
  {
    heading: 'Online-Shopping-Store',
    area: 'Frontend',
    deveoper: 'Full Stack Dev',
    date: '2022',
    highlights:
      " online-shiopping-store - A web application based on an external API which contains information about items for sell. The web app allows the user to view one page with a list of items that could be filtered by some parameters. It's a list of metrics that can be filtered by each specific item on sell. It also shows one page for the item details",
    image: 'images/project4.png',
    btn1: 'html',
    btn2: 'css',
    btn3: 'react',
    seeproject:
      'https://deploy-preview-1--basit-online-shopping.netlify.app/',
    seesource:
      'https://github.com/basitali111/online-shiopping-store',
  },
];

popuparray.forEach((element, i) => {
  const popup = document.querySelector('.popupcontainer');
  const card = document.createElement('div');
  card.classList = 'model';
  card.setAttribute('data-target', 'p-1');
  if (i === 1) {
    card.setAttribute('data-target', 'p-2');
  } else if (i === 2) {
    card.setAttribute('data-target', 'p-3');
  } else if (i === 3) {
    card.setAttribute('data-target', 'p-4');
  }
  const popupcard = `
<i class="w3-xxxlarge materialicons">X</i>
        <h2>${popuparray[i].heading}</h2>
        <ul class="work-areas">
          <li class="area">CANOPY</li>
          <li class="dev">Back End Dev</li>
          <li class="date">2015</li>
        </ul>
        <div class="image" id="img1">
          <img
            class="image1"
            src="${popuparray[i].image}"
            alt="work template"
          />
        </div>
        <div class ="text-container">
        <p>
         ${popuparray[i].highlights}
        </p>
        <div class ="button-container">
          <ul class="button">
            <li class="html"><a href="#" class="button1">HTML</a></li>
            <li class="css"><a href="#" class="button1">CSS</a></li>
            <li class="java"><a href="#" class="button1">${popuparray[i].btn3}</a></li>
          
          </ul>
          <div class="project-container">
            <span class="project-view">
             <a href="${popuparray[i].seeproject}" class="see-live">
              See live<i class='fas'>&#xf35d;</i></a
             >
           </span>
           <span class="see-source">
              <a href="${popuparray[i].seesource}" class="see-live">
              See Source <img src="imges/github.png" alt="git hub" class="github"
             /></a>
            </span>
          </div>
        </div>
      </div>
`;
  card.innerHTML += popupcard;
  popup.appendChild(card);
});
// validate form
const form = document.forms[0];
const email = document.getElementById('email');
const error = document.getElementById('error');

form.addEventListener('submit', (event) => {
  const messageWhileError = [];
  if (email.value.match(/[A-Z]/)) {
    messageWhileError.push('Email should be written in lowercase letters.');
    error.innerHTML = messageWhileError.join(', ');
    event.preventDefault();
    event.stopPropagation();
  }
});
// Preserve data
// making call name and textrea
const inputName = document.getElementById('name');
const textarea = document.getElementById('message');
// Adding listner for event handling
form.addEventListener('input', () => {
  localStorage.setItem('Name', `${inputName.value}`);
  localStorage.setItem('Email', `${email.value}`);
  localStorage.setItem('TextArea', `${textarea.value}`);
});
// get values from local storage
inputName.value = localStorage.getItem('Name');
email.value = localStorage.getItem('Email');
textarea.value = localStorage.getItem('TextArea');