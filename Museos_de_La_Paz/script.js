function fibo(){
	var n = prompt("Digite n");
	var a = -1
	var b = 1
	var c
	var cad = ""
	for(var i=1; i<=n; i++){
		c = a + b;
		a = b;
		b = c;
		cad = cad+c+", "
	}
	alert("La serie de "+n+" es: "+cad)
}