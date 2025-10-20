let voto; 
let voto_hiram = 0
let voto_angel = 0
let voto_omar = 0
let voto_nulos = 0

do {
    
    voto = Number(prompt("Ingresa por quien quieres votar 1.- Hiram , 2.-Ángel, 3.-Omar, 0.- Finalizar programa"))
    switch(voto) {
        case 1:
            voto_hiram = voto_hiram + 1;
            break;
        case 2:
            voto_angel = voto_angel + 1;
            break;
        case 3:
            voto_omar = voto_omar + 1;
            break;
        case 0:
            voto = 0
            break;
        default:
            voto_nulos = voto_nulos + 1;
            break;
    }
}   while (voto !== 0);

let totalVotos = voto_hiram + voto_angel + voto_omar + voto_nulos;


maxvotos = Math.max(voto_hiram, voto_angel, voto_omar);

let ganadores = [];

if(voto_hiram === maxvotos) ganadores.push("Hiram");  // este es como el append de python 
if(voto_angel === maxvotos) ganadores.push("Ángel");
if(voto_omar === maxvotos) ganadores.push("Omar");

if(ganadores.length > 1) {
    alert(`Empate entre los candidatos ${ganadores.join(" y ")}. Se pedirá un voto adicional para desempatar.`);
    

    let desempate;
    do {
        desempate = Number(prompt(`Voto de desempate: 1-Hiram, 2-Ángel, 3-Omar`));
        switch(desempate) {
            case 1: 
            voto_hiram= voto_hiram +1;
            break;
            case 2: 
                voto_angel =voto_angel +1;
                break;
            case 3: 
            voto_omar = voto_omar+1;
            break;
        }
    } while (![1,2,3].includes(desempate));

    maxvotos = Math.max(voto_hiram, voto_angel, voto_omar);
    ganadores = [];
    if(voto_hiram === maxvotos) ganadores.push("Hiram");
    if(voto_angel === maxvotos) ganadores.push("Ángel");
    if(voto_omar === maxvotos) ganadores.push("Omar");
}

let porcentaje = ((maxvotos / totalVotos) * 100).toFixed(2);


document.getElementById("resultados").innerHTML = `
    <p>Votos Hiram: ${voto_hiram}</p>
    <p>Votos Ángel: ${voto_angel}</p>
    <p>Votos Omar: ${voto_omar}</p>
    <p>Votos nulos: ${voto_nulos}</p>
    <p>Total de votos: ${totalVotos}</p>
    <p>Ganador: ${ganadores[0]}</p>
    <p>Porcentaje de aceptación del ganador: ${porcentaje}%</p>
`;