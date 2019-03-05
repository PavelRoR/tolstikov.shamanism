$(function () {
    /* Таймер */
    var clock;
    var futureDate = new Date("February 1, 2019 00:00 AM UTC+3");
    var currentDate = new Date();
    var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

    function dayDiff(first, second) {
    	return (second - first) / (1000 * 60 * 60 * 24);
    }
    if (dayDiff(currentDate, futureDate) < 100) {
    	$('.clock').addClass('twoDayDigits');
    } else {
    	$('.clock').addClass('threeDayDigits');
    }
    if (diff < 0) {
    	diff = 0;
    	$('.clock-stop').addClass("alert-danger");
    	$('.clock-stop').html("Скидка уменьшилась!");
    	// $('#link_1').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=2589&clean=true&lg=ru');
    	// $('#link_2').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=2592&clean=true&lg=ru');
    	// $('.cost_full span').addClass('no_line');
    	// $('.cost_sale, .cost_today, .prepayment').remove();
    	// $('#sale_1').text('500р.');
    	// $('#sale_2').text('1 000р.');
    	// $('#today_1').text('5 400р.');
    	// $('#today_2').text('12 900р.');
    	// $('#prepayment_bonus').text('400р.');
    	// $('#prepayment_credited').text('1 400р.');
    	// $('#prepayment_link').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=2595&clean=true&lg=ru ');
    }
    clock = $('.clock').FlipClock(diff, {
    	clockFace: 'HourlyCounter',
    	countdown: true,
    	language: 'ru',
    	callbacks: {
    		stop: function () {
    			$('.clock-stop').addClass("alert-danger");
    			$('.clock-stop').html("Скидка уменьшилась!");
    			// $('#link_1').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=2589&clean=true&lg=ru');
    			// $('#link_2').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=2592&clean=true&lg=ru');
    			// $('.cost_full span').addClass('no_line');
    			// $('.cost_sale, .cost_today, .prepayment').remove();
    			// $('#sale_1').text('500р.');
    			// $('#sale_2').text('1 000р.');
    			// $('#today_1').text('5 400р.');
    			// $('#today_2').text('12 900р.');
    			// $('#prepayment_bonus').text('400р.');
    			// $('#prepayment_credited').text('1 400р.');
    			// $('#prepayment_link').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=2595&clean=true&lg=ru ');
    		}
    	},
    });
});