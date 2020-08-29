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
    let textIn = "", nW = "";
    textIn = document.getElementById("textInOut").value.toLowerCase();
    //console.log(textIn);

    for (let i = 0; i < textIn.length; i++) {        
        console.log(textIn[i]);

        if (textIn.indexOf(" ") > i) {
            nW = textIn[i].toUpperCase();
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