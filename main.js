const menu = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close-icon');

const overlayLinkOne = document.querySelector('.overlay-link-one');
const overlayLinkTwo = document.querySelector('.overlay-link-two');
const overlayLinkThree = document.querySelector('.overlay-link-three');
const desktopWorkSection = document.getElementById('desktop-works');

menu.addEventListener('click', () => {
  overlay.style.display = 'block';
});

close.addEventListener('click', () => {
  overlay.style.display = 'none';
});

overlayLinkOne.addEventListener('click', () => {
  overlay.style.display = 'none';
});

overlayLinkTwo.addEventListener('click', () => {
  overlay.style.display = 'none';
});

overlayLinkThree.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// Portfolio projects in an array
const projects = [
  {
    id: 1,
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featured_img: './images/desktop-works/work-one.png',
    tecnologies: ['html', 'css', 'javascript'],
    live_link: 'https://alphayowakarindi.github.io/My-Portfolio-1/',
    source_link: 'https://github.com/alphayowakarindi/My-Portfolio-1',
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    featured_img: './images/desktop-works/work-two.png',
    tecnologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    live_link: 'https://alphayowakarindi.github.io/My-Portfolio-2/',
    source_link: 'https://github.com/alphayowakarindi/My-Portfolio-2',
  },
  {
    id: 3,
    name: 'Facebook 360',
    description:
      'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    featured_img: './images/desktop-works/work-three.png',
    tecnologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    live_link: 'https://alphayowakarindi.github.io/My-Portfolio-3/',
    source_link: 'https://github.com/alphayowakarindi/My-Portfolio-3',
  },
  {
    id: 4,
    name: 'Uber Navigation',
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    featured_img: './images/desktop-works/work-four.png',
    tecnologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    live_link: 'https://alphayowakarindi.github.io/My-Portfolio-4/',
    source_link: 'https://github.com/alphayowakarindi/My-Portfolio-4',
  },
];

//
window.addEventListener('DOMContentLoaded', () => {
  let projectsInHtmlVersion = '';
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
    .join('')}
                  </ul>
                  <button class='pop-desktop-modal-btn' type="submit"  data-id=${
  projects[i].id
}>See Project</button>
                </div>
              </div>`;
  }
  desktopWorkSection.innerHTML = projectsInHtmlVersion;
  return (desktopWorkSection.innerHTML);
});