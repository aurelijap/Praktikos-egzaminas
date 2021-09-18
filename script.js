// Meniu
function changeMenu(target, name) {
  target.preventDefault();
  var menuItem = document.getElementsByClassName('menu-item');
  for (var i = 0; i < menuItem.length; i++) {
    menuItem[i].classList.remove('active');
  }
  const el = document.getElementById(name);
  var y = offset(el) - 70;
  target.currentTarget.classList.add('active');
  window.scrollTo({ top: y, behavior: 'smooth' });
}

window.addEventListener(
  'resize',
  function () {
    var menu = document.getElementById('menu-wrap');
    if (window.screen.width > 700) {
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
    }
  },
  true
);

function offset(el) {
  var rect = el.getBoundingClientRect().top;
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return rect + scrollTop;
}

// Show menu
function showMenu() {
  var myMenu = document.getElementById('menu-wrap');
  if (myMenu.style.display == 'flex') {
    myMenu.style.display = 'none';
  } else {
    myMenu.style.display = 'flex';
  }
}

// Formos blokas
function tikrintiFormosDuomenis() {
  var firstName = document.getElementById('firstname').value;
  var lastName = document.getElementById('lastname').value;
  var phone = document.getElementById('phone').value;
  if (firstName == '' || lastName == '' || phone == '') {
    alert('Įveskite visus duomenis');
    return false;
  }
  if (isNaN(phone)) {
    alert('Blogai įvestas numeris');
    return false;
  }
  alert('Duomenys įvesti');
  var form = document.getElementById('form');
  form.reset();
}
// Tabs blokas
var tab = document.getElementById('pirmastabas');
tab.style.display = 'block';
function changeTab(target, name) {
  var tabs = document.getElementsByClassName('tabs-text');
  var buttons = document.getElementsByClassName('tab');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = 'none';
    buttons[i].classList.remove('active');
  }
  var tab = document.getElementById(name);
  tab.style.display = 'block';
  target.currentTarget.classList.add('active');
}

// Talking blokas
var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 100,
  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Contact blokas
function tikrintiContactFormosDuomenis() {
  var firstNameContact = document.getElementById('firstnamecontact').value;
  var lastNameContact = document.getElementById('lastnamecontact').value;
  var phoneContact = document.getElementById('phonecontact').value;
  if (firstNameContact == '' || lastNameContact == '' || phoneContact == '') {
    alert('Įveskite visus duomenis');
    return false;
  }
  if (isNaN(phoneContact)) {
    alert('Blogai įvestas numeris');
    return false;
  }
  alert('Duomenys įvesti');
  var contactForm = document.getElementById('contactform');
  contactForm.reset();
}
