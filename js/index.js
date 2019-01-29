// Morando Nicolò, JScalc Calcolatrice utilizzando JQuery, data: 29/01/2019

$(document).ready(function() {
	var entry = [""];
	var str
	// Operatori validi
	var operators = ["+", "-", "/", "*", "%"];
	// Numeri validi
	var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	// prendo l'input
	function getValue(input) {
		// check per multipli
		if (input === "." && entry[entry.length - 1] === ".") {
			console.log("error: duplicate decimal point");		
			//check se l'input è un operatore
		} else if (entry.length === 1 && operators.includes(input) === false) {
			entry.push(input);
			// check se l'ultimo input è un operatore
		} else if (operators.includes(entry[entry.length - 1]) === false) {
			entry.push(input);
			// check se l'input è un numero
		} else if (nums.includes(Number(input))) {
			entry.push(input);
		}
		update();
	}

	// aggiorno con l'ultimo valore
	function update() {
		str = entry.join("");
		$("#history").html(str.substring(0, 20));
	}

	// mando il risultato
	function getTotal() {
		var answer = eval(entry.join(""));
		// converto il risultato in stringa per printarlo
		var ansStr = String(answer);
		$("#current").html(ansStr.substring(0, 10));
		$("#history").html(str.substring(0, 20) + "=");
	}

	// avvio l'app al click
	$(".btn").click(function(event) {
		// aggiorno con input utente
		var btnClicked = this.innerHTML;
		console.log(btnClicked);
		$("#current").html(btnClicked);	
		if (this.id === "allCancel") {
			entry = [""];
			$("#current").html("0");
			$("#history").html("0");
		} else if (this.id === "cancelEntry") {
			$("#current").html(entry[entry.length - 1]);
			entry.pop();
			update();
			if (entry.length === 0 || entry.length === 1) {
				entry = [""];
				$("#current").html("0");
				$("#history").html("0");
			}
			// do il risultato quando = è premuto
		} else if (this.id === "total") {
			getTotal();
		} else {
			if (entry[entry.length - 1].indexOf("+", "-", "/", "*", "%", "-1") === -1) {
				getValue(this.id);
			} else {
				getValue(this.id);
			}
		}
	});
});