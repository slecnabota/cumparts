const swiper = new Swiper('.swiper-banners', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    autoplay: {
        //Пауза между прокруткой
        delay: 3000,
        //Закончить на последнем слайде
        stopOnLastSlide: false,
        //Отключение после ручного переключения
        disableOnInteraction: false,
    },
  });
const swiper2 = new Swiper('.swiper-brands', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // // Количество слайдов для показа
    slidesPerView: 5, 

    spaceBetween: 20,
    autoplay: {
      //Пауза между прокруткой
      delay: 2500,
      //Закончить на последнем слайде
      stopOnLastSlide: false,
      //Отключение после ручного переключения
      disableOnInteraction: false,
  },
    
    // // Количество пролистываемых слайдов
    slidesPerGroup: 1,
    breakpoints: {
      320:{
        slidesPerView: 2,
        spaceBetween: 10
      },
      375: {
        slidesPerView: 2.5,
        spaceBetween: 10
      },
      475:{
        slidesPerView: 2,
        spaceBetween: 10
      },
      575:{
        slidesPerView: 2.5,
        spaceBetween: 10
      },
      778:{
        slidesPerView: 3, 
        spaceBetween: 20,
      },
      992:{
        slidesPerView: 4, 
        spaceBetween: 20,
      },
      1160:{
        slidesPerView: 5, 
        spaceBetween: 20,
      },
    }
  });