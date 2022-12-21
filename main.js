const menu = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close-icon");

const overlayLinks = document.querySelectorAll(".overlay-link");
overlayLinks.forEach((overlayLink) => {
  overlayLink.addEventListener("click", () => {
    overlay.style.display = "none";
  });
});

document
  .querySelector("#btn-submit-form")
  .addEventListener("click", (event) => {
    const email = document.getElementById("email-contact").value;
    const error = document.querySelector(".error-email-class");
    const isLowerCase = (str) => str === str.toLowerCase();
    if (!isLowerCase(email)) {
      event.preventDefault();
      error.style.display = "block";
      setTimeout(() => {
        error.style.display = "none";
      }, 5000);
    }
  });

menu.addEventListener("click", () => {
  overlay.style.display = "block";
});

close.addEventListener("click", () => {
  overlay.style.display = "none";
});

const projects = [
  {
    id: 1,
    name: "E-Learning",
    description: `This is an e-learning platform where you get educated on all issues of life. The importance of E-Learning education is that it is quick and does not require much cost.
    The long training period, infrastructure, stationery, travel expenses, etc. is reduced. It makes information easy to grasp and absorb. Do you want to grow in your area of expertise?
        Stay put on this website. It's all-encompassing!!!`,
    featured_img: "./resources/img/capstone.png",
    tecnologies: ["html", "css", "javascript"],
    live_link:
      "https://oyepriscilla.github.io/First-Microverse-Capstone-Project/",
    source_link:
      "https://github.com/OyePriscilla/First-Microverse-Capstone-Project",
  },
  {
    id: 2,
    name: "Calculator",
    description: `This calculator can be used to do basic arithmetic operations like addition, subtraction, division, multiplication, etc.
    Do your calculation anywhere and any time of the day! Feel free to use it.`,
    featured_img: "./resources/img/calculator.png",
    tecnologies: ["html", "css", "javascript", "React"],
    live_link: "https://bespoke-pastelito-6aabde.netlify.app/",
    source_link: " https://github.com/OyePriscilla/calculatorappreact",
  },
  {
    id: 3,
    name: "ToDo App",
    description: `With the todo App, you can delete completed todo(s) both from the UI and local storage; the todo can be edited, and the completed task will be marked as completed. I got a good understanding of JS CRUD operation in the process of building this app.`,
    featured_img: "./resources/img/todo.png",
    tecnologies: ["html", "css", "javascript"],
    live_link: "https://oyepriscilla.github.io/todo/",
    source_link: "https://github.com/OyePriscilla/todo",
  },
  {
    id: 4,
    name: "LeaderBoard",
    description:
      "The leaderBoard was developed to learn how to interpret API documentation and understand how to send and receive data from API.",
    featured_img: "./resources/img/leaderboard.jpg",
    tecnologies: ["html", "css", "javascript"],
    live_link: "https://oyepriscilla.github.io/Leaderboard-Api/",
    source_link: "https://github.com/OyePriscilla/Leaderboard-Api",
  },
];

const dynamicContent = document.querySelector(".dynamic-content");
window.addEventListener("DOMContentLoaded", () => {
  let dynamicContentInnerHTML = "";
  for (let i = 0; i < projects.length; i += 1) {
    dynamicContentInnerHTML += `
                <div class="portfolio-content">
                <div class="img-container">
                  <img class="project-img" src="${
                    projects[i].featured_img
                  }" alt="" />
                </div>
                <div class="project-details">
                  <h3 class="tonic">${projects[i].name}</h3>
                  <div class="tech-lists">
                    <span>Front End Dev</span> <img src="images/works/counter.svg" alt="" />
                    <span class="year">2022</span>
                  </div>
                  <p class="">
                  ${projects[i].description}
                  </p>
                  <ul>
                    ${projects[i].tecnologies
                      .map((tech) => `<li>${tech}</li>`)
                      .join("")}
                  </ul>
                 <div class="link-buttons">
                 <a href=${
                   projects[i].live_link
                 } class="btn-touch btn-links">Live Link</a>
                 <a href=${
                   projects[i].source_link
                 } class="btn-touch btn-links">Source Link</a>
                 </div>
                </div>
              </div>`;
  }
  dynamicContent.innerHTML = dynamicContentInnerHTML;
  return dynamicContent.innerHTML;
});

const closePop = () => {
  document.querySelector(".desktop-mode").style.display = "block";
  document.querySelector(".popup").style.display = "none";
};

window.closePop = closePop;

// Local storage
const contactForm = document.getElementById("form");
const [userName, email, message] = contactForm.elements;

if (!localStorage.getItem("form-detail")) {
  const data = {
    nameContent: "",
    emailContent: "",
    messageContent: "",
  };
  localStorage.setItem("form-detail", JSON.stringify(data));
}

const setBrowserData = (element, elementValue) => {
  element.addEventListener("change", () => {
    const retrivedData = JSON.parse(localStorage.getItem("form-detail"));
    retrivedData[elementValue] = element.value;
    localStorage.setItem("form-detail", JSON.stringify(retrivedData));
  });
};

const setFormDetails = (element, elementValue) => {
  element.value = elementValue;
};

document.addEventListener("DOMContentLoaded", () => {
  setBrowserData(userName, "nameContent");
  setBrowserData(email, "emailContent");
  setBrowserData(message, "messageContent");
  const data = JSON.parse(localStorage.getItem("form-detail"));
  setFormDetails(userName, data.nameContent);
  setFormDetails(email, data.emailContent);
  setFormDetails(message, data.messageContent);
});
