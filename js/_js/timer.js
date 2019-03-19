// $(document).ready(function () {

// 	$(function () {
// 		/* Таймер */
// 		var clock;
// 		var futureDate = new Date("March 1, 2019 00:00 AM UTC+3");
// 		var currentDate = new Date();
// 		var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

// 		function dayDiff(first, second) {
// 			return (second - first) / (1000 * 60 * 60 * 24);
// 		}
// 		if (dayDiff(currentDate, futureDate) < 100) {
// 			$('.clock').addClass('twoDayDigits');
// 		} else {
// 			$('.clock').addClass('threeDayDigits');
// 		}
// 		if (diff < 0) {
// 			diff = 0;
// 			$('.clock-stop').addClass("alert-danger");
// 			$('.clock-stop').html("Скидка уменьшилась!");
// 			$('#sale_1').text('1 500р.');
// 			$('#sale_2').text('3 000р.');
// 			$('#sale_3').text('4 500р.');
// 			$('#today_1').text('10 400р.');
// 			$('#today_2').text('20 900р.');
// 			$('#today_3').text('101 400р.');
// 			$('#link_1').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=2943&clean=true&lg=ru');
// 			$('#link_2').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=2947&clean=true&lg=ru');
// 			$('#link_3').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=2951&clean=true&lg=ru');
// 			$('#prepayment_bonus').text('900р.');
// 			$('#prepayment_credited').text('2 800р.');
// 			$('#prepayment_link').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=2958&clean=true&lg=ru');
// 		}
// 		clock = $('.clock').FlipClock(diff, {
// 			clockFace: 'HourlyCounter',
// 			countdown: true,
// 			language: 'ru',
// 			callbacks: {
// 				stop: function () {
// 					$('.clock-stop').addClass("alert-danger");
// 					$('.clock-stop').html("Скидка уменьшилась!");
// 					$('#sale_1').text('1 500р.');
// 					$('#sale_2').text('3 000р.');
// 					$('#sale_3').text('4 500р.');
// 					$('#today_1').text('10 400р.');
// 					$('#today_2').text('20 900р.');
// 					$('#today_3').text('101 400р.');
// 					$('#link_1').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=2943&clean=true&lg=ru');
// 					$('#link_2').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=2947&clean=true&lg=ru');
// 					$('#link_3').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=2951&clean=true&lg=ru');
// 					$('#prepayment_bonus').text('900р.');
// 					$('#prepayment_credited').text('2 800р.');
// 					$('#prepayment_link').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=2958&clean=true&lg=ru');
// 				}
// 			},
// 		});
// 	});
// });