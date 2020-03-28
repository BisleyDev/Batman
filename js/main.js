$(document).ready(function () {
   let tabsItem = $('.tabs-item');          
   
   tabsItem.on('click', function (even) {
      event.preventDefault();               //Отключаем все якоря #
      let activeContent = $(this).attr('href');
      $('.visible').toggleClass('visible');
      $(activeContent).toggleClass('visible');
      $('.tabs-item-active').toggleClass('tabs-item-active');
      $(this).toggleClass('tabs-item-active');
      console.log();    
   });
});



/* console.log($(this).attr('href'));    //Проверка атрибута (в даном случаи href)
 */