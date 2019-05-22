
function zmianaKoloru(event){
	var przycisk = document.getElementById('kolor');
	alert('klikles mnie!');
	przycisk.style.backgroundColor = "yellow";
	przycisk.style.height = "100px";
	przycisk.style.width = "200px";
	
	przycisk.removeEventListener('click', zmianaKoloru);
	}

kolor.addEventListener('click', zmianaKoloru);

function polozenie(event){
	console.log(event);
	var x = event.layerX;
	var y = event.layerY;
	
	document.getElementById('x').innerHTML = x;
	document.getElementById('y').innerHTML = y;
}

kolor.addEventListener('click', polozenie);

function przesuwanie(event){
	var polx = event.layerX;
	var poly = event.layerY;
	
	document.getElementById('polX').innerHTML = polx;
	document.getElementById('polY').innerHTML = poly;
}

document.addEventListener('mousemove', przesuwanie);

function openPage(event){
	window.open('https://google.pl');
}

wejdz.addEventListener('click', openPage);

function okreslenie(event){
	var liczba = document.getElementById('liczba').value;
	if(liczba<0) document.getElementById('jestem').innerHTML = "ujemna"
	if(liczba>0) document.getElementById('jestem').innerHTML = "dodatnia"
	if(liczba==0) document.getElementById('jestem').innerHTML = "jestem zerem"
}

okresl.addEventListener('click', okreslenie);

function porownaj(event){
	var liczbaF = document.getElementById('liczba1').value;
	var liczbaS = document.getElementById('liczba2').value;
	var napis = "";
	if(liczbaF<liczbaS){
		for (i=liczbaF; i<=liczbaS; i++){
			napis = napis + i + " ";
		}
		document.getElementById('wypisanie').innerHTML = napis + "liczba " + liczbaS + " jest większa";
	}
	else if(liczbaF>liczbaS){
	for (i=liczbaF; i>=liczbaS; i--){
		napis = napis + i + " ";
	}
	document.getElementById('wypisanie').innerHTML = napis;
	}
	}

wypisz.addEventListener('click', porownaj);

function porownajcos(event){
	var dlugosc = document.getElementById('tekst').value;
	var policzSlowa = dlugosc.length;
	document.getElementById('supreme').innerHTML = policzSlowa;
}


policzto.addEventListener('click', porownajcos);




