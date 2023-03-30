//Форма поиска//
$(document).ready(function () {
	var searchBlock = $('#form');
	$(document).on('click', '#open', function () {
		searchBlock.slideToggle();
		return false;
	});
});
//доп меню
$(document).ready(function(){
	$('#navigation li').hover(function () {
	   clearTimeout($.data(this,'timer'));
	   $('ol',this).stop(true,true).slideDown(400);
	}, function () {
	  $.data(this,'timer', setTimeout($.proxy(function() {
		$('ol',this).stop(true,true).slideUp(400);
	  }, this), 100));
	});
  });
// $(function () {
// 	$('#navigation li').hover(function () {
// 		$(this).children('ol').stop(false, true).fadeIn(800);
// 	}, function () {
// 		$(this).children('ol').stop(false, true).fadeOut(800);
// 	});
// });

//меню навигации
$(function () {
	var pull = $('#pull');
	menu = $('nav ul');
	menuHeight = menu.height();
	$(pull).on('click', function (e) {
		e.preventDefault();
		menu.slideToggle();
	});
});
$(window).resize(function(){
		var w = $(window).width();
		if(w > 320 && menu.is(':hidden')) {
			menu.removeAttr('style');	}
	})


	$(function() {
		$('#nav li').hover(function() {
			$(this).children('ul').stop(false, true).fadeIn(800);
		}, function() {
			$(this).children('ul').stop(false, true).fadeOut(800);
		});
	});
	
	const myModal = new HystModal({
		linkAttributeName: "data-hystmodal",
		backscroll: true,
		closeOnOverlay: true,
		waitTransitions: true,
	});