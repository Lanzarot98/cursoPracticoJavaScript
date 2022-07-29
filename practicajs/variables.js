function printNumbers() {
	for (let i = 0; i < 10; i++) {
		// Cuando usamos let en un for-loop, es como si definieramos `i` aquí.

		setTimeout(
      function printer() {
	      console.log(i);
	    },
			100 * i
		);
	}
}

printNumbers();

function printNumbers1() {
	for (var i = 0; i < 10; i++) {
		// Cuando usamos let en un for-loop, es como si definieramos `i` aquí.

		setTimeout(
      function printer1() {
	      console.log(i);
	    },
			100 * i
		);
	}
}

printNumbers1();