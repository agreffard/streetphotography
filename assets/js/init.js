(function($) {

// for %A in (*.*) do @echo '%A',
	const imgs = [
        //'tandem.jpg',
        //'trump.jpg',
        //'vin.jpg',
		'doggybag.jpg',
		'greenwalk.jpg',
        'kissart.jpg',
		'bucket.jpg',
        'space.jpg',
		'ontheotherside.jpg',
		'love.jpg',
		'nap.jpg',
        'nuitblanche.jpg',
		'tiles.jpg',
		'ghosts.jpg',
	    'businessshadow.jpg',
        'climat.jpg',
        'giletjaune.jpg',
        //'kidsclimat.jpg',
		//'50shades.jpg',
		'bbz.jpg',
		//'biker.jpg',
		'viagra.jpg',
		'lovely.jpg',
		'ready.jpg',
		'reflection.jpg',
		//'blue.jpg',
		//'blues.jpg',
		//'break.jpg',
		'shaded.jpg',
		'burger.jpg',
		//'chess.jpg',
		'jesus.jpg',
		//'clock.jpg',
		'waitlove.jpg',
		//'cops.jpg',
		'heart.jpg',
		'hidden.jpg',
		'fuckguns.jpg',
		//'cowboy.jpg',
		//'cuty.jpg',
		'hunter.jpg',
		'winterstreet.jpg',
		'lifeexpectations.jpg',
		'3shadows.jpg',
		//'defense.jpg',
		//'dinosaur.jpg',
		//'donot.jpg',
		//'doublereflection.jpg',
		//'doubleshadows.jpg',
		'down.jpg',
		//'entertainer.jpg',
		//'farmer.jpg',
		//'fight.jpg',
		//'film.jpg',
		'flags.jpg',
		//'florida.jpg',
		'ohmygirl.jpg',
		'fresh.jpg',
		//'freshh.jpg',
		'monster.jpg',
		//'fun.jpg',
		'ghost.jpg',
		//'ghosts2.jpg',
		//'great.jpg',
		//'green.jpg',
		'happiness.jpg',
		//'hiding.jpg',
		'hipsters.jpg',
		'crosswalk.jpg',
		//'hop.jpg',
		'hugs.jpg',
		'dark.jpg',
		//'jewdog.jpg',
		//'juggling.jpg',
		'ladder.jpg',
		//'lake.jpg',
		//'loveday.jpg',
		'lovelive.jpg',
		'rainnn.jpg',
		//'magical.jpg',
		//'market.jpg',
		//'missed.jpg',
		'moustache.jpg',
		//'opera.jpg',
		'paf.jpg',
		//'piano.jpg',
		//'pink.jpg',
		//'plants.jpg',
		//'poetry.jpg',
		//'poets.jpg',
		'pray.jpg',
		//'present.jpg',
		'art.jpg',
		'christmasjob.jpg',
		//'profile.jpg',
		'bushwick.jpg',
		'racing.jpg',
		'rain.jpg',
		//'rainyhome.jpg',
		'wrong.jpg',
		'rider.jpg',
		'rope.jpg',
		//'run.jpg',
		'sale.jpg',
		//'shadow.jpg',
		//'shadows.jpg',
		'skate.jpg',
		'skateman.jpg',
		//'spiritual.jpg',
		//'style.jpg',
		//'subway.jpg',
		//'super.jpg',
		'suspension.jpg',
		//'throwback.jpg',
		'trump2020.jpg',
		'turists.jpg',
		//'umbrellas.jpg',
		//'upsidedown.jpg',
		//'wadafuq.jpg',
		//'wait.jpg',
		'warrior.jpg',
		'wedding.jpg',
		'weirdo.jpg',
		'whale.jpg',
		'winter.jpg',
		'woody.jpg',
		//'workers.jpg',
		//'youth.jpg',
		//'zen.jpg',
		'mimetism.jpg',
		'saxo.jpg',
		'headless.jpg',
	];

	imgs.forEach(image => {
		const article = `<article class="thumb"><a href="images/full/${image}" class="image"><img src="images/thumbs/${image}" alt="" /></a></article>`;
		$("#main").append(article);
	});

})(jQuery);
