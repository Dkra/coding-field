var RamdomImage = (function() {

	function magicHouse($el) {
		var $startEl, $endEl, tempText;

		// Event: Drag
		$el.draggable = true;

		$el.addEventListener("dragend", function(event) {
			event.preventDefault();
			event.stopPropagation();

			console.log(event);
			console.log(event.clientX, event.clientY);
			$startEl = event.target;
			$endEl = document.elementFromPoint(event.clientX+25, event.clientY-25);
			console.log($endEl);

			tempText = $endEl.innerHTML;
			$endEl.innerHTML = $startEl.innerHTML;
			$startEl.innerHTML = tempText;

		})

		// Event: Touch
		// $el.addEventListener("touchstart", function() {
		// 	$startEl = this;
		// });

		$el.addEventListener("touchend", function(event) {
			event.preventDefault();
			event.stopPropagation();
			var changedTouch = event.changedTouches[0];

			$startEl = event.target;
			$endEl = document.elementFromPoint(changedTouch.clientX, changedTouch.clientY);

			tempText = $endEl.innerHTML;
			$endEl.innerHTML = $startEl.innerHTML;
			$startEl.innerHTML = tempText;
		});

	}


	function start () {
		var $elems = Array.from(document.querySelectorAll('.item')),
				$images = ['鼠','牛','虎','兔','龍','蛇','馬','羊', '猴','雞','狗','豬'],
				elemIndex = [], imgIndex = [],
				posRandom, imgRandom, targetIndex;

		for( var i = 0; i < $elems.length; i++ ) {
			elemIndex[i] = i;
			imgIndex[i] = i;
		}

		// start
		for( var i = 0; i < $elems.length; i++ ) {

				posRandom = Math.floor(Math.random()*elemIndex.length);
				imgRandom = Math.floor(Math.random()*imgIndex.length);
				targetIndex = elemIndex[posRandom];

				$elems[elemIndex[posRandom]].innerHTML = $images[imgIndex[imgRandom]];

				setTimeout(function(index) {

					$elems[index].style.visibility = 'visible';
					magicHouse($elems[index]);


				}.bind(null, targetIndex), 200*i);

				elemIndex.splice(posRandom, 1);
				imgIndex.splice(imgRandom, 1);

		}

	}

	return {
		start: start
	}

})();


RamdomImage.start();
