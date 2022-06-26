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
    heading: 'Tonic',
    area: 'Canopy',
    deveoper: 'Back End Dev',
    date: '2015',
    highlights:
      ' A daily selection of privately personalized reads; no accounts or sign-ups required',
    image: 'images/SnapshootPortfolio1.png',
    btn1: 'html',
    btn2: 'css',
    btn3: 'javascript',
    btn4: 'ruby',
    btn5: 'See project',
    btn6: 'bootstrap',
  },
  {
    heading: 'Multi-Post Stories',
    highlights:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'images/SnapshootPortfolio.png',
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
    heading: 'Tonic',
    highlights:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'images/SnapshootPortfolio(1).png',
    area: 'Canopy',
    deveoper: 'Back End Dev',
    date: '2015',
    btn1: 'html',
    btn2: 'css',
    btn3: 'javascript',
    btn4: 'ruby',
    btn6: 'bootstrap',
    btn5: 'See project',
  },
  {
    heading: 'Multi-Post Stories',
    highlights:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: 'images/SnapshootPortfolio(2).png',
    area: 'Canopy',
    deveoper: 'Back End Dev',
    date: '2015',
    btn1: 'html',
    btn2: 'css',
    btn3: 'javascript',
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
    heading: 'Tonic',
    area: 'Canopy',
    deveoper: 'Back End Dev',
    date: '2015',
    highlights:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'images/SnapshootPortfolio1.png',
    btn1: 'html',
    btn2: 'css',
    btn3: 'javascript',
    seeproject:
      'https://basitali111.github.io/Portfolio-setup-and-mobile-version-skeleton/',
    seesource:
      'https://github.com/basitali111/Portfolio-setup-and-mobile-version-skeleton',
  },
  {
    heading: 'Multi-Post Stories',
    area: 'Canopy',
    deveoper: 'Back End Dev',
    date: '2015',
    highlights:
      "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy text eve since the 1500s, when an unknown printer took a galley of type andbled it to make a type specimen book. It has survived not onlyfive centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'images/SnapshootPortfolio.png',
    btn1: 'html',
    btn2: 'css',
    btn3: 'javascript',
    seeproject:
      'https://basitali111.github.io/Portfolio-setup-and-mobile-version-skeleton/',
    seesource:
      'https://github.com/basitali111/Portfolio-setup-and-mobile-version-skeleton',
  },
  {
    heading: 'Tonic',
    area: 'Canopy',
    deveoper: 'Back End Dev',
    date: '2015',
    highlights:
      " Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy text eve since the 1500s, when an unknown printer took a galley of type andbled it to make a type specimen book. It has survived not onlyfive centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'images/SnapshootPortfolio(1).png',
    btn1: 'html',
    btn2: 'css',
    btn3: 'javascript',
    seeproject:
      'https://basitali111.github.io/Portfolio-setup-and-mobile-version-skeleton/',
    seesource:
      'https://github.com/basitali111/Portfolio-setup-and-mobile-version-skeleton',
  },
  {
    heading: 'Multi-Post Stories',
    area: 'Canopy',
    deveoper: 'Back End Dev',
    date: '2015',
    highlights:
      "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy text eve since the 1500s, when an unknown printer took a galley of type andbled it to make a type specimen book. It has survived not onlyfive centuries, but also the leap into electronic typesetting, remaining essent",
    image: 'images/SnapshootPortfolio(2).png',
    btn1: 'html',
    btn2: 'css',
    btn3: 'javascript',
    seeproject:
      'https://basitali111.github.io/Portfolio-setup-and-mobile-version-skeleton/',
    seesource:
      'https://github.com/basitali111/Portfolio-setup-and-mobile-version-skeleton',
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
            <li class="java"><a href="#" class="button1">Javascript</a></li>
          
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