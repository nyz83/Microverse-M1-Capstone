// For navigation
const navToggle = document.querySelector('.mobile-nav-toggle');
const navigation = document.querySelector('.navigation');

navToggle.addEventListener('click', () => {
  const visibility = navigation.getAttribute('data-visible');
  if (visibility === 'false') {
    navigation.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else {
    navigation.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});

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

function populateCarpenter(template, data) {
  const
    {
      name, pic, position, bio,
    } = data;

  const carpenterHTML = template.content.cloneNode(true);

  carpenterHTML.getElementById('carpenterImg').src = pic;
  carpenterHTML.getElementById('carpenterName').textContent = name;
  carpenterHTML.getElementById('carpenterPosition').textContent = position;
  carpenterHTML.getElementById('carpenterBio').textContent = bio;

  return carpenterHTML;
}

carpentersData.forEach((carpenter) => {
  const carpenterTemplate = document.getElementById('carpenter-template');
  if (carpenterTemplate) {
    const populatedCarpenter = populateCarpenter(carpenterTemplate, carpenter);
    carpentersWrapper.appendChild(populatedCarpenter);
  } else {
    return null;
  }
});

let currentCarpenters = 2;
const seeMoreBtn = document.querySelector('.load-more');

seeMoreBtn.addEventListener('click', () => {
  const carpentersList = [
    ...document.querySelectorAll('.carpenters .carpenter'),
  ];
  for (let i = currentCarpenters; i < currentCarpenters + 4; i += 1) {
    if (carpentersList[i]) {
      carpentersList[i].style.display = 'grid';
    }
  }
  currentCarpenters += 4;
  if (currentCarpenters >= carpentersList.length) {
    seeMoreBtn.style.display = 'none';
  }
});
