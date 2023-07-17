document.addEventListener('DOMContentLoaded', () => {

const obj = {}
const prop = obj?.prop


let headerBtn = document.querySelectorAll('.header__btn');
let search = document.querySelector('.header__btn-search');
let form = document.querySelector('.header__form');
let close = document.querySelector('.header__btn-close');

search.addEventListener('click',

    function() {

        search.classList.toggle('header__btn--active');

        close.classList.remove('header__btn--hidden');

        close.disabled = false;

        form.classList.remove('header__form--hidden');
    })

close.addEventListener('click',

    function() {
        close.classList.toggle('header__btn--hidden');

        close.disabled = true;

        form.classList.toggle('header__form--hidden');

        search.classList.remove('header__btn--active');
    })

// map

function showMap() {
  const mapWrap = document.querySelector('.contacts__left');
  if (mapWrap.getBoundingClientRect().top - document.documentElement.clientHeight < 0) {
    ymaps.ready(init);
    this.removeEventListener('scroll', showMap);
  }
}
window.addEventListener('scroll', showMap);
function init() {
  // Создание карты.
  const myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.76963601332982, 37.63668850000002],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 17
  });

  // Создание геообъекта с типом точка (метка).
  const myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [55.76963601332982, 37.63668850000002] // координаты точки
    }
  });

  const myPlacemark = new ymaps.Placemark([55.76963601332982, 37.63668850000002], {
    hintContent: 'Шоурум №4, Леонтьевский переулок, дом 5, строение 1'
  },
    {
      iconLayout: 'default#image',
      iconImageHref: 'images/sprite.svg#map',
      iconImageSize: [12, 12],
      balloonImageSize: [0, 0],
    });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
}

const contactsMap = document.querySelector('.map');
const contactsDesc = document.querySelector('.contacts__desc');
const contactsClose = document.querySelector('.contacts__close');

contactsMap.addEventListener('click', () => {
  if (contactsDesc.classList.contains('contacts__desc_active')) {
    contactsDesc.classList.remove('contacts__desc_active');
  }
  else {
    contactsDesc.classList.add('contacts__desc_active');
    contactsDesc.style.display = 'block';
  }
});

contactsClose.addEventListener('click', () => {
  contactsDesc.classList.remove('contacts__desc_active');
});

setTransitionendListenter(contactsDesc, 'contacts__desc_active', 'block');

function setTransitionendListenter(elem, elemClass, displayProp) {
  elem.addEventListener("transitionend", () => {
    if (!elem.classList.contains(elemClass)) {
      elem.removeAttribute('style');
    }
    else {
      elem.style.display = displayProp;
    }
  });
}

// инпут

  //форма о студии

  const aboutform = document.querySelector('.about__form-middle');
  const aboutInp = aboutform.querySelector('.about__form-style');
  const aboutField = aboutform.querySelector('.about__field');

  const checkInpVal = function (e) {

    e.preventDefault();
    if (
      !aboutInp.value.includes('@') &&
      aboutInp.value !== ''
    ) {
      aboutInp.classList.add('about__field');
      aboutField.classList.add('about__field_active');
      aboutField.style.display = "block";
    }
    else if (
      aboutInp.value.includes('@') ||
      aboutInp.value === ''
    ) {
      aboutInp.classList.remove('about__field');
      aboutField.classList.remove('about__field_active');
    }

  };

  setTransitionendListenter(aboutField, 'about__field_active', 'block');

  aboutform.addEventListener('submit', checkInpVal);
})




let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let burgerTel = document.querySelector('.header__tel');
let burgersvg = document.querySelector('.burger__svg');
let menuLinks = menu.querySelectorAll('.header__item');

burger.addEventListener('click',

    function () {

        burger.classList.toggle('burger--active');

        menu.classList.toggle('header__nav--active');

        burgerTel.classList.toggle('header__tel', 'block');
        burgerTel.textContent = '+7 (495) 42-423-532';

        burgersvg.classList.toggle('burger__svg', 'block');

        document.body.classList.toggle('stop-scroll');

    })

menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {

        burger.classList.remove('burger--active');

        menu.classList.remove('header__nav--active');

        burgerTel.classList.remove('header__tel')

        document.body.classList.remove('stop-scroll');
    })
})
