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
