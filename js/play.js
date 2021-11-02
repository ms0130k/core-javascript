'use strict';

function countSeconds(howMany) {
  for (var i = 1; i <= howMany; i++) {
    console.log(i);
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
countSeconds(3);
