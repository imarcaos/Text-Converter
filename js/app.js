/*
    App Text Converter
    By eMarcaos 
    Start Date: 22/08/2020
    Version: 0.1-8.20
*/

function outputText(textOut) {
    document.getElementById('textInOut').value = textOut;
    console.log("Texto de Saída " + textOut);    
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

function uCaseFirstParaghWord() { //Converte para maiúscula a primeira letra do paragráfo
    let textIn = "", nW = ""; // var text Input e new Word
    textIn = document.getElementById("textInOut").value.toLowerCase();
    nW = textIn.split(" ");    
    console.log(nW);
    // esta com erro quando texto inicia com espaço em branco (inicio da array) (29/08/2020)
    // não converte para maiúscula quando o ponto está na primeira array
    //nW = nW.splice(" ",nW.indexOf(" ") );
    for (let i = 0; i < nW.length; i++) {        

        if ( i == 0 ){
            let w = nW[i];
            let firstLetter = w[0];
            w = firstLetter.toUpperCase() + w.slice(1);
            nW[i] = w;
        } else if ( nW[i].indexOf(".") >= 0 ){
            let w = nW[i+1];
            let firstLetter = w[0];
            w = firstLetter.toUpperCase() + w.slice(1);
            nW[i+1] = w;
        }
    }
    console.log(nW.join(" "));
}

function ex_uCaseFirstParaghWord() { // fica como exemplo
    let textIn = "", nW = "";
    textIn = document.getElementById("textInOut").value.toLowerCase();
    nW = textIn.split(" ");
    for (var a = 0; a < nW.length; a++) {
        var w = nW[a];

        var firstLetter = w[0];
        w = firstLetter.toUpperCase() + w.slice(1);

        nW[a] = w;
    }
    console.log(nW.join(" "));
    //return nW.join(" ");
}


function auCaseFirstParaghWord() { //Converte para maiúscula a primeira letra do paragráfo
    let textIn = "", nW = "";
    textIn = document.getElementById("textInOut").value.toLowerCase();
    console.log(textIn && textIn[0].toUpperCase() + textIn.slice(1)); //nao funciona com primeiro espaço em branco

    for (let i = 0; i < textIn.length; i++) {       

        if (textIn.indexOf(" ") == i) {
            nW = textIn[i]
            console.log("-> " + i + " " + nW);
        }
        
        /*
        if ( i == 0) {
            //nW = textIn[i].toLowerCase().replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
            //console.log(nW);

        } else if (nW[i] ===  ".") {
            //nW += nW.toLowerCase().replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
            //console.log(nW);

        }
        */
            
    }
    
    //console.log('xxx1,xxx'.search('1\\,'));
}