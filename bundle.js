(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var RamdomImage = function () {

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
				var $startEl, $endEl, tempText;

				$elems[index].style.visibility = 'visible';
				// touch
				$elems[index].addEventListener("touchstart", function () {
					$startEl = this;
				});

				$elems[index].addEventListener("touchend", function (event) {
					event.preventDefault();
					event.stopPropagation();

					var changedTouch = event.changedTouches[0];
					$endEl = document.elementFromPoint(changedTouch.clientX, changedTouch.clientY);

					tempText = $endEl.innerHTML;
					$endEl.innerHTML = $startEl.innerHTML;
					$startEl.innerHTML = tempText;
				});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9iZWNvbWUtYmV0dGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLGNBQWUsWUFBVzs7QUFFN0IsVUFBUyxLQUFULEdBQWtCO0FBQ2pCLE1BQUksU0FBUyxNQUFNLElBQU4sQ0FBVyxTQUFTLGdCQUFULENBQTBCLE9BQTFCLENBQVgsQ0FBYjtNQUNFLFVBQVUsQ0FBQyxHQUFELEVBQUssR0FBTCxFQUFTLEdBQVQsRUFBYSxHQUFiLEVBQWlCLEdBQWpCLEVBQXFCLEdBQXJCLEVBQXlCLEdBQXpCLEVBQTZCLEdBQTdCLEVBQWtDLEdBQWxDLEVBQXNDLEdBQXRDLEVBQTBDLEdBQTFDLEVBQThDLEdBQTlDLENBRFo7TUFFRSxZQUFZLEVBRmQ7TUFFa0IsV0FBVyxFQUY3QjtNQUdFLFNBSEY7TUFHYSxTQUhiO01BR3dCLFdBSHhCOztBQUtBLE9BQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxPQUFPLE1BQTNCLEVBQW1DLEdBQW5DLEVBQXlDO0FBQ3hDLGFBQVUsQ0FBVixJQUFlLENBQWY7QUFDQSxZQUFTLENBQVQsSUFBYyxDQUFkO0FBQ0E7OztBQUdELE9BQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxPQUFPLE1BQTNCLEVBQW1DLEdBQW5DLEVBQXlDOztBQUV2QyxlQUFZLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxLQUFjLFVBQVUsTUFBbkMsQ0FBWjtBQUNBLGVBQVksS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLEtBQWMsU0FBUyxNQUFsQyxDQUFaO0FBQ0EsaUJBQWMsVUFBVSxTQUFWLENBQWQ7O0FBRUEsVUFBTyxVQUFVLFNBQVYsQ0FBUCxFQUE2QixTQUE3QixHQUF5QyxRQUFRLFNBQVMsU0FBVCxDQUFSLENBQXpDOztBQUVBLGNBQVcsVUFBUyxLQUFULEVBQWdCO0FBQzFCLFFBQUksUUFBSixFQUFjLE1BQWQsRUFBc0IsUUFBdEI7O0FBRUEsV0FBTyxLQUFQLEVBQWMsS0FBZCxDQUFvQixVQUFwQixHQUFpQyxTQUFqQzs7QUFFQSxXQUFPLEtBQVAsRUFBYyxnQkFBZCxDQUErQixZQUEvQixFQUE2QyxZQUFXO0FBQ3ZELGdCQUFXLElBQVg7QUFDQSxLQUZEOztBQUlBLFdBQU8sS0FBUCxFQUFjLGdCQUFkLENBQStCLFVBQS9CLEVBQTJDLFVBQVMsS0FBVCxFQUFnQjtBQUMxRCxXQUFNLGNBQU47QUFDRSxXQUFNLGVBQU47O0FBRUYsU0FBSSxlQUFlLE1BQU0sY0FBTixDQUFxQixDQUFyQixDQUFuQjtBQUNBLGNBQVMsU0FBUyxnQkFBVCxDQUEwQixhQUFhLE9BQXZDLEVBQWdELGFBQWEsT0FBN0QsQ0FBVDs7QUFFQSxnQkFBVyxPQUFPLFNBQWxCO0FBQ0EsWUFBTyxTQUFQLEdBQW1CLFNBQVMsU0FBNUI7QUFDQSxjQUFTLFNBQVQsR0FBcUIsUUFBckI7QUFDQSxLQVZEO0FBWUEsSUFyQlUsQ0FxQlQsSUFyQlMsQ0FxQkosSUFyQkksRUFxQkUsV0FyQkYsQ0FBWCxFQXFCMkIsTUFBSSxDQXJCL0I7O0FBdUJBLGFBQVUsTUFBVixDQUFpQixTQUFqQixFQUE0QixDQUE1QjtBQUNBLFlBQVMsTUFBVCxDQUFnQixTQUFoQixFQUEyQixDQUEzQjtBQUVEO0FBRUQ7O0FBRUQsUUFBTztBQUNOLFNBQU87QUFERCxFQUFQO0FBSUEsQ0F4RGlCLEVBQWxCOztBQTJEQSxZQUFZLEtBQVoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFJhbWRvbUltYWdlID0gKGZ1bmN0aW9uKCkge1xuXG5cdGZ1bmN0aW9uIHN0YXJ0ICgpIHtcblx0XHR2YXIgJGVsZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbScpKSxcblx0XHRcdFx0JGltYWdlcyA9IFsn6bygJywn54mbJywn6JmOJywn5YWUJywn6b6NJywn6JuHJywn6aasJywn576KJywgJ+eMtCcsJ+mbnicsJ+eLlycsJ+ixrCddLFxuXHRcdFx0XHRlbGVtSW5kZXggPSBbXSwgaW1nSW5kZXggPSBbXSxcblx0XHRcdFx0cG9zUmFuZG9tLCBpbWdSYW5kb20sIHRhcmdldEluZGV4O1xuXG5cdFx0Zm9yKCB2YXIgaSA9IDA7IGkgPCAkZWxlbXMubGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRlbGVtSW5kZXhbaV0gPSBpO1xuXHRcdFx0aW1nSW5kZXhbaV0gPSBpO1xuXHRcdH1cblxuXHRcdC8vIHN0YXJ0XG5cdFx0Zm9yKCB2YXIgaSA9IDA7IGkgPCAkZWxlbXMubGVuZ3RoOyBpKysgKSB7XG5cblx0XHRcdFx0cG9zUmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmVsZW1JbmRleC5sZW5ndGgpO1xuXHRcdFx0XHRpbWdSYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqaW1nSW5kZXgubGVuZ3RoKTtcblx0XHRcdFx0dGFyZ2V0SW5kZXggPSBlbGVtSW5kZXhbcG9zUmFuZG9tXTtcblxuXHRcdFx0XHQkZWxlbXNbZWxlbUluZGV4W3Bvc1JhbmRvbV1dLmlubmVySFRNTCA9ICRpbWFnZXNbaW1nSW5kZXhbaW1nUmFuZG9tXV07XG5cblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbihpbmRleCkge1xuXHRcdFx0XHRcdHZhciAkc3RhcnRFbCwgJGVuZEVsLCB0ZW1wVGV4dDtcblxuXHRcdFx0XHRcdCRlbGVtc1tpbmRleF0uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblx0XHRcdFx0XHQvLyB0b3VjaFxuXHRcdFx0XHRcdCRlbGVtc1tpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkc3RhcnRFbCA9IHRoaXM7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHQkZWxlbXNbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0XHRcdFx0XHR2YXIgY2hhbmdlZFRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF07XG5cdFx0XHRcdFx0XHQkZW5kRWwgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGNoYW5nZWRUb3VjaC5jbGllbnRYLCBjaGFuZ2VkVG91Y2guY2xpZW50WSk7XG5cblx0XHRcdFx0XHRcdHRlbXBUZXh0ID0gJGVuZEVsLmlubmVySFRNTDtcblx0XHRcdFx0XHRcdCRlbmRFbC5pbm5lckhUTUwgPSAkc3RhcnRFbC5pbm5lckhUTUw7XG5cdFx0XHRcdFx0XHQkc3RhcnRFbC5pbm5lckhUTUwgPSB0ZW1wVGV4dDtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHR9LmJpbmQobnVsbCwgdGFyZ2V0SW5kZXgpLCAyMDAqaSk7XG5cblx0XHRcdFx0ZWxlbUluZGV4LnNwbGljZShwb3NSYW5kb20sIDEpO1xuXHRcdFx0XHRpbWdJbmRleC5zcGxpY2UoaW1nUmFuZG9tLCAxKTtcblxuXHRcdH1cblxuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRzdGFydDogc3RhcnRcblx0fVxuXG59KSgpO1xuXG5cblJhbWRvbUltYWdlLnN0YXJ0KCk7XG4iXX0=
