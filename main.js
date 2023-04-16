window.onload = () => {
  const barMenu = document.querySelector('.bar-menu');
  const popUp = document.querySelector('.pop-up');
  const close = document.querySelector('.close');
  const menu = document.querySelector('.menu');
  const skillItems = document.querySelectorAll('.skill-item');

  // On click add active class to clicked skill item and remove from others
  skillItems.forEach((skillItem) => {
    skillItem.addEventListener('click', () => {
      // if item is already active remove active class
      if (skillItem.classList.contains('active')) {
        skillItem.classList.remove('active');
        const icon = skillItem.querySelector('.item-1-header > i');
        icon.classList.remove('fa-solid', 'fa-angle-down');
        icon.classList.add('fa-solid', 'fa-angle-right');
        return;
      }
      skillItems.forEach((item) => {
        // Change item-1-header > i to fa-solid fa-angle-right next arrow"
        const icon = item.querySelector('.item-1-header > i');
        icon.classList.remove('fa-solid', 'fa-angle-down');
        icon.classList.add('fa-solid', 'fa-angle-right');
        item.classList.remove('active');
      });
      skillItem.classList.add('active');
      const icon = skillItem.querySelector('.item-1-header > i');
      icon.classList.remove('fa-solid', 'fa-angle-right');
      icon.classList.add('fa-solid', 'fa-angle-down');
    });
  });

  barMenu.addEventListener('click', () => {
    popUp.classList.remove('hidden');
  });

  close.addEventListener('click', () => {
    popUp.classList.remove('hidden');
  });

  menu.addEventListener('click', () => {
    popUp.classList.add('hidden');
  });

  const projectsData = [
    {
      title: 'TravelVent',
      subtitle: 'Book your next trip',
      techStack: 'Full Stack Dev',
      year: 2023,
      src: './images/projects/TravelVent.jpeg',
      highlight: 'An app that allows users to reserve a trip to their favorite destination. Users can create an account, get all available destinations, add/delete/reserve a trip, and get a list of reservations.',
      description: 'Introducing the travel app, designed to make reserving uses\'s dream trip a breeze. With just a few taps on the device, users can reserve a trip to their favorite destination. The app\'s user-friendly interface allows users to get location, price, and amenities. USers can also get review ratings done by other travelers to help them make the best decision for your trip. Users can create an account, login, and reserve a trip. It also allows users to view all available trips, get details of a specific trip, and get a list of all reservations.',
      lang: ['Ruby on Rails', 'PostgreSql', 'JWT', 'React', 'Redux', 'Netlify'],
      live: 'https://remarkable-buttercream-3be0d2.netlify.app/',
      source: 'https://github.com/KanzaTahreem/TravelVent-Backend',
    },
    {
      title: 'Recipe App',
      subtitle: 'Your Favorite Recipes',
      techStack: 'Full Stack Dev',
      year: 2023,
      src: './images/projects/RecipeApp.jpeg',
      highlight: 'The app allows user to save ingredients, keep track of what they have, create recipes, and generate a shopping list based on what is present and what is missing from a recipe.',
      description: 'The Recipe app keeps track of all ingredients, recipes, and public recipes. It will allows users to save ingredients, keep track of what they have, create recipes, and generate a shopping list based on what is present and what is missing from a recipe. Also, since sharing recipes is an important part of cooking, the app also allows users to make them public so anyone can access them.',
      lang: ['PostgreSQL', 'Ruby On Rails', 'Render'],
      live: 'https://recipe-app-livl.onrender.com/',
      source: 'https://github.com/KanzaTahreem/Recipe-App',
    },
    {
      title: 'Space Travelers\' Hub',
      subtitle: 'Book a trip to Space',
      techStack: 'Front End Dev',
      year: 2022,
      src: './images/projects/SpaceTravelersHub.png',
      highlight: 'A Single Page App (SPA) that displays a list of Rockets & Missions by fetching real live data from SpaceX API.',
      description: 'A Single Page App (SPA) that displays a list of Rockets & Missions by fetching real live data from SpaceX API. SpaceX is a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join space missions.',
      lang: ['React', 'Redux', 'JavaScript', 'React Bootstrap'],
      live: 'https://react-space-travel.netlify.app/',
      source: 'https://github.com/KanzaTahreem/Space-Travelers-Hub',
    },
    {
      title: 'Math Magicians',
      subtitle: 'Use Magic of Math',
      techStack: 'Front End Dev',
      year: 2022,
      src: './images/projects/MathMagicians.jpeg',
      highlight: 'Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that enables users to perform simple calculations.',
      description: 'Math Magicians is a website designed for all mathematics enthusiasts. It is a Single Page App (SPA) that enables users to perform simple calculations and read random math-related quotes. The app is built with React.js, while navigation is made possible through React Router. The project was bootstrapped with \'create react app\' and tested using React Testing Library to simulate user interactions. Additionally, all components were tested using Jest snapshots to ensure the app\'s stability.',
      lang: ['React', 'JavaScript', 'CSS'],
      live: 'https://react-math-magician.netlify.app/',
      source: 'https://github.com/KanzaTahreem/Math-Magicians',
    },
  ];

  const projectCardString = projectsData.map((project) => `
    <div class="card grid__item ">
      <div class="inner-card">
        <div class="card-img card-1">
          <img
            src="${project.src}"
            alt="Project Snapshot"
          />
        </div>
        <div class="desc">
          <h3>${project.title}</h3>
          <h4>${project.subtitle} <span>${project.techStack}</span> <span>${project.year}</span></h4>
          <p>${project.highlight}</p>
          <ul>
            ${project.lang.map((tech) => `<li>${tech}</li>`).join('')}
          </ul>
          <button type="button" class="project-btn button">
            See Project
          </button>
        </div>
      </div>
    </div>
  `);

  const popupContainer = document.querySelector('.project-popup-container');
  const recentWork = document.querySelector('.recent-work');
  const parser = new DOMParser();

  projectCardString.forEach((projectString, index) => {
    const projectElement = parser.parseFromString(projectString, 'text/html').body.firstChild;

    const mobilePopup = `
      <div class="project-popup-hidden ">
        <div class="project-background"></div>
          <div class="project-popup">

            <div class="project-header">
              <i class="fa-solid fa-xmark project-close"></i>
              <h2>${projectsData[index].title}</h2>
              <p>${projectsData[index].subtitle} <span>${projectsData[index].techStack}</span> <span>${projectsData[index].year}</span></p>
            </div>
            <div class="project-img" style="background-image: url(${projectsData[index].src})">
            </div>
            <div class="project-footer">
              <p class="project-desc">${projectsData[index].description}</p>
              <div>
                <ul>
                  ${projectsData[index].lang.map((tech) => `<li>${tech}</li>`).join('')}
                </ul>
                <span></span>
                <div class="project-links">
                  <button ><a href="${projectsData[index].live}" target="_blank">See Live <i class="fa-solid fa-arrow-up-right-from-square"></i></a></button>
                  <button><a href="${projectsData[index].source}" target="_blank">See Source <i class="fa-brands fa-github"></i></a></button>
                </div>
              </div>
            </div>
          </div>
      </div>
    `;

    const mobilePopupElement = parser.parseFromString(mobilePopup, 'text/html').body.firstChild;

    const projectBtn = projectElement.querySelector('.project-btn');
    const closeBtn = mobilePopupElement.querySelector('.project-close');

    projectBtn.addEventListener('click', () => {
      mobilePopupElement.classList.toggle('project-popup-hidden');
    });

    closeBtn.addEventListener('click', () => {
      mobilePopupElement.classList.toggle('project-popup-hidden');
    });

    recentWork.append(projectElement);
    popupContainer.append(mobilePopupElement);
  });

  const form = document.querySelector('#form');
  const messageContainer = document.querySelector('.message');

  const isValidEmail = (email) => {
    const eamilPattern = /^(([^<>()[\]\\.,;:\s@"A-Z]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
    return eamilPattern.test(email);
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const valid = isValidEmail(formData.get('email'));
    if (valid) {
      const message = document.createElement('span');
      message.classList.add('success');
      message.innerHTML = 'Data sent successfully! 🙌';
      messageContainer.replaceChildren(message);
    } else {
      const message = document.createElement('span');
      message.classList.add('error');
      message.innerHTML = 'Error!⚡ Incorrect format. Enter email in lowercase';
      messageContainer.replaceChildren(message);
    }
  });

  const name = document.querySelector('#text');
  const email = document.querySelector('#email');
  const comment = document.querySelector('#comment');

  function saveData() {
    const data = {
      fieldName: name.value,
      fieldEmail: email.value,
      fieldComment: comment.value,
    };
    localStorage.setItem('data', JSON.stringify(data));
  }

  let formObject = JSON.parse(localStorage.getItem('data'));
  if (!formObject) {
    formObject = {
      name: '',
      email: '',
      comment: '',
    };
    saveData();
  }

  if (!formObject.name) {
    formObject.name = '';
  }

  if (!formObject.email) {
    formObject.email = '';
  }

  if (!formObject.comment) {
    formObject.comment = '';
  }

  name.value = formObject.name;
  name.addEventListener('change', (e) => {
    formObject.name = e.target.value;
    localStorage.setItem('data', JSON.stringify(formObject));
  });

  email.value = formObject.email;
  email.addEventListener('change', (e) => {
    formObject.email = e.target.value;
    localStorage.setItem('data', JSON.stringify(formObject));
  });

  comment.value = formObject.comment;
  comment.addEventListener('change', (e) => {
    formObject.comment = e.target.value;
    localStorage.setItem('data', JSON.stringify(formObject));
  });
};

// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
  // Get a reference to the portfolio grid
  const portfolioGrid = document.querySelector('.recent-work');

  // Check if the user has scrolled down to the portfolio grid
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (rect.top <= (window.innerHeight || document.documentElement.clientHeight)
      && rect.bottom >= 0
      && rect.left <= (window.innerWidth || document.documentElement.clientWidth)
      && rect.right >= 0);
  }

  window.addEventListener('scroll', () => {
    // Get all child elements of the portfolio grid
    const portfolioItems = portfolioGrid.querySelectorAll('.card');

    // Loop through each child element and check if it's in the viewport
    portfolioItems.forEach((portfolioItem) => {
      if (isElementInViewport(portfolioItem) && !portfolioItem.classList.contains('animate__animated')) {
        // Add the 'animated' and 'fade-in' classes to the child element to trigger the animation
        portfolioItem.classList.add('animate__animated', 'animate__fadeIn');
      } else if (!isElementInViewport(portfolioItem) && portfolioItem.classList.contains('animate__animated')) {
        // Remove the 'animated' class from the child element when it goes out of view
        portfolioItem.classList.remove('animate__animated');
        portfolioItem.classList.remove('animate__fadeIn');
      }
    });
  });
});