import Swiper from 'swiper'
import animate from './animate';
import notify from './lib/bootstrap-notify';


$(document).ready(function() {

// notify
$('.btn--cart').click(function() {
  const productName = $(this).data('product')
  // const productName = 'Гидрогелевые патчи для кожи вокруг глаз'
  $.notify({
    title: 'В корзину добавлен:',
    message: productName
  },{
    type: 'minimalist',
    delay: 2000,
    z_index: 11111031,
    placement: {
      from: "top",
      align: "right"
    },
  	animate: {
      enter: 'animated fadeInDown',
      exit: 'animated fadeOutUp'
    },
    template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert-{0}" role="success">' +
      '<span data-notify="title">{1}</span>' +
      '<span data-notify="product">{2}</span>' +
    '</div>'
  });
})

$('body').addClass('ready')

// product-card slider
if($('.swiper-card').length) {
  const slider = new Swiper('.swiper-card', {
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 20,
    scrollbar: {
      el: '.swiper-scrollbar',
      clickable: true,
    },
  });
}

const swiper = new Swiper('.main-visagiste-stories-list-scrollbar', {
  slidesPerView: 3,
  spaceBetween: 60,
  scrollbar: {
    el: '.swiper-scrollbar',
    clickable: true,
  },
  breakpoints: {
    1260: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
    600: {
      slidesPerView: 5,
      spaceBetween: 75,
    }
  }
});

// anchor links
$('.main-hero-nav-list a[href^="#"]').on('click', function(event, history) {
  const hash = `#${  $(this).attr('href').split('#')[1]}`
  const $element = $(hash)
  if ($element.length) {
    event.preventDefault();
    window.history.pushState(hash, undefined, hash)
    $('html, body').animate({scrollTop: $element.offset().top}, 700)
  }
});   


// main-page nav toggle
if($('.main-product-nav-list').length) {
  $('.main-product-nav-list-category').on('click', function(e) {
    e.preventDefault()
    if(!$(this).hasClass('open')) {
      $('.main-product-nav-list-category').removeClass('open')
      $(this).addClass('open') 
      $(this).find('.main-product-nav-list-category-droplist li:first-child a').addClass('active')
      $('.main-product-nav-list').addClass('menuUse')
    }
  })
  $('.main-product-nav-list-category-droplist a').on('click', function(e) {
    e.preventDefault()
    if(!$(this).hasClass('active')) {
      $('.main-product-nav-list-category-droplist a').removeClass('active')
      $(this).addClass('active') 
    }
  })
  $('.main-product-nav-list-cancel').on('click', function(e) {
    e.preventDefault()
    $('.main-product-nav-list').removeClass('menuUse')
    $('.main-product-nav-list-category').removeClass('open')
    $('.main-product-nav-list-category-droplist a').removeClass('active')
  })
}

// main-page nav toggle
if($('.main-bundle-nav-list').length) {
  $('.main-bundle-nav-list-item').on('click', function(e) {
      e.preventDefault();
      if(!$(this).hasClass('active')) {
          $('.main-bundle-nav-list-item').removeClass('active')
          $(this).addClass('active')
      }
  })
}

// video
if($('.video-block').length) {

  $('.video-block').each(function() {

    const video = $(this).find('.video-play');
    const $playButton = $(this);
  
    const muteButton = $(this).find('.mute-video');


    muteButton.click(function() {
      if(video[0].muted === true) {
        video[0].muted = false;
        muteButton.addClass('muted')
      } else {
        video[0].muted = true;
        muteButton.removeClass('muted')
      }
    });
    
    video.on('ended',function(){
          video[0].pause();
          $playButton.removeClass('active')
    });


    video.click(function() {
      if(this.paused === true) {
        this.play();
        $playButton.addClass('active')
      } else {
        this.pause();
        $playButton.removeClass('active')
      }


    });
    
  })
  

  // const video = document.getElementsByClassName('video-play');
  // const playButton = document.getElementsByClassName('video-block');

  // const muteButton = document.getElementsByClassName('mute-video');
  // muteButton.addEventListener('click', function() {
  //   if(video.muted === false) {
  //     video.muted = true;
  //     this.className += " muted";
  //   } else {
  //     video.muted = false;
      
  //     this.classList.remove("muted");
  //   }
  // });

  // video.addEventListener("timeupdate", function(){
  //   if(this.currentTime >= this.duration) {
  //       this.pause();
  //       playButton.classList.remove("active");
  //   }
  // });
  // video.addEventListener('click', function() {
  //   if(video.paused === true) {
  //     video.play();
  //     playButton.className += " active";
  //   } else {
  //     video.pause();
  //     playButton.classList.remove("active");
  //   }
  // });
  // if (window.innerWidth <= 767) {
  //   video.controls = true;
  // }
}


if (document.referrer === "https://art.mixit.ru/") {

    $("a.header-back").click(function(event) {
      event.preventDefault();
      window.history.back();
    });
    
    console.log(document.referrer)
} else {
  console.log('link')
}

// tabs
if($('.tabs-list').length) {
  $('.tabs-list .tabs-list-head__item').on('click', function(e) {
    e.preventDefault()
    const tabItem = $(this).index();
    const parent  = $(this).closest('.tabs-list')
    const tabLink = $(this).attr('href').replace("#", "")
    if(!$(this).hasClass('active')) {
      parent.find('.tabs-list-body__item').hide().removeClass('active')

      $(`#${tabLink}`).fadeIn(100, function() {
        $(`#${tabLink}`).addClass('active');
      });
      parent.find('.tabs-list-head__item').removeClass('active')
      $(this).addClass('active')
    }
  });
}


// start functions
animate()

});



// October 2019
// yarovoy.studio 