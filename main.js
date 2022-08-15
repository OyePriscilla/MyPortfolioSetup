const menu = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close-icon');

const overlayLinks = document.querySelectorAll('.overlay-link');
overlayLinks.forEach((overlayLink) => {
  overlayLink.addEventListener('click', () => {
    overlay.style.display = 'none';
  });
});

document
  .querySelector('#btn-submit-form')
  .addEventListener('click', (event) => {
    const email = document.getElementById('email-contact').value;
    const error = document.querySelector('.error-email-class');
    const isLowerCase = (str) => str === str.toLowerCase();
    if (!isLowerCase(email)) {
      event.preventDefault();
      error.style.display = 'block';
      setTimeout(() => {
        error.style.display = 'none';
      }, 5000);
    }
  });

menu.addEventListener('click', () => {
  overlay.style.display = 'block';
});

close.addEventListener('click', () => {
  overlay.style.display = 'none';
});

const projects = [
  {
    id: 1,
    name: 'E-Learning',
    description:
      'I built this website from scratch and it was designed in accordance to First Microverse Capstone Project Requirements.',
    featured_img: './resources/img/capstone.png',
    tecnologies: ['html', 'css', 'javascript'],
    live_link: 'https://oyepriscilla.github.io/First-Microverse-Capstone-Project/',
    source_link: 'https://github.com/OyePriscilla/First-Microverse-Capstone-Project',
    fullDescription: `This is e-learning platform where you get educated on all issues of life. The importance of E-Learning education is that it is quick and does not require much cost.
     The long training period, infrastructure, stationery, travel expenses, etc. is reduced. It makes information easy to grasp and absorb. Do you want to grow in your area of expertise?
      Stay put to this website. It's all encompassing!!!`,
  },
  {
    id: 2,
    name: 'Calculator',
    description:
      'This website was built to learn React and Redux. A calculator App was built to solidify the knowledge acquired in the process of learning.',
    featured_img: './resources/img/calculator.png',
    tecnologies: ['html', 'css', 'javascript', 'React'],
    live_link: 'https://bespoke-pastelito-6aabde.netlify.app/',
    source_link: ' https://github.com/OyePriscilla/calculatorappreact',
    fullDescription: `This calculator can be used to do basic arithemetic operations like addition, subtraction, division, multiplication e.t.c.
     Do your calculation anywhere and anytime of the day! Feel free to use it.`,
  },
  {
    id: 3,
    name: 'ToDo App',
    description:
      'Access this App anytime of the day to check the status of daily task',
    featured_img: './resources/img/todo.png',
    tecnologies: ['html', 'css', 'javascript'],
    live_link: 'https://oyepriscilla.github.io/todo/',
    source_link: 'https://github.com/OyePriscilla/todo',
    fullDescription: `With todo App, you can delete completed todo(s) both from the UI and localstorage; the todos can as well be edited; and completed task
    will be marked as completed. I got a good understanding of JS CRUD operation in the process of building
    this app.`,
  },
  {
    id: 4,
    name: 'Uber',
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    featured_img: './images/desktop-works/work-four.png',
    tecnologies: ['html', 'css', 'javascript'],
    live_link: '#',
    source_link: '#',
    fullDescription: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas animi error, nobis et modi consectetur sapiente laborum nisi similique, eos, fugit repudiandae dolore esse? Debitis eligendi
     eum reprehenderit atque, labore neque, molestias distinctio similique eius molestiae et maxime!`,
  },
];

const dynamicContent = document.querySelector('.dynamic-content');
window.addEventListener('DOMContentLoaded', () => {
  let dynamicContentInnerHTML = '';
  for (let i = 0; i < projects.length; i += 1) {
    dynamicContentInnerHTML += `
                <div class="portfolio-content">
                <div class="img-container">
                  <img class="project-img" src="${projects[i].featured_img}" alt="" />
                </div>
                <div class="project-details">
                  <h3 class="tonic">${projects[i].name}</h3>
                  <div class="tech-lists">
                    <span>FULL STACK</span> <img src="images/works/counter.svg" alt="" />
                    <span class="skilll">Back End Dev</span>
                    <img src="images/works/counter.svg" alt="counter" />
                    <span class="year">2022</span>
                  </div>
                  <p class="">
                  ${projects[i].description}
                  </p>
                  <ul>
                    ${projects[i].tecnologies
    .map((tech) => `<li>${tech}</li>`)
    .join('')}
                  </ul>
                  <button onClick=seeProject(${projects[i].id}) class='pop-desktop-modal-btn btn-touch bttn' type="submit"
}>See Project</button>
                </div>
              </div>`;
  }
  dynamicContent.innerHTML = dynamicContentInnerHTML;
  return dynamicContent.innerHTML;
});

const popUp = document.querySelector('.popup');
const seeProject = (id) => {
  document.querySelector('.desktop-mode').style.display = 'none';
  popUp.style.display = 'block';
  let dynamicPopUp = '';

  for (let i = 0; i < projects.length; i += 1) {
    if (id === projects[i].id) {
      dynamicPopUp = `
                  <div class="portfolio-content">
                  <div class="display-flex">
                  <h3 class="tonic">${projects[i].name}</h3>
                  <img onClick=closePop(${projects[i].id})  class="close-popup" src="./resources/img/close-popup.jpg" alt="close-pop" />
                  </div>
                  <div class="tech-lists">
                  <span>FULL STACK</span> <img src="images/works/counter.svg" alt="" />
                  <span class="skilll">Back End Dev</span>
                  <img src="images/works/counter.svg" alt="" />
                  <span class="year">2022</span>
                </div>
                  <div>
                    <img class="project-img" src="${projects[i].featured_img}" alt="" />
                  </div>
                  <div class="">
                    <p class="">
                    ${projects[i].fullDescription}
                    </p>
                    <div class="links-skills">
                    <ul>
                      ${projects[i].tecnologies
    .map((tech) => `<li>${tech}</li>`)
    .join('')}
                    </ul>
                    <div>
                    <a href="${projects[i].live_link}" class='btn-touch live-link' type="submit"
                  >Live Link</a>
                  <a href="${projects[i].source_link}" class='btn-touch live-link' type="submit"
                  >Source Link</a>
                  </div>
                    </div>
                  </div>
                </div>`;
    }
    popUp.innerHTML = dynamicPopUp;
  }
};

window.seeProject = seeProject;

const closePop = () => {
  document.querySelector('.desktop-mode').style.display = 'block';
  document.querySelector('.popup').style.display = 'none';
};

window.closePop = closePop;

// Local storage
const contactForm = document.getElementById('form');
const [userName, email, message] = contactForm.elements;

if (!localStorage.getItem('form-detail')) {
  const data = {
    nameContent: '',
    emailContent: '',
    messageContent: '',
  };
  localStorage.setItem('form-detail', JSON.stringify(data));
}

const setBrowserData = (element, elementValue) => {
  element.addEventListener('change', () => {
    const retrivedData = JSON.parse(localStorage.getItem('form-detail'));
    retrivedData[elementValue] = element.value;
    localStorage.setItem('form-detail', JSON.stringify(retrivedData));
  });
};

const setFormDetails = (element, elementValue) => {
  element.value = elementValue;
};

document.addEventListener('DOMContentLoaded', () => {
  setBrowserData(userName, 'nameContent');
  setBrowserData(email, 'emailContent');
  setBrowserData(message, 'messageContent');
  const data = JSON.parse(localStorage.getItem('form-detail'));
  setFormDetails(userName, data.nameContent);
  setFormDetails(email, data.emailContent);
  setFormDetails(message, data.messageContent);
});
