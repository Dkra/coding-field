(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var RamdomImage = function () {

	function magicHouse($el) {
		var $startEl, $endEl, tempText;

		// Event: Drag
		$el.draggable = true;

		$el.addEventListener("dragend", function (event) {
			event.preventDefault();
			event.stopPropagation();

			console.log(event);
			console.log(event.clientX, event.clientY);
			$startEl = event.target;
			$endEl = document.elementFromPoint(event.clientX + 25, event.clientY - 25);
			console.log($endEl);

			tempText = $endEl.innerHTML;
			$endEl.innerHTML = $startEl.innerHTML;
			$startEl.innerHTML = tempText;
		});

		// Event: Touch
		// $el.addEventListener("touchstart", function() {
		// 	$startEl = this;
		// });

		$el.addEventListener("touchend", function (event) {
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

	function start() {
		var $elems = Array.from(document.querySelectorAll('.item')),
		    $images = ['鼠', '牛', '虎', '兔', '龍', '蛇', '馬', '羊', '猴', '雞', '狗', '豬'],
		    elemIndex = [],
		    imgIndex = [],
		    posRandom,
		    imgRandom,
		    targetIndex;

		for (var i = 0; i < $elems.length; i++) {
			elemIndex[i] = i;
			imgIndex[i] = i;
		}

		// start
		for (var i = 0; i < $elems.length; i++) {

			posRandom = Math.floor(Math.random() * elemIndex.length);
			imgRandom = Math.floor(Math.random() * imgIndex.length);
			targetIndex = elemIndex[posRandom];

			$elems[elemIndex[posRandom]].innerHTML = $images[imgIndex[imgRandom]];

			setTimeout(function (index) {

				$elems[index].style.visibility = 'visible';
				magicHouse($elems[index]);
			}.bind(null, targetIndex), 200 * i);

			elemIndex.splice(posRandom, 1);
			imgIndex.splice(imgRandom, 1);
		}
	}

	return {
		start: start
	};
}();

RamdomImage.start();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9iZWNvbWUtYmV0dGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLGNBQWUsWUFBVzs7QUFFN0IsVUFBUyxVQUFULENBQW9CLEdBQXBCLEVBQXlCO0FBQ3hCLE1BQUksUUFBSixFQUFjLE1BQWQsRUFBc0IsUUFBdEI7OztBQUdBLE1BQUksU0FBSixHQUFnQixJQUFoQjs7QUFFQSxNQUFJLGdCQUFKLENBQXFCLFNBQXJCLEVBQWdDLFVBQVMsS0FBVCxFQUFnQjtBQUMvQyxTQUFNLGNBQU47QUFDQSxTQUFNLGVBQU47O0FBRUEsV0FBUSxHQUFSLENBQVksS0FBWjtBQUNBLFdBQVEsR0FBUixDQUFZLE1BQU0sT0FBbEIsRUFBMkIsTUFBTSxPQUFqQztBQUNBLGNBQVcsTUFBTSxNQUFqQjtBQUNBLFlBQVMsU0FBUyxnQkFBVCxDQUEwQixNQUFNLE9BQU4sR0FBYyxFQUF4QyxFQUE0QyxNQUFNLE9BQU4sR0FBYyxFQUExRCxDQUFUO0FBQ0EsV0FBUSxHQUFSLENBQVksTUFBWjs7QUFFQSxjQUFXLE9BQU8sU0FBbEI7QUFDQSxVQUFPLFNBQVAsR0FBbUIsU0FBUyxTQUE1QjtBQUNBLFlBQVMsU0FBVCxHQUFxQixRQUFyQjtBQUVBLEdBZEQ7Ozs7Ozs7QUFxQkEsTUFBSSxnQkFBSixDQUFxQixVQUFyQixFQUFpQyxVQUFTLEtBQVQsRUFBZ0I7QUFDaEQsU0FBTSxjQUFOO0FBQ0EsU0FBTSxlQUFOO0FBQ0EsT0FBSSxlQUFlLE1BQU0sY0FBTixDQUFxQixDQUFyQixDQUFuQjs7QUFFQSxjQUFXLE1BQU0sTUFBakI7QUFDQSxZQUFTLFNBQVMsZ0JBQVQsQ0FBMEIsYUFBYSxPQUF2QyxFQUFnRCxhQUFhLE9BQTdELENBQVQ7O0FBRUEsY0FBVyxPQUFPLFNBQWxCO0FBQ0EsVUFBTyxTQUFQLEdBQW1CLFNBQVMsU0FBNUI7QUFDQSxZQUFTLFNBQVQsR0FBcUIsUUFBckI7QUFDQSxHQVhEO0FBYUE7O0FBR0QsVUFBUyxLQUFULEdBQWtCO0FBQ2pCLE1BQUksU0FBUyxNQUFNLElBQU4sQ0FBVyxTQUFTLGdCQUFULENBQTBCLE9BQTFCLENBQVgsQ0FBYjtNQUNFLFVBQVUsQ0FBQyxHQUFELEVBQUssR0FBTCxFQUFTLEdBQVQsRUFBYSxHQUFiLEVBQWlCLEdBQWpCLEVBQXFCLEdBQXJCLEVBQXlCLEdBQXpCLEVBQTZCLEdBQTdCLEVBQWtDLEdBQWxDLEVBQXNDLEdBQXRDLEVBQTBDLEdBQTFDLEVBQThDLEdBQTlDLENBRFo7TUFFRSxZQUFZLEVBRmQ7TUFFa0IsV0FBVyxFQUY3QjtNQUdFLFNBSEY7TUFHYSxTQUhiO01BR3dCLFdBSHhCOztBQUtBLE9BQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxPQUFPLE1BQTNCLEVBQW1DLEdBQW5DLEVBQXlDO0FBQ3hDLGFBQVUsQ0FBVixJQUFlLENBQWY7QUFDQSxZQUFTLENBQVQsSUFBYyxDQUFkO0FBQ0E7OztBQUdELE9BQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxPQUFPLE1BQTNCLEVBQW1DLEdBQW5DLEVBQXlDOztBQUV2QyxlQUFZLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxLQUFjLFVBQVUsTUFBbkMsQ0FBWjtBQUNBLGVBQVksS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLEtBQWMsU0FBUyxNQUFsQyxDQUFaO0FBQ0EsaUJBQWMsVUFBVSxTQUFWLENBQWQ7O0FBRUEsVUFBTyxVQUFVLFNBQVYsQ0FBUCxFQUE2QixTQUE3QixHQUF5QyxRQUFRLFNBQVMsU0FBVCxDQUFSLENBQXpDOztBQUVBLGNBQVcsVUFBUyxLQUFULEVBQWdCOztBQUUxQixXQUFPLEtBQVAsRUFBYyxLQUFkLENBQW9CLFVBQXBCLEdBQWlDLFNBQWpDO0FBQ0EsZUFBVyxPQUFPLEtBQVAsQ0FBWDtBQUdBLElBTlUsQ0FNVCxJQU5TLENBTUosSUFOSSxFQU1FLFdBTkYsQ0FBWCxFQU0yQixNQUFJLENBTi9COztBQVFBLGFBQVUsTUFBVixDQUFpQixTQUFqQixFQUE0QixDQUE1QjtBQUNBLFlBQVMsTUFBVCxDQUFnQixTQUFoQixFQUEyQixDQUEzQjtBQUVEO0FBRUQ7O0FBRUQsUUFBTztBQUNOLFNBQU87QUFERCxFQUFQO0FBSUEsQ0FwRmlCLEVBQWxCOztBQXVGQSxZQUFZLEtBQVoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFJhbWRvbUltYWdlID0gKGZ1bmN0aW9uKCkge1xuXG5cdGZ1bmN0aW9uIG1hZ2ljSG91c2UoJGVsKSB7XG5cdFx0dmFyICRzdGFydEVsLCAkZW5kRWwsIHRlbXBUZXh0O1xuXG5cdFx0Ly8gRXZlbnQ6IERyYWdcblx0XHQkZWwuZHJhZ2dhYmxlID0gdHJ1ZTtcblxuXHRcdCRlbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0XHRjb25zb2xlLmxvZyhldmVudCk7XG5cdFx0XHRjb25zb2xlLmxvZyhldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcblx0XHRcdCRzdGFydEVsID0gZXZlbnQudGFyZ2V0O1xuXHRcdFx0JGVuZEVsID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChldmVudC5jbGllbnRYKzI1LCBldmVudC5jbGllbnRZLTI1KTtcblx0XHRcdGNvbnNvbGUubG9nKCRlbmRFbCk7XG5cblx0XHRcdHRlbXBUZXh0ID0gJGVuZEVsLmlubmVySFRNTDtcblx0XHRcdCRlbmRFbC5pbm5lckhUTUwgPSAkc3RhcnRFbC5pbm5lckhUTUw7XG5cdFx0XHQkc3RhcnRFbC5pbm5lckhUTUwgPSB0ZW1wVGV4dDtcblxuXHRcdH0pXG5cblx0XHQvLyBFdmVudDogVG91Y2hcblx0XHQvLyAkZWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0Ly8gXHQkc3RhcnRFbCA9IHRoaXM7XG5cdFx0Ly8gfSk7XG5cblx0XHQkZWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHR2YXIgY2hhbmdlZFRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG5cblx0XHRcdCRzdGFydEVsID0gZXZlbnQudGFyZ2V0O1xuXHRcdFx0JGVuZEVsID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChjaGFuZ2VkVG91Y2guY2xpZW50WCwgY2hhbmdlZFRvdWNoLmNsaWVudFkpO1xuXG5cdFx0XHR0ZW1wVGV4dCA9ICRlbmRFbC5pbm5lckhUTUw7XG5cdFx0XHQkZW5kRWwuaW5uZXJIVE1MID0gJHN0YXJ0RWwuaW5uZXJIVE1MO1xuXHRcdFx0JHN0YXJ0RWwuaW5uZXJIVE1MID0gdGVtcFRleHQ7XG5cdFx0fSk7XG5cblx0fVxuXG5cblx0ZnVuY3Rpb24gc3RhcnQgKCkge1xuXHRcdHZhciAkZWxlbXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtJykpLFxuXHRcdFx0XHQkaW1hZ2VzID0gWyfpvKAnLCfniZsnLCfomY4nLCflhZQnLCfpvo0nLCfom4cnLCfppqwnLCfnvoonLCAn54y0Jywn6ZueJywn54uXJywn6LGsJ10sXG5cdFx0XHRcdGVsZW1JbmRleCA9IFtdLCBpbWdJbmRleCA9IFtdLFxuXHRcdFx0XHRwb3NSYW5kb20sIGltZ1JhbmRvbSwgdGFyZ2V0SW5kZXg7XG5cblx0XHRmb3IoIHZhciBpID0gMDsgaSA8ICRlbGVtcy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdGVsZW1JbmRleFtpXSA9IGk7XG5cdFx0XHRpbWdJbmRleFtpXSA9IGk7XG5cdFx0fVxuXG5cdFx0Ly8gc3RhcnRcblx0XHRmb3IoIHZhciBpID0gMDsgaSA8ICRlbGVtcy5sZW5ndGg7IGkrKyApIHtcblxuXHRcdFx0XHRwb3NSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqZWxlbUluZGV4Lmxlbmd0aCk7XG5cdFx0XHRcdGltZ1JhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSppbWdJbmRleC5sZW5ndGgpO1xuXHRcdFx0XHR0YXJnZXRJbmRleCA9IGVsZW1JbmRleFtwb3NSYW5kb21dO1xuXG5cdFx0XHRcdCRlbGVtc1tlbGVtSW5kZXhbcG9zUmFuZG9tXV0uaW5uZXJIVE1MID0gJGltYWdlc1tpbWdJbmRleFtpbWdSYW5kb21dXTtcblxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKGluZGV4KSB7XG5cblx0XHRcdFx0XHQkZWxlbXNbaW5kZXhdLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG5cdFx0XHRcdFx0bWFnaWNIb3VzZSgkZWxlbXNbaW5kZXhdKTtcblxuXG5cdFx0XHRcdH0uYmluZChudWxsLCB0YXJnZXRJbmRleCksIDIwMCppKTtcblxuXHRcdFx0XHRlbGVtSW5kZXguc3BsaWNlKHBvc1JhbmRvbSwgMSk7XG5cdFx0XHRcdGltZ0luZGV4LnNwbGljZShpbWdSYW5kb20sIDEpO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHN0YXJ0OiBzdGFydFxuXHR9XG5cbn0pKCk7XG5cblxuUmFtZG9tSW1hZ2Uuc3RhcnQoKTtcbiJdfQ==
