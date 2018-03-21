$(function(){
 //Hide stuff

  $('#getStarted').hide();

  //alert("hello");
  $('#title').on('mouseover',function(){
      $('.fa-arrow-alt-circle-left').toggleClass('fa-arrow-alt-circle-right');
      $('#getStarted').show();
    });
  $('#title').on('mouseleave',function(){
      $('.fa-arrow-alt-circle-left').toggleClass('fa-arrow-alt-circle-right');

    });

    $('#next').on('click',function(){

      var currentItem = $('li.active');
      var nextItem = $('li.active').next();

      currentItem.toggleClass('active');
      nextItem.toggleClass('active');

    });
});
