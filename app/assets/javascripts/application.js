//= require rails-ujs
//= require activestorage
//= require jquery
//= require jquery_ujs
//= require popper
//= require bootstrap
//= require aos.js
//= require clipboard.js
//= require jquery.fancybox.min.js
//= require flickity.pkgd.min.js
//= require ion.rangeSlider.min.js
//= require isotope.pkgd.min.js
//= require jarallax.min.js
//= require jarallax-video.min.js
//= require jarallax-element.min.js
//= require jquery.countdown.min.js
//= require plyr.polyfilled.min.js
//= require prism.js
//= require scrollMonitor.js
//= require smooth-scroll.polyfills.min.js
//= require twitterFetcher_min.js
//= require typed.min.js
//= require theme.js
//= require_self


$('[name="cod"]').on('change', function() {
  $('#select').toggle(this.checked);
}).change();



function replace() { 
document.getElementById("div1").style.display="none"; 
document.getElementById("div2").style.display="block"; 
}   

$(document).ready(function(){
  $("#link1").click(function(){
     $('#content1').fadeIn('fast');
     $('#content2').fadeOut('fast');
  });
  $("#link2").click(function(){
     $('#content1').fadeOut('fast');
     $('#content2').fadeIn('fast');
  });
  $("#link3").click(function(){
     $('#content2').fadeOut('fast');
     $('#content3').fadeIn('fast');
  });
});   


$(window).on('load', function () {

  $('body').addClass('loaded')

  if ($('.control_isotope').length > 0) {
    // fire only if .perks_page class present
    // console.log('asdasd')
    // make filter by Branding ('Just for you' button in our case)
    // you can change this default to * or Digital
    var defaultFilterName = 'Branding'

    $('div[data-isotope-id="projects"]').isotope(
      {
        filter: '[data-category="' + defaultFilterName + '"]'
      }
    )

    // add class to make button gray, we can add this in html but i preffer move here to have possibility cahnge in onle place
    $('[data-isotope-id="projects"] li a[data-filter="' + defaultFilterName + '"]').addClass('active')

    $('[data-isotope-id="projects"] li a').each(function () {
      $(this).on('click touch touchstart', function () {
        $('[data-isotope-id="projects"] li a').removeClass('active')
        $(this).addClass('active')

        var filter_selector = $(this).attr('data-filter')
        if (filter_selector != '*') {
          filter_selector = '[data-category="' + filter_selector + '"]'
        }
        $('div[data-isotope-id="projects"]').isotope(
          {
            filter: filter_selector
          }
        )
      })
    })
  }
});

$(function(){
  var hash = window.location.hash;
  hash && $('ul.nav a[href="' + hash + '"]').tab('show');

  $('.nav-pills a').click(function (e) {
    $(this).tab('show');
    var scrollmem = $('body').scrollTop() || $('html').scrollTop();
    window.location.hash = this.hash;
    $('html,body').scrollTop(scrollmem);
  });
});


  