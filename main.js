const menu = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close-icon");

const overlayLinkOne = document.querySelector(".overlay-link-one");
const overlayLinkTwo = document.querySelector(".overlay-link-two");
const overlayLinkThree = document.querySelector(".overlay-link-three");
const desktopWorkSection = document.getElementById("desktop-works");

const mobileModalButtonOne = document.querySelector("#bttn");
const mobileModalButtonTwo = document.querySelector(".btn-touch-two");
const mobileModalButtonThree = document.querySelector(".btn-touch-three");
const mobileModalButtonFour = document.querySelector(".btn-touch-four");
const closeMobileButton = document.querySelector(".close-mobile-button");

mobileModalButtonOne.addEventListener("click", () => {
  document.querySelector(".desktop-mode").style.display = "none";
  document.querySelector(".mobile-modal-container").style.display = "block";
});

mobileModalButtonTwo.addEventListener("click", () => {
  document.querySelector(".desktop-mode").style.display = "none";
  document.querySelector(".mobile-modal-container").style.display = "block";
});

mobileModalButtonThree.addEventListener("click", () => {
  document.querySelector(".desktop-mode").style.display = "none";
  document.querySelector(".mobile-modal-container").style.display = "block";
});

mobileModalButtonFour.addEventListener("click", () => {
  document.querySelector(".desktop-mode").style.display = "none";
  document.querySelector(".mobile-modal-container").style.display = "block";
});

closeMobileButton.addEventListener("click", () => {
  document.querySelector(".desktop-mode").style.display = "block";
  document.querySelector(".mobile-modal-container").style.display = "none";
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

overlayLinkOne.addEventListener("click", () => {
  overlay.style.display = "none";
});

overlayLinkTwo.addEventListener("click", () => {
  overlay.style.display = "none";
});

overlayLinkThree.addEventListener("click", () => {
  overlay.style.display = "none";
});

// Portfolio projects in an array
const projects = [
  {
    id: 1,
    name: "Tonic",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    featured_img: "./images/desktop-works/work-one.png",
    tecnologies: ["html", "css", "javascript"],
    live_link: "https://alphayowakarindi.github.io/My-Portfolio-1/",
    source_link: "https://github.com/alphayowakarindi/My-Portfolio-1",
  },
  {
    id: 2,
    name: "Multi-Post Stories",
    description:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    featured_img: "./images/desktop-works/work-two.png",
    tecnologies: ["html", "Ruby on rails", "css", "javascript"],
    live_link: "https://alphayowakarindi.github.io/My-Portfolio-2/",
    source_link: "https://github.com/alphayowakarindi/My-Portfolio-2",
  },
  {
    id: 3,
    name: "Facebook 360",
    description:
      "Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    featured_img: "./images/desktop-works/work-three.png",
    tecnologies: ["html", "Ruby on rails", "css", "javascript"],
    live_link: "https://alphayowakarindi.github.io/My-Portfolio-3/",
    source_link: "https://github.com/alphayowakarindi/My-Portfolio-3",
  },
  {
    id: 4,
    name: "Uber Navigation",
    description:
      "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    featured_img: "./images/desktop-works/work-four.png",
    tecnologies: ["html", "Ruby on rails", "css", "javascript"],
    live_link: "https://alphayowakarindi.github.io/My-Portfolio-4/",
    source_link: "https://github.com/alphayowakarindi/My-Portfolio-4",
  },
];

//
window.addEventListener("DOMContentLoaded", () => {
  let projectsInHtmlVersion = "";
  for (let i = 0; i < projects.length; i += 1) {
    projectsInHtmlVersion += ` 
                <div class="work">
                <div class="left-content">
                  <img src="${projects[i].featured_img}" alt="" />
                </div>
                <div class="right-content">
                  <h3>${projects[i].name}</h3>
                  <div class="role">
                    <span>Canopy</span> <img src="images/works/counter.svg" alt="" />
                    <span class="skilll">Back End Dev</span>
                    <img src="images/works/counter.svg" alt="" />
                    <span class="year">2015</span>
                  </div>
                  <p class="task">
                  ${projects[i].description}
                  </p>
                  <ul>
                    ${projects[i].tecnologies
                      .map((tech) => `<li>${tech}</li>`)
                      .join("")}
                  </ul>
                  <button class='pop-desktop-modal-btn' type="submit"  data-id=${
                    projects[i].id
                  }>See Project</button>
                </div>
              </div>`;
  }
  desktopWorkSection.innerHTML = projectsInHtmlVersion;
  return desktopWorkSection.innerHTML;
});

// event delegation will allow us to access any JS dynamic object
document.addEventListener("click", (e) => {
  if (e.target.className === "pop-desktop-modal-btn") {
    document.querySelector(".desktop-modal-container").style.display = "block";
    return;
  }
  if (e.target.className === "close-desktop-modal") {
    document.querySelector(".desktop-modal-container").style.display = "none";
  }
});

// Local storage
const contactForm = document.getElementById("form");
const [userName, email, message] = form.elements;

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
