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
    //console.log(nW);
    // esta com erro quando texto inicia com espaço em branco (inicio da array) (29/08/2020)
    // erro com mais de um espaço em branco entre palavras (31/08/2020)
    // erro quando possui apenas um palavra e ponto final (31/08/2020)
    
    for (let i = 0; i < nW.length; i++) {        

        if ( i == 0 && nW[i] != " "){
            if (  nW[i].indexOf(".") >= 0 ) {
                let w = nW[i];
                let firstLetter = w[0];
                w = firstLetter.toUpperCase() + w.slice(1);
                nW[i] = w;
                let w1 = nW[i+1];
                let firstLetter1 = w1[0];
                w1 = firstLetter1.toUpperCase() + w1.slice(1);
                nW[i+1] = w1;
            } else {
                nW[i] == nW[i+1];
                /* let w = nW[i];
                let firstLetter = w[0];
                w = firstLetter.toUpperCase() + w.slice(1);
                nW[i] = w; */
            }
            
        } else if ( nW[i].indexOf(".") >= 0 && nW.length < i ){
            let w = nW[i+1];
            let firstLetter = w[0];
            w = firstLetter.toUpperCase() + w.slice(1);
            nW[i+1] = w;
        } else if (nW == " ") {
            console.log("É um espaço ->" + nW[i]);
        }
    }
    console.log(nW.join(" "));
}
