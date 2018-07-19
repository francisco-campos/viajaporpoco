
window.onscroll = function(e) {
  var cur_top = $(window).scrollTop();
  if(cur_top > 100)
  {
    this.console.log('mayor a 100')
    $('.navbar.navbar-dark').attr('style','background-color:#03a9f4 !important')
  }
  else {
    $('.navbar.navbar-dark').attr('style','background-color:transparent !important')
  }
}