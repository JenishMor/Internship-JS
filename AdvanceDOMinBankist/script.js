'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// --------------------------------------------------------------------------------
// Scrollbar related work (Navigating links)
let scrollBtn = document.querySelector('.btn--scroll-to');
let section1 = document.querySelector('#section--1');

scrollBtn.addEventListener('click', () => {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // ----------OR------------

  section1.scrollIntoView({ behavior: 'smooth' });
});

// document.querySelectorAll('.nav__link').forEach(function (ele) {
//   ele.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     const section = document.querySelector(id);
//     // console.log(id);
//     section.scrollIntoView({ behavior: 'smooth' });
//   });
// });

// ----------OR-------------
// This is event Delegation
document.querySelector('.nav__links').addEventListener('click', e => {
  e.preventDefault();
  // console.log(e.target);
  const id = e.target.getAttribute('href');
  // console.log(id);
  const section = document.querySelector(id);
  section.scrollIntoView({ behavior: 'smooth' });
});

// -------------------------------------------------------------
// Tabbed component
let tabBtn = document.querySelectorAll('.operations__tab');
let tabContainer = document.querySelector('.operations__tab-container');
let operationsContent = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', e => {
  // console.log('Tab button clicked');
  // console.log(e.target.getAttribute('data-tab'));
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  // Guard clause
  if (!clicked) return;

  // Active tab
  tabBtn.forEach(ele => {
    ele.classList.remove('operations__tab--active');
  });
  clicked.classList.add('operations__tab--active');

  // Active content area
  let tab = clicked.getAttribute('data-tab');

  // First remove active class from all the tab and then add to the particular
  operationsContent.forEach(ele => {
    ele.classList.remove('operations__content--active');
  });
  // let tabContent = document.querySelector(`.operations__content--${tab}`);
  document
    .querySelector(`.operations__content--${tab}`)
    .classList.add('operations__content--active');
});

// Navbar
let nav = document.querySelector('.nav');
const handleHover = (e, opacity) => {
  if (e.target.classList.contains('nav__link')) {
    // console.log(e.target);
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(ele => {
      if (ele !== link) ele.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};
nav.addEventListener('mouseover', e => {
  handleHover(e, 0.5);
});
nav.addEventListener('mouseout', e => {
  handleHover(e, 1);
});

// ---------------------------------------------------------------------------
// Sticky navigation
// const initialCoords = section1.getBoundingClientRect();
// // console.log(initialCoords);
// window.addEventListener('scroll', () => {
//   // console.log(window.scrollY);
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// Sticky navigation using intersection API
let header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickeyNav = entries => {
  const [entry] = entries;
  // console.log(entry);
  // If this isIntersecting in entry object is false then we add sticky navbar
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickeyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// -------------------------------------------------------------------------
// Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = (entries, observer) => {
  const [entry] = entries;
  // console.log(entry);
  // When intersect that particular section then and only then we remove hidden class
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(section => {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});
// console.log(sectionObserver);

// -----------------------------------------------------------------------
// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');
// console.log(imgTargets);

const loadImg = (entries, observer) => {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;

  // Replacing src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});

imgTargets.forEach(imgTarget => {
  imgObserver.observe(imgTarget);
});

// ------------------------------------------------------------------------
// Slider
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');

let currSlide = 0;
let maxSlide = slides.length;

const createDots = () => {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide = "${i}"></button>`
    );
  });
};

createDots();

// slider.style.transform = 'scale(0.4) translateX(-1500px)';
// slider.style.overflow = 'visible';

const activateDot = slide => {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

const gotoSlide = slide => {
  slides.forEach(
    (s, index) => (s.style.transform = `translateX(${(index - slide) * 100}%)`)
  );
};

gotoSlide(0);
activateDot(0);
// 0% 100% 200% 300%

const nextSlide = () => {
  currSlide === maxSlide - 1 ? (currSlide = 0) : currSlide++;
  // console.log(currSlide);
  // console.log('Next slide');
  gotoSlide(currSlide);
  activateDot(currSlide);
};

const prevSlide = () => {
  currSlide === 0 ? (currSlide = maxSlide - 1) : currSlide--;
  // console.log(currSlide);
  // console.log('Previous slide');
  gotoSlide(currSlide);
  activateDot(currSlide);
};

// Next slide
btnRight.addEventListener('click', nextSlide);
// currSlide = 1 -> -100% 0% 100% 200%

// Previous slide
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', e => {
  // console.log(e);
  e.code === 'ArrowRight' && nextSlide();
  e.code === 'ArrowLeft' && prevSlide();
});

// Change slide by clicking dots
dotContainer.addEventListener('click', e => {
  if (e.target.classList.contains('dots__dot')) {
    const slide = e.target.dataset.slide;
    gotoSlide(slide);
    activateDot(slide);
  }
});
