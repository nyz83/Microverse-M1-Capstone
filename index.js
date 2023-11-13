// For navigation
const navToggle = document.querySelector('.mobile-nav-toggle');
const navigation = document.querySelector('.navigation');
const navItems = document.querySelectorAll('.nav-list li a');

navToggle.addEventListener('click', () => {
  const visibility = navigation.getAttribute('data-visible');
  if (visibility === 'false') {
    navigation.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
    document.body.classList.add('mobile-nav-open');
  } else {
    navigation.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
    document.body.classList.remove('mobile-nav-open');
  }
});

navItems.forEach((navItem) => navItem.addEventListener('click', () => {
  navigation.setAttribute('data-visible', false);
  navToggle.setAttribute('aria-expanded', false);
  document.body.classList.remove('mobile-nav-open');
}));

// Stop Animation on resize
let resizeTimer;
window.addEventListener('resize', () => {
  document.body.classList.add('resize-animation-stopper');
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove('resize-animation-stopper');
  }, 400);
});

// For Carpenters
const carpentersData = [
  {
    name: 'John Henry',
    pic: './assets/images/pic-person1.jpg',
    position: 'Master Carpenter',
    bio: 'Highly skilled master carpenter with meticulous attention to detail. Specializes in crafting custom furniture and overseeing home renovations.',
  },
  {
    name: 'Sarah Norton',
    pic: './assets/images/pic-person2.jpg',
    position: 'Custom Furniture Artisan',
    bio: 'Dedicated custom furniture artisan, known for crafting unique and personalized wooden pieces with a passion for woodworking.',
  },
  {
    name: 'Michael Timbres',
    pic: './assets/images/pic-person3.jpg',
    position: 'Residential Renovation Expert',
    bio: 'Seasoned residential renovation expert with expertise in woodworking and home improvement. Ensures precision and care in every project.',
  },
  {
    name: 'Emily Carver',
    pic: './assets/images/pic-person4.jpg',
    position: 'Carpentry Designer',
    bio: 'Talented carpentry designer with a focus on innovative and aesthetic woodworking. Specializes in creating one-of-a-kind wooden installations and structures.',
  },
  {
    name: 'David James',
    pic: './assets/images/pic-person5.jpg',
    position: 'Woodworking Artisan',
    bio: 'Passionate woodworking artisan known for unparalleled craftsmanship. Creates custom wooden art and functional pieces with beauty and precision.',
  },
  {
    name: 'Junichi Saibara',
    pic: './assets/images/pic-person6.jpg',
    position: 'Woodworking Artist',
    bio: 'Visionary woodworking artist turning wood into captivating works of art. Specializes in unique sculptures and wooden creations, showcasing a profound passion for the craft.',
  },
];

const carpentersWrapper = document.querySelector('.carpenters');

carpentersData.forEach((carpenter, index) => {
  const carpenterTemplate = document.querySelector('#carpenter-template');
  const carpenterElement = carpenterTemplate.content.querySelector('.carpenter').cloneNode(true);

  carpenterElement.setAttribute('data-index', index);
  carpenterElement.querySelector('#carpenterImg').src = carpenter.pic;
  carpenterElement.querySelector('#carpenterName').textContent = carpenter.name;
  carpenterElement.querySelector('#carpenterPosition').textContent = carpenter.position;
  carpenterElement.querySelector('#carpenterBio').textContent = carpenter.bio;

  carpentersWrapper.appendChild(carpenterElement);
});

const seeMoreBtn = document.querySelector('.see-more');
const seeLessBtn = document.querySelector('.see-less');

seeMoreBtn.addEventListener('click', () => {
  document.querySelectorAll('.carpenter:not(:nth-child(-n + 2))').forEach((carpenter) => {
    carpenter.style.display = 'grid';
  });
  seeMoreBtn.style.display = 'none';
  seeLessBtn.style.display = 'flex';
});
seeLessBtn.addEventListener('click', () => {
  document.querySelectorAll('.carpenter:not(:nth-child(-n + 2))').forEach((carpenter) => {
    carpenter.style.display = 'none';
  });
  seeLessBtn.style.display = 'none';
  seeMoreBtn.style.display = 'flex';
});

const widthMatch = window.matchMedia('(min-width: 768px)');
widthMatch.addEventListener('change', (mm) => {
  if (mm.matches) {
    document.querySelectorAll('.carpenter').forEach((carpenter) => {
      carpenter.style.display = 'grid';
    });
    seeLessBtn.style.display = 'none';
    seeMoreBtn.style.display = 'none';
  } else {
    document.querySelectorAll('.carpenter:not(:nth-child(-n + 2))').forEach((carpenter) => {
      carpenter.style.display = 'none';
    });
    seeMoreBtn.style.display = 'flex';
  }
});