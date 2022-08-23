"use strict";

var _this = void 0;

var icons = ['win1.png', 'win2.png', 'win3.png', 'win4.png', 'win5.png', 'win6.png', 'win7.png', 'win8.png'];
var slots = document.querySelector('.bao__slot');
var cols = document.querySelectorAll('.col');
var col1 = document.querySelector('.col-one');
var col2 = document.querySelector('.col-two');
var col3 = document.querySelector('.col-three');

for (var i in cols) {
  if (!cols.hasOwnProperty(i)) continue;
  var col = cols[i];
  var str = '';
  var firstThree = '';

  for (var x = 0; x < 30; x++) {
    var part = '<img class="icon" src="img/slots/' + icons[Math.floor(Math.random() * icons.length)] + '">';
    str += part;
    if (x < 3) firstThree += part;
  }

  var content = col.innerHTML;
  col.innerHTML = content + str + firstThree;
}

var win3 = document.querySelectorAll('.start3');
var win2 = document.querySelectorAll('.start2');
var overlay = document.querySelector('.bao__overlay');
var firstWin = document.querySelector('.bao__firstWin');
var firstWinBtn = document.querySelector('.bao__firstWin-btn');
var secondWin = document.querySelector('.bao__secondWin');
var textMain = document.querySelector('.bao__text');
var textWin = document.querySelector('.bao__textWin');
var btn = document.querySelector('.bao__btn');
var counter = '';
btn.addEventListener('click', function () {
  spin(_this);
  counter++;
});
firstWinBtn.addEventListener('click', function () {
  overlay.classList.add('opacity');
  firstWin.classList.add('hidden');
  col2.classList.remove('win');
  col3.classList.remove('win');
});

function spin(elem) {
  slots.classList.toggle('spinning', true);
  window.setTimeout(function () {
    var startIcon = document.querySelectorAll('.start');
    startIcon.forEach(function (item) {
      item.style.display = 'none';
    });
    win2.forEach(function (item) {
      item.style.display = 'block';
    });
    var icons = ['win1.png', 'win2.png', 'win3.png', 'win4.png', 'win5.png', 'win6.png', 'win7.png', 'win8.png'];

    if (counter === 1) {
      var results1 = [icons[0], icons[0], icons[0]];
      var results2 = [icons[5], icons[7], icons[6]];
      var results3 = [icons[4], icons[2], icons[3]];
      var icons = col1.querySelectorAll('.icon');

      for (var x = 0; x < 3; x++) {
        icons[x].setAttribute('src', 'img/slots/' + results1[x]);
        icons[icons.length - 3 + x].setAttribute('src', 'img/slots/' + results1[x]);
      }

      var icons2 = col2.querySelectorAll('.icon');
      var icons3 = col3.querySelectorAll('.icon');

      for (var x = 0; x < 3; x++) {
        icons2[x].setAttribute('src', 'img/slots/' + results2[x]);
        icons2[icons.length - 3 + x].setAttribute('src', 'img/slots/' + results2[x]);
        icons3[x].setAttribute('src', 'img/slots/' + results3[x]);
        icons3[icons.length - 3 + x].setAttribute('src', 'img/slots/' + results3[x]);
      }

      col2.classList.add('win');
      col3.classList.add('win');
      textWin.classList.add('visible');
      setTimeout(function () {
        overlay.classList.remove('opacity');
        firstWin.classList.remove('hidden');
        textMain.innerHTML = 'One attempt left';
      }, 2900);
    }

    if (counter === 2) {
      win3.forEach(function (item) {
        item.style.display = 'block';
      }); //for ios fox

      for (var x = 0; x < 3; x++) {
        win2[0].setAttribute('src', 'img/slots/win1.png');
        win2[1].setAttribute('src', 'img/slots/win7.png');
        win2[2].setAttribute('src', 'img/slots/win6.png');
      }

      var results1 = [icons[0], icons[6], icons[5]];
      var results2 = [icons[2], icons[2], icons[2]];
      var icons = col1.querySelectorAll('.icon');
      var icons2 = col2.querySelectorAll('.icon');

      for (var x = 0; x < 3; x++) {
        icons[x].setAttribute('src', 'img/slots/' + results1[x]);
        icons[icons.length - 3 + x].setAttribute('src', 'img/slots/' + results1[x]);
        icons2[x].setAttribute('src', 'img/slots/' + results2[x]);
        icons2[icons.length - 3 + x].setAttribute('src', 'img/slots/' + results2[x]);
      }

      col1.classList.add('win');
      col3.classList.add('win');
      setTimeout(function () {
        overlay.classList.remove('opacity');
        secondWin.classList.remove('hidden');
      }, 2900);
    }
  }, 1500);
  window.setTimeout(function () {
    slots.classList.toggle('spinning', false);
  }.bind(elem), 3500);
}
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzZWNvbmQuanMiXSwibmFtZXMiOlsiaWNvbnMiLCJzbG90cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29sMSIsImNvbDIiLCJjb2wzIiwiaSIsImhhc093blByb3BlcnR5IiwiY29sIiwic3RyIiwiZmlyc3RUaHJlZSIsIngiLCJwYXJ0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiY29udGVudCIsImlubmVySFRNTCIsIndpbjMiLCJ3aW4yIiwib3ZlcmxheSIsImZpcnN0V2luIiwiZmlyc3RXaW5CdG4iLCJzZWNvbmRXaW4iLCJ0ZXh0TWFpbiIsInRleHRXaW4iLCJidG4iLCJjb3VudGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNwaW4iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJlbGVtIiwidG9nZ2xlIiwid2luZG93Iiwic2V0VGltZW91dCIsInN0YXJ0SWNvbiIsImZvckVhY2giLCJpdGVtIiwic3R5bGUiLCJkaXNwbGF5IiwicmVzdWx0czEiLCJyZXN1bHRzMiIsInJlc3VsdHMzIiwic2V0QXR0cmlidXRlIiwiaWNvbnMyIiwiaWNvbnMzIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQUlBLEtBQUssR0FBRyxDQUNSLFVBRFEsRUFDRyxVQURILEVBQ2MsVUFEZCxFQUN5QixVQUR6QixFQUNvQyxVQURwQyxFQUMrQyxVQUQvQyxFQUMwRCxVQUQxRCxFQUNxRSxVQURyRSxDQUFaO0FBSUEsSUFBSUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBWjtBQUNBLElBQUlDLElBQUksR0FBR0YsUUFBUSxDQUFDRyxnQkFBVCxDQUEwQixNQUExQixDQUFYO0FBQ0EsSUFBSUMsSUFBSSxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBWDtBQUNBLElBQUlJLElBQUksR0FBR0wsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQVg7QUFDQSxJQUFJSyxJQUFJLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFYOztBQUNBLEtBQUksSUFBSU0sQ0FBUixJQUFhTCxJQUFiLEVBQW1CO0VBQ2YsSUFBSSxDQUFDQSxJQUFJLENBQUNNLGNBQUwsQ0FBb0JELENBQXBCLENBQUwsRUFDSTtFQUNKLElBQUlFLEdBQUcsR0FBR1AsSUFBSSxDQUFDSyxDQUFELENBQWQ7RUFDQSxJQUFJRyxHQUFHLEdBQUcsRUFBVjtFQUNBLElBQUlDLFVBQVUsR0FBRyxFQUFqQjs7RUFDQSxLQUFJLElBQUlDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBRyxFQUFuQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtJQUN4QixJQUFJQyxJQUFJLEdBQUcsc0NBQW9DZixLQUFLLENBQUNnQixJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWNsQixLQUFLLENBQUNtQixNQUEvQixDQUFELENBQXpDLEdBQWtGLElBQTdGO0lBQ0FQLEdBQUcsSUFBSUcsSUFBUDtJQUNBLElBQUlELENBQUMsR0FBRyxDQUFSLEVBQVdELFVBQVUsSUFBSUUsSUFBZDtFQUNkOztFQUNELElBQUlLLE9BQU8sR0FBR1QsR0FBRyxDQUFDVSxTQUFsQjtFQUNBVixHQUFHLENBQUNVLFNBQUosR0FBZ0JELE9BQU8sR0FBR1IsR0FBVixHQUFjQyxVQUE5QjtBQUNIOztBQUVELElBQUlTLElBQUksR0FBR3BCLFFBQVEsQ0FBQ0csZ0JBQVQsQ0FBMEIsU0FBMUIsQ0FBWDtBQUNBLElBQUlrQixJQUFJLEdBQUdyQixRQUFRLENBQUNHLGdCQUFULENBQTBCLFNBQTFCLENBQVg7QUFDQSxJQUFJbUIsT0FBTyxHQUFHdEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQWQ7QUFDQSxJQUFJc0IsUUFBUSxHQUFHdkIsUUFBUSxDQUFDQyxhQUFULENBQXVCLGdCQUF2QixDQUFmO0FBQ0EsSUFBSXVCLFdBQVcsR0FBR3hCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixvQkFBdkIsQ0FBbEI7QUFDQSxJQUFJd0IsU0FBUyxHQUFHekIsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDQUFoQjtBQUNBLElBQUl5QixRQUFRLEdBQUcxQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZjtBQUNBLElBQUkwQixPQUFPLEdBQUczQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBZDtBQUNBLElBQUkyQixHQUFHLEdBQUc1QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBVjtBQUNBLElBQUk0QixPQUFPLEdBQUcsRUFBZDtBQUVBRCxHQUFHLENBQUNFLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQUs7RUFDL0JDLElBQUksQ0FBQyxLQUFELENBQUo7RUFDQUYsT0FBTztBQUNWLENBSEQ7QUFLQUwsV0FBVyxDQUFDTSxnQkFBWixDQUE2QixPQUE3QixFQUFzQyxZQUFLO0VBQ3ZDUixPQUFPLENBQUNVLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLFNBQXRCO0VBQ0FWLFFBQVEsQ0FBQ1MsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsUUFBdkI7RUFDQTVCLElBQUksQ0FBQzJCLFNBQUwsQ0FBZUUsTUFBZixDQUFzQixLQUF0QjtFQUNBNUIsSUFBSSxDQUFDMEIsU0FBTCxDQUFlRSxNQUFmLENBQXNCLEtBQXRCO0FBQ0gsQ0FMRDs7QUFPQSxTQUFTSCxJQUFULENBQWNJLElBQWQsRUFBb0I7RUFDaEJwQyxLQUFLLENBQUNpQyxTQUFOLENBQWdCSSxNQUFoQixDQUF1QixVQUF2QixFQUFtQyxJQUFuQztFQUNBQyxNQUFNLENBQUNDLFVBQVAsQ0FBa0IsWUFBVztJQUN6QixJQUFJQyxTQUFTLEdBQUd2QyxRQUFRLENBQUNHLGdCQUFULENBQTBCLFFBQTFCLENBQWhCO0lBQ0FvQyxTQUFTLENBQUNDLE9BQVYsQ0FBa0IsVUFBQUMsSUFBSSxFQUFJO01BQ3RCQSxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsT0FBWCxHQUFxQixNQUFyQjtJQUNILENBRkQ7SUFHQXRCLElBQUksQ0FBQ21CLE9BQUwsQ0FBYSxVQUFBQyxJQUFJLEVBQUk7TUFDakJBLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxPQUFYLEdBQXFCLE9BQXJCO0lBQ0gsQ0FGRDtJQUdJLElBQUk3QyxLQUFLLEdBQUcsQ0FDUixVQURRLEVBQ0csVUFESCxFQUNjLFVBRGQsRUFDeUIsVUFEekIsRUFDb0MsVUFEcEMsRUFDK0MsVUFEL0MsRUFDMEQsVUFEMUQsRUFDcUUsVUFEckUsQ0FBWjs7SUFJQSxJQUFHK0IsT0FBTyxLQUFLLENBQWYsRUFBaUI7TUFDYixJQUFJZSxRQUFRLEdBQUcsQ0FDWDlDLEtBQUssQ0FBQyxDQUFELENBRE0sRUFFWEEsS0FBSyxDQUFDLENBQUQsQ0FGTSxFQUdYQSxLQUFLLENBQUMsQ0FBRCxDQUhNLENBQWY7TUFLQSxJQUFJK0MsUUFBUSxHQUFHLENBQ1gvQyxLQUFLLENBQUMsQ0FBRCxDQURNLEVBRVhBLEtBQUssQ0FBQyxDQUFELENBRk0sRUFHWEEsS0FBSyxDQUFDLENBQUQsQ0FITSxDQUFmO01BS0EsSUFBSWdELFFBQVEsR0FBRyxDQUNYaEQsS0FBSyxDQUFDLENBQUQsQ0FETSxFQUVYQSxLQUFLLENBQUMsQ0FBRCxDQUZNLEVBR1hBLEtBQUssQ0FBQyxDQUFELENBSE0sQ0FBZjtNQUtBLElBQUlBLEtBQUssR0FBR00sSUFBSSxDQUFDRCxnQkFBTCxDQUFzQixPQUF0QixDQUFaOztNQUNBLEtBQUksSUFBSVMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHLENBQW5CLEVBQXNCQSxDQUFDLEVBQXZCLEVBQTJCO1FBQ3ZCZCxLQUFLLENBQUNjLENBQUQsQ0FBTCxDQUFTbUMsWUFBVCxDQUFzQixLQUF0QixFQUE2QixlQUFhSCxRQUFRLENBQUNoQyxDQUFELENBQWxEO1FBQ0FkLEtBQUssQ0FBRUEsS0FBSyxDQUFDbUIsTUFBTixHQUFhLENBQWQsR0FBaUJMLENBQWxCLENBQUwsQ0FBMEJtQyxZQUExQixDQUF1QyxLQUF2QyxFQUE4QyxlQUFhSCxRQUFRLENBQUNoQyxDQUFELENBQW5FO01BQ0g7O01BQ0QsSUFBSW9DLE1BQU0sR0FBRzNDLElBQUksQ0FBQ0YsZ0JBQUwsQ0FBc0IsT0FBdEIsQ0FBYjtNQUNBLElBQUk4QyxNQUFNLEdBQUczQyxJQUFJLENBQUNILGdCQUFMLENBQXNCLE9BQXRCLENBQWI7O01BQ0EsS0FBSSxJQUFJUyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUcsQ0FBbkIsRUFBc0JBLENBQUMsRUFBdkIsRUFBMkI7UUFDdkJvQyxNQUFNLENBQUNwQyxDQUFELENBQU4sQ0FBVW1DLFlBQVYsQ0FBdUIsS0FBdkIsRUFBOEIsZUFBYUYsUUFBUSxDQUFDakMsQ0FBRCxDQUFuRDtRQUNBb0MsTUFBTSxDQUFFbEQsS0FBSyxDQUFDbUIsTUFBTixHQUFhLENBQWQsR0FBaUJMLENBQWxCLENBQU4sQ0FBMkJtQyxZQUEzQixDQUF3QyxLQUF4QyxFQUErQyxlQUFhRixRQUFRLENBQUNqQyxDQUFELENBQXBFO1FBQ0FxQyxNQUFNLENBQUNyQyxDQUFELENBQU4sQ0FBVW1DLFlBQVYsQ0FBdUIsS0FBdkIsRUFBOEIsZUFBYUQsUUFBUSxDQUFDbEMsQ0FBRCxDQUFuRDtRQUNBcUMsTUFBTSxDQUFFbkQsS0FBSyxDQUFDbUIsTUFBTixHQUFhLENBQWQsR0FBaUJMLENBQWxCLENBQU4sQ0FBMkJtQyxZQUEzQixDQUF3QyxLQUF4QyxFQUErQyxlQUFhRCxRQUFRLENBQUNsQyxDQUFELENBQXBFO01BQ0g7O01BRURQLElBQUksQ0FBQzJCLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixLQUFuQjtNQUNBM0IsSUFBSSxDQUFDMEIsU0FBTCxDQUFlQyxHQUFmLENBQW1CLEtBQW5CO01BQ0FOLE9BQU8sQ0FBQ0ssU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsU0FBdEI7TUFDQUssVUFBVSxDQUFDLFlBQU07UUFDYmhCLE9BQU8sQ0FBQ1UsU0FBUixDQUFrQkUsTUFBbEIsQ0FBeUIsU0FBekI7UUFDQVgsUUFBUSxDQUFDUyxTQUFULENBQW1CRSxNQUFuQixDQUEwQixRQUExQjtRQUNBUixRQUFRLENBQUNQLFNBQVQsR0FBcUIsa0JBQXJCO01BRUgsQ0FMUyxFQUtQLElBTE8sQ0FBVjtJQU9IOztJQUNELElBQUdVLE9BQU8sS0FBSyxDQUFmLEVBQWlCO01BQ2JULElBQUksQ0FBQ29CLE9BQUwsQ0FBYSxVQUFBQyxJQUFJLEVBQUk7UUFDakJBLElBQUksQ0FBQ0MsS0FBTCxDQUFXQyxPQUFYLEdBQXFCLE9BQXJCO01BQ0gsQ0FGRCxFQURhLENBSWI7O01BQ0EsS0FBSSxJQUFJL0IsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHLENBQW5CLEVBQXNCQSxDQUFDLEVBQXZCLEVBQTJCO1FBQ3ZCUyxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVEwQixZQUFSLENBQXFCLEtBQXJCLEVBQTRCLG9CQUE1QjtRQUNBMUIsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRMEIsWUFBUixDQUFxQixLQUFyQixFQUE0QixvQkFBNUI7UUFDQTFCLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUTBCLFlBQVIsQ0FBcUIsS0FBckIsRUFBNEIsb0JBQTVCO01BQ0g7O01BRUQsSUFBSUgsUUFBUSxHQUFHLENBQ1g5QyxLQUFLLENBQUMsQ0FBRCxDQURNLEVBRVhBLEtBQUssQ0FBQyxDQUFELENBRk0sRUFHWEEsS0FBSyxDQUFDLENBQUQsQ0FITSxDQUFmO01BS0EsSUFBSStDLFFBQVEsR0FBRyxDQUNYL0MsS0FBSyxDQUFDLENBQUQsQ0FETSxFQUVYQSxLQUFLLENBQUMsQ0FBRCxDQUZNLEVBR1hBLEtBQUssQ0FBQyxDQUFELENBSE0sQ0FBZjtNQU1BLElBQUlBLEtBQUssR0FBR00sSUFBSSxDQUFDRCxnQkFBTCxDQUFzQixPQUF0QixDQUFaO01BQ0EsSUFBSTZDLE1BQU0sR0FBRzNDLElBQUksQ0FBQ0YsZ0JBQUwsQ0FBc0IsT0FBdEIsQ0FBYjs7TUFDQSxLQUFJLElBQUlTLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBRyxDQUFuQixFQUFzQkEsQ0FBQyxFQUF2QixFQUEyQjtRQUN2QmQsS0FBSyxDQUFDYyxDQUFELENBQUwsQ0FBU21DLFlBQVQsQ0FBc0IsS0FBdEIsRUFBNkIsZUFBYUgsUUFBUSxDQUFDaEMsQ0FBRCxDQUFsRDtRQUNBZCxLQUFLLENBQUVBLEtBQUssQ0FBQ21CLE1BQU4sR0FBYSxDQUFkLEdBQWlCTCxDQUFsQixDQUFMLENBQTBCbUMsWUFBMUIsQ0FBdUMsS0FBdkMsRUFBOEMsZUFBYUgsUUFBUSxDQUFDaEMsQ0FBRCxDQUFuRTtRQUNBb0MsTUFBTSxDQUFDcEMsQ0FBRCxDQUFOLENBQVVtQyxZQUFWLENBQXVCLEtBQXZCLEVBQThCLGVBQWFGLFFBQVEsQ0FBQ2pDLENBQUQsQ0FBbkQ7UUFDQW9DLE1BQU0sQ0FBRWxELEtBQUssQ0FBQ21CLE1BQU4sR0FBYSxDQUFkLEdBQWlCTCxDQUFsQixDQUFOLENBQTJCbUMsWUFBM0IsQ0FBd0MsS0FBeEMsRUFBK0MsZUFBYUYsUUFBUSxDQUFDakMsQ0FBRCxDQUFwRTtNQUNIOztNQUVEUixJQUFJLENBQUM0QixTQUFMLENBQWVDLEdBQWYsQ0FBbUIsS0FBbkI7TUFDQTNCLElBQUksQ0FBQzBCLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixLQUFuQjtNQUNBSyxVQUFVLENBQUMsWUFBTTtRQUNiaEIsT0FBTyxDQUFDVSxTQUFSLENBQWtCRSxNQUFsQixDQUF5QixTQUF6QjtRQUNBVCxTQUFTLENBQUNPLFNBQVYsQ0FBb0JFLE1BQXBCLENBQTJCLFFBQTNCO01BQ0gsQ0FIUyxFQUdQLElBSE8sQ0FBVjtJQUlIO0VBQ1IsQ0EzRkQsRUEyRkcsSUEzRkg7RUE4RkFHLE1BQU0sQ0FBQ0MsVUFBUCxDQUFrQixZQUFXO0lBQ3pCdkMsS0FBSyxDQUFDaUMsU0FBTixDQUFnQkksTUFBaEIsQ0FBdUIsVUFBdkIsRUFBbUMsS0FBbkM7RUFFSCxDQUhpQixDQUdoQmMsSUFIZ0IsQ0FHWGYsSUFIVyxDQUFsQixFQUdjLElBSGQ7QUFJSDtBQ25KRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGljb25zID0gW1xuICAgICd3aW4xLnBuZycsJ3dpbjIucG5nJywnd2luMy5wbmcnLCd3aW40LnBuZycsJ3dpbjUucG5nJywnd2luNi5wbmcnLCd3aW43LnBuZycsJ3dpbjgucG5nJ1xuXTtcblxudmFyIHNsb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhb19fc2xvdCcpO1xudmFyIGNvbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sJyk7XG52YXIgY29sMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2wtb25lJyk7XG52YXIgY29sMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2wtdHdvJyk7XG52YXIgY29sMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2wtdGhyZWUnKTtcbmZvcih2YXIgaSBpbiBjb2xzKSB7XG4gICAgaWYgKCFjb2xzLmhhc093blByb3BlcnR5KGkpKVxuICAgICAgICBjb250aW51ZTtcbiAgICB2YXIgY29sID0gY29sc1tpXTtcbiAgICB2YXIgc3RyID0gJyc7XG4gICAgdmFyIGZpcnN0VGhyZWUgPSAnJztcbiAgICBmb3IodmFyIHggPSAwOyB4IDwgMzA7IHgrKykge1xuICAgICAgICB2YXIgcGFydCA9ICc8aW1nIGNsYXNzPVwiaWNvblwiIHNyYz1cImltZy9zbG90cy8nK2ljb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSppY29ucy5sZW5ndGgpXSsnXCI+JztcbiAgICAgICAgc3RyICs9IHBhcnRcbiAgICAgICAgaWYgKHggPCAzKSBmaXJzdFRocmVlICs9IHBhcnQ7XG4gICAgfVxuICAgIGxldCBjb250ZW50ID0gY29sLmlubmVySFRNTFxuICAgIGNvbC5pbm5lckhUTUwgPSBjb250ZW50ICsgc3RyK2ZpcnN0VGhyZWU7XG59XG5cbmxldCB3aW4zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YXJ0MycpXG5sZXQgd2luMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFydDInKVxubGV0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFvX19vdmVybGF5JylcbmxldCBmaXJzdFdpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYW9fX2ZpcnN0V2luJylcbmxldCBmaXJzdFdpbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYW9fX2ZpcnN0V2luLWJ0bicpXG5sZXQgc2Vjb25kV2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhb19fc2Vjb25kV2luJylcbmxldCB0ZXh0TWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYW9fX3RleHQnKVxubGV0IHRleHRXaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFvX190ZXh0V2luJylcbmxldCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFvX19idG4nKVxubGV0IGNvdW50ZXIgPSAnJ1xuXG5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICBzcGluKHRoaXMpXG4gICAgY291bnRlcisrXG59KVxuXG5maXJzdFdpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3BhY2l0eScpXG4gICAgZmlyc3RXaW4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBjb2wyLmNsYXNzTGlzdC5yZW1vdmUoJ3dpbicpXG4gICAgY29sMy5jbGFzc0xpc3QucmVtb3ZlKCd3aW4nKVxufSlcblxuZnVuY3Rpb24gc3BpbihlbGVtKSB7XG4gICAgc2xvdHMuY2xhc3NMaXN0LnRvZ2dsZSgnc3Bpbm5pbmcnLCB0cnVlKTtcbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHN0YXJ0SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFydCcpXG4gICAgICAgIHN0YXJ0SWNvbi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIH0pXG4gICAgICAgIHdpbjIuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgfSlcbiAgICAgICAgICAgIHZhciBpY29ucyA9IFtcbiAgICAgICAgICAgICAgICAnd2luMS5wbmcnLCd3aW4yLnBuZycsJ3dpbjMucG5nJywnd2luNC5wbmcnLCd3aW41LnBuZycsJ3dpbjYucG5nJywnd2luNy5wbmcnLCd3aW44LnBuZydcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGlmKGNvdW50ZXIgPT09IDEpe1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHRzMSA9IFtcbiAgICAgICAgICAgICAgICAgICAgaWNvbnNbMF0sXG4gICAgICAgICAgICAgICAgICAgIGljb25zWzBdLFxuICAgICAgICAgICAgICAgICAgICBpY29uc1swXVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0czIgPSBbXG4gICAgICAgICAgICAgICAgICAgIGljb25zWzVdLFxuICAgICAgICAgICAgICAgICAgICBpY29uc1s3XSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbnNbNl1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdHMzID0gW1xuICAgICAgICAgICAgICAgICAgICBpY29uc1s0XSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbnNbMl0sXG4gICAgICAgICAgICAgICAgICAgIGljb25zWzNdXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIHZhciBpY29ucyA9IGNvbDEucXVlcnlTZWxlY3RvckFsbCgnLmljb24nKTtcbiAgICAgICAgICAgICAgICBmb3IodmFyIHggPSAwOyB4IDwgMzsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGljb25zW3hdLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2ltZy9zbG90cy8nK3Jlc3VsdHMxW3hdKTtcbiAgICAgICAgICAgICAgICAgICAgaWNvbnNbKGljb25zLmxlbmd0aC0zKSt4XS5zZXRBdHRyaWJ1dGUoJ3NyYycsICdpbWcvc2xvdHMvJytyZXN1bHRzMVt4XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBpY29uczIgPSBjb2wyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pY29uJyk7XG4gICAgICAgICAgICAgICAgdmFyIGljb25zMyA9IGNvbDMucXVlcnlTZWxlY3RvckFsbCgnLmljb24nKTtcbiAgICAgICAgICAgICAgICBmb3IodmFyIHggPSAwOyB4IDwgMzsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGljb25zMlt4XS5zZXRBdHRyaWJ1dGUoJ3NyYycsICdpbWcvc2xvdHMvJytyZXN1bHRzMlt4XSk7XG4gICAgICAgICAgICAgICAgICAgIGljb25zMlsoaWNvbnMubGVuZ3RoLTMpK3hdLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2ltZy9zbG90cy8nK3Jlc3VsdHMyW3hdKTtcbiAgICAgICAgICAgICAgICAgICAgaWNvbnMzW3hdLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2ltZy9zbG90cy8nK3Jlc3VsdHMzW3hdKTtcbiAgICAgICAgICAgICAgICAgICAgaWNvbnMzWyhpY29ucy5sZW5ndGgtMykreF0uc2V0QXR0cmlidXRlKCdzcmMnLCAnaW1nL3Nsb3RzLycrcmVzdWx0czNbeF0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbDIuY2xhc3NMaXN0LmFkZCgnd2luJylcbiAgICAgICAgICAgICAgICBjb2wzLmNsYXNzTGlzdC5hZGQoJ3dpbicpXG4gICAgICAgICAgICAgICAgdGV4dFdpbi5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJylcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdvcGFjaXR5JylcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RXaW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgdGV4dE1haW4uaW5uZXJIVE1MID0gJ09uZSBhdHRlbXB0IGxlZnQnXG5cbiAgICAgICAgICAgICAgICB9LCAyOTAwKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoY291bnRlciA9PT0gMil7XG4gICAgICAgICAgICAgICAgd2luMy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvL2ZvciBpb3MgZm94XG4gICAgICAgICAgICAgICAgZm9yKHZhciB4ID0gMDsgeCA8IDM7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICB3aW4yWzBdLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2ltZy9zbG90cy93aW4xLnBuZycpO1xuICAgICAgICAgICAgICAgICAgICB3aW4yWzFdLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2ltZy9zbG90cy93aW43LnBuZycpO1xuICAgICAgICAgICAgICAgICAgICB3aW4yWzJdLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2ltZy9zbG90cy93aW42LnBuZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciByZXN1bHRzMSA9IFtcbiAgICAgICAgICAgICAgICAgICAgaWNvbnNbMF0sXG4gICAgICAgICAgICAgICAgICAgIGljb25zWzZdLFxuICAgICAgICAgICAgICAgICAgICBpY29uc1s1XVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0czIgPSBbXG4gICAgICAgICAgICAgICAgICAgIGljb25zWzJdLFxuICAgICAgICAgICAgICAgICAgICBpY29uc1syXSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbnNbMl1cbiAgICAgICAgICAgICAgICBdXG5cbiAgICAgICAgICAgICAgICB2YXIgaWNvbnMgPSBjb2wxLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pY29uJyk7XG4gICAgICAgICAgICAgICAgdmFyIGljb25zMiA9IGNvbDIucXVlcnlTZWxlY3RvckFsbCgnLmljb24nKTtcbiAgICAgICAgICAgICAgICBmb3IodmFyIHggPSAwOyB4IDwgMzsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGljb25zW3hdLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2ltZy9zbG90cy8nK3Jlc3VsdHMxW3hdKTtcbiAgICAgICAgICAgICAgICAgICAgaWNvbnNbKGljb25zLmxlbmd0aC0zKSt4XS5zZXRBdHRyaWJ1dGUoJ3NyYycsICdpbWcvc2xvdHMvJytyZXN1bHRzMVt4XSk7XG4gICAgICAgICAgICAgICAgICAgIGljb25zMlt4XS5zZXRBdHRyaWJ1dGUoJ3NyYycsICdpbWcvc2xvdHMvJytyZXN1bHRzMlt4XSk7XG4gICAgICAgICAgICAgICAgICAgIGljb25zMlsoaWNvbnMubGVuZ3RoLTMpK3hdLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2ltZy9zbG90cy8nK3Jlc3VsdHMyW3hdKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb2wxLmNsYXNzTGlzdC5hZGQoJ3dpbicpXG4gICAgICAgICAgICAgICAgY29sMy5jbGFzc0xpc3QuYWRkKCd3aW4nKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ29wYWNpdHknKVxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRXaW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICB9LCAyOTAwKTtcbiAgICAgICAgICAgIH1cbiAgICB9LCAxNTAwKTtcblxuXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHNsb3RzLmNsYXNzTGlzdC50b2dnbGUoJ3NwaW5uaW5nJywgZmFsc2UpO1xuXG4gICAgfS5iaW5kKGVsZW0pLCAzNTAwKTtcbn1cbiIsIiJdfQ==
