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
var nomPoke=[];

function Pelear(){
	
	printHTML(nomPoke)
	Pokemon.forEach(function(elemento){ 
	imprimir.innerHTML = elemento.nombre + " atacó a " + elemento.nombre + " y tiene una vida de " + elemento.Pikachu.atacar(Charmander)
	});
}

function printHTML (html){
  imprimir.innerHTML = '';
  imprimir.innerHTML = html;
}

Pikachu.atacar(Charmander);
console.log(Charmander.vida);
Charmander.mostrarPokemon();