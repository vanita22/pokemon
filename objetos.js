var pokemon = [];

function Pokemon(nombre, color, vida, poderDeAtaque, nivelDeAmistad){

	this.nombre = nombre;
	this.color = color;
	this.nivelDeAmistad = nivelDeAmistad;
	this.vida = vida;
	this.poderDeAtaque = poderDeAtaque;

	this.mostrarPokemon = function(){
		return("hola, soy: " + this.nombre + " y soy de color: " + this.color);
	}

	this.aumentarAmistad = function(valor){
		return(this.nivelDeAmistad = this.nivelDeAmistad + valor);
	}

	this.atacar = function(pokemon){
		return(pokemon.vida = pokemon.vida - this.poderDeAtaque);
	}
}

var Pikachu = new Pokemon("Pikachu", "amarillo", 100, 200, 300);
var Charmander = new Pokemon("Charmander", "rojo", 20, 100, 300);


function Pelear(){

	alert("auxilio");
	var pok1 = document.getElementById("pokemon1").value;
	var pok2 = document.getElementById("pokemon2").value;
	var pokemon1 = pokemon.filter(function(el){
		return el.nombre == pok1;
	})[0];
	var pokemon2 = pokemon.filter(function(el){
		return el.nombre == pok2;
	})[0];

	pokemon1.atacar(pokemon2);

	var res = document.getElementById("resultados");
	res.innerHTML = Pokemon1.nombre + "atacó a" + pokemon2.nombre + " y " + pokemon2.nombre + " tiene una vida de " + pokemon2.vida;
}


Pikachu.atacar(Charmander);
console.log(Charmander.vida);
Charmander.mostrarPokemon();

