import clients from './clients'
const addSlide = (slide) => {
  const sourceInnerHTML = document.getElementById('clientSlider').innerHTML;
  const newInnerHTML = sourceInnerHTML + `
      <div class="clients_slide_wrapper swiper-slide">
      <div class="clients_slide">
        <div class="clients_slide_header" style="background:${slide.bg};">
          <img src="/img/cases/${slide.img}" class="clients_slide_header_img" alt="">
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
const initSlider = () => {
  for (const client of clients) {
    addSlide(client)
  }
  const allCats = clients.map(client => client.cat);
  const uniqueCats = allCats.filter((cat, index, self) => self.indexOf(cat) === index);

  let controlsInner = `<div class="clients_controls_element clients_controls_element_selected">All</div>`;
  for (const uniqueCat of uniqueCats) {
    controlsInner = controlsInner + `<div class="clients_controls_element ">${uniqueCat}</div>`;
  }
  document.getElementById('clientContolList').innerHTML = controlsInner;
  setTimeout(() => {
    const conrolElements = document.getElementsByClassName('clients_controls_element');
    for (let i = 0; i < conrolElements.length; i++) {
      conrolElements[i].onclick = () => {
        for (let j = 0; j < conrolElements.length; j++) {
          conrolElements[j].classList.remove('clients_controls_element_selected')
        }
        conrolElements[i].classList.add('clients_controls_element_selected')
        selectCategory(conrolElements[i].innerHTML)
      }
    }
  }, 100);
}

const selectCategory = (cat) => {
  document.getElementById('clientSliderWrapper').style.transition = "200ms opacity";
  document.getElementById('clientSliderWrapper').style.opacity = 0;
  setTimeout(() => {
    document.getElementById('clientSlider').innerHTML = '';
    if (cat == 'All') {
      for (const client of clients) {
        addSlide(client)
      }
    } else {
      const sortedArray = clients.filter(client => client.cat === cat);
      for (const client of sortedArray) {
        addSlide(client)
      }
    }
    document.getElementById('clientSliderWrapper').style.opacity = 1;
  }, 200);
}


export default initSlider()