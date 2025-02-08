// variable
let NombreIngresado =[];

function asignartexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    if(nombreAmigo === ''){
        alert('Por favor, inserte un nombre');
    }else{
        LimpiarCaja();
        if(NombreIngresado.includes(nombreAmigo)){
            alert('Duplicado, "El nombre ya existe"');
        }else{
            NombreIngresado.push(nombreAmigo);
            console.log(NombreIngresado);
            actualizarlista();
        }
    }
    return;
}

function actualizarlista(){
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for(let i=0; i < NombreIngresado.length; i++){
        let crearamigo = document.createElement(`li`);
        lista.appendChild(crearamigo);
        crearamigo.innerHTML = `${NombreIngresado[i]}`;
    }
    return;
}

function LimpiarCaja(){
    let valorcaja = document.querySelector('#amigo').value = '';
}

function sortearAmigo(){
    if(NombreIngresado.length === 0 ){
        alert("No se encontraron amigos para sortear.");
        return;
    }
    const Aleatorio = Math.floor(Math.random()* NombreIngresado.length);
    const amigoSorteado = NombreIngresado[Aleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `¡${amigoSorteado} es el amigo Secreto!`;
}

