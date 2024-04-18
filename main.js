import './scss/style.scss'

import initSlider from './sliderTools'

import Swiper from 'swiper';
import 'swiper/css';

// import 'swiper/scss/navigation';
// import 'swiper/scss/autoplay';

// import { Navigation, Autoplay } from 'swiper/modules';


const swiper = new Swiper('.swiper', {
  slidesPerView: "auto",
  slidesPerGroup: 1,
  centeredSlides: true,
  spaceBetween: 24,
  // loop: true,
  observer: true
});

initSlider();
