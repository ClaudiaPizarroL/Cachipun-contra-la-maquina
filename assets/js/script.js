function jugar() {
    const veces = parseInt(prompt("¿Cuántas veces quieres jugar?"));
    for (var i = 0; i < veces; i++) {
        const usuario = prompt("Elige: Piedra, Papel o Tijera").toLowerCase();
        const computadora = obtenerJugadaComputadora();
        const resultado = determinarResultado(usuario, computadora);
        document.write("Jugada " + (i+1) + ":<br>");
        document.write("Usuario: " + usuario + "<br>");
        document.write("Computadora: " + computadora + "<br>");
        document.write("Resultado: " + resultado + "<br><br>");
    }

    if (resultado.includes("ganado")) {
        victoriasUsuario++;
    } else if (resultado.includes("perdido")) {
        victoriasComputadora++;

    }
    
}

    

    

function obtenerJugadaComputadora() {
    const opciones = ["piedra", "papel", "tijera"];
    const indice = Math.floor(Math.random() * 3);
    return opciones[indice];
}

function determinarResultado(usuario, computadora) {
    if ((usuario === "piedra" && computadora === "tijera") ||
        (usuario === "papel" && computadora === "piedra") ||
        (usuario === "tijera" && computadora === "papel")) {
        return "¡Felicidades! ¡Has ganado!";
    } else if ((usuario === "tijera" && computadora === "piedra") ||
               (usuario === "piedra" && computadora === "papel") ||
               (usuario === "papel" && computadora === "tijera")) {
        return "Lo siento, has perdido contra la máquina.";
    } else if ((usuario === computadora)) {
        return "Es un empate.";
    }   else {
        return "";
    }

    
}




