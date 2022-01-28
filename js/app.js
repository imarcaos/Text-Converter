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

//Converte o texto para todas as letras maiúsculas
function upperCase() {
    let textIn = "";
    textIn = document.getElementById("textInOut").value.toUpperCase();
    //console.log("Função upCase " + textIn);
    outputText(textIn);
}

//Converte o texto para todas as letras minúsculas
function lowerCase() {
    let textIn = "";
    textIn = document.getElementById("textInOut").value.toLowerCase();
    outputText(textIn);
}

//Converte a primeira letra do parágrafo para maiúscula
function upperCaseSentence() {
  let textIn = document.getElementById("textInOut").value;
  let textOut = ufirstChar(textIn);
  outputText(textOut);
}

function ufirstChar(inTransit) {
    let convertedString = inTransit.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g,function(c){return c.toUpperCase()});
    return convertedString;
}

//Converte uma letra para maiúscula e outra para minúscula em todo o texto
function alternateChar() {
    let textIn = document.getElementById("textInOut").value.toLowerCase();
    textIn = textIn.split('');
    for (var i=0; i<textIn.length; i+=2) {
        textIn[i] = textIn[i].toUpperCase();
    }
    let textOut = textIn.join('');
    outputText(textOut);
}



/* textos para testes:

-meu texto começa aqui. a seguir vem outro texto.
aqui.
-meu.texto .texto
-meu. texto .texto
-meu. texto . texto

*/