$('.view-more__lable').click(function (e) { 
  e.preventDefault();
  $('#view-more').removeClass('hidden');
  $(this).addClass('hidden');
});;

$('.doc').hover(function () {
    $(this).find('.content-img').css('opacity', '0.7');
    $(this).find('.link').css('opacity', '1');
    
  }, function () {
    $(this).find('.content-img').css('opacity', '1');
    $(this).find('.link').css('opacity', '0');
  }
);

$('.doc').click(function (e) { 
  e.preventDefault();
  $('.modal-window').removeClass('hidden');
  let setImg = e.target.attributes.src.nodeValue +'';
  let setText = $(this).find('.content-img').attr('alt');
  $('.header__photo-description').text(setText);
  $('.modal-window').find('.modal__image').attr('src', setImg);
});

$('.container__close').click(function(e) {
  e.preventDefault();
  $('.modal-window').addClass('hidden');
})

$('.container-footer__input').keypress(function (e) { 
  if(e.which === 13){
    let li = document.createElement('li');
    $(li).addClass('container-list__item')
      .text($(this).val());
    $('.container__list').append(li);
  }
});