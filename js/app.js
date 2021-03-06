/*
    App Text Converter
    By iMarcaos 
    Project Started: 22/08/2020
    Version: 0.2-10.20
*/

function outputText(textOut) {
    document.getElementById('textInOut').value = textOut;
    //console.log("Texto de Saída " + textOut);    
}

function uCase() { //Converte o texto para todas as letras maiúsculas
    let textIn = "";
    textIn = document.getElementById("textInOut").value.toUpperCase();
    //console.log("Função upCase " + textIn);
    outputText(textIn);
}

function lCase() { //Converte o texto para todas as letras minúsculas
    let textIn = "";
    textIn = document.getElementById("textInOut").value.toLowerCase();
    outputText(textIn);
}


function uCaseSentence() { //Converte a primeira letra do parágrafo para maiúscula
  let textIn = document.getElementById("textInOut").value;
  let textOut = ufirstChar(textIn);
  outputText(textOut);
}

function ufirstChar(inTransit) {
    let convertedString = inTransit.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});
    return convertedString;
}



/* textos para testes:

-meu texto começa aqui. a seguir vem outro texto.
aqui.
-meu.texto .texto
-meu. texto .texto
-meu. texto . texto

*/