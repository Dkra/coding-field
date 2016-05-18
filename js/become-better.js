var RamdomImage = (function() {

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
					var $startEl, $endEl, tempText;

					$elems[index].style.visibility = 'visible';
					// touch
					$elems[index].addEventListener("touchstart", function() {
						$startEl = this;
					});

					$elems[index].addEventListener("touchend", function(event) {
						event.preventDefault();
				    event.stopPropagation();

						var changedTouch = event.changedTouches[0];
						$endEl = document.elementFromPoint(changedTouch.clientX, changedTouch.clientY);

						tempText = $endEl.innerHTML;
						$endEl.innerHTML = $startEl.innerHTML;
						$startEl.innerHTML = tempText;
					});

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
