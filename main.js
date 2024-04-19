import './scss/style.scss'

import initSlider from './sliderTools'

import Swiper from 'swiper';
import 'swiper/css';

import hideLoader from './hideLoader'

import { Navigation } from 'swiper/modules';


try {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    slidesPerView: "auto",
    slidesPerGroup: 1,
    centeredSlides: true,
    spaceBetween: 24,
    // loop: true,
    observer: true,
    navigation: {
      nextEl: '.clients_nav_next',
      prevEl: '.clients_nav_prev',
    },
  });
  initSlider();
} catch (error) {

}


window.onload = function () {
  setTimeout(() => {
    hideLoader()
  }, 500);
};
setTimeout(() => {
  hideLoader()
}, 3000);


