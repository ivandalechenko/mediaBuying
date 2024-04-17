import './style.scss'


import Swiper from 'swiper';
import 'swiper/css';
// import 'swiper/scss/navigation';
// import 'swiper/scss/autoplay';

// import { Navigation, Autoplay } from 'swiper/modules';

setTimeout(() => {
    const swiper = new Swiper('.swiper', {
        slidesPerView: "auto",
        slidesPerGroup: 1,
        centeredSlides: true,
        spaceBetween: 24,
        loop: true,
    });
}, 500);

// const clients = 

const addSlide = (slide) => {
    const sourceInnerHTML = document.getElementById('clientSlider').innerHTML;
    const newInnerHTML = sourceInnerHTML + `
    <div class="clients_slide_wrapper swiper-slide">
    <div class="clients_slide">
      <div class="clients_slide_header" style="background:${slide.bg};">
        <img src="/img/cases/${slide.img}.png" alt="">
        ${slide.name}
      </div>
      <div class="clients_slide_info">
        <div class="clients_slide_info_header">
          Tools used:
        </div>
        <div class="clients_slide_info_text">
          ${slide.tools}
        </div>
      </div>
      <div class="clients_slide_info">
        <div class="clients_slide_info_header">
          Goal:
        </div>
        <div class="clients_slide_info_text">
          ${slide.goal}
        </div>
      </div>
      <div class="clients_slide_info">
        <div class="clients_slide_info_header">
          Period
        </div>
        <div class="clients_slide_info_text">
          ${slide.period}
        </div>
      </div>
      <div class="clients_slide_info">
        <div class="clients_slide_info_header clients_slide_info_header_results">
          Results
        </div>
        <div class="clients_slide_info_text">
          ${slide.result}
        </div>
      </div>
    </div>
  </div>
    `;
    document.getElementById('clientSlider').innerHTML = newInnerHTML;
}