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
    nW = clearList(textIn.split(" "), "");    
    console.log(nW);
    
    for (let i = 0; i < nW.length; i++) {
        
        if ( i == 0){

            if ( nW[i].indexOf(".") >= 0 && nW.length > 1 ) {
                let w = nW[i];
                let firstLetter = w[0];
                w = firstLetter.toUpperCase() + w.slice(1);
                nW[i] = w;
                let w1 = nW[i+1];
                let firstLetter1 = w1[0];
                w1 = firstLetter1.toUpperCase() + w1.slice(1);
                nW[i+1] = w1;

                if ( verifyChar(nW[i+1]) !== 0 ) {
                    let pChar = verifyChar(nW[i+1]);
                    let wd1 = nW[i+1].slice(0, pChar);
                    let wd2 = nW[i+1].slice(pChar+1);
                    let nextLetter = nW[i+1][pChar];
                    nW[i+1] = wd1 + nextLetter.toUpperCase() + wd2;
                }

            } else if ( nW[i].indexOf(".") >= 0 && nW.length <= 1 ) {
                let w = nW[i];
                let firstLetter = w[0];
                w = firstLetter.toUpperCase() + w.slice(1);
                nW[i] = w;
                console.log("posChar " + verifyChar(nW[i]));
                console.log("LenghtWord" + nW[i].length);
                
                if ( verifyChar(nW[i]) !== 0 && verifyChar(nW[i]) != nW[i].length ) {
                    let pChar = verifyChar(nW[i]);
                    let wd1 = nW[i].slice(0, pChar);
                    let wd2 = nW[i].slice(pChar+1);
                    let nextLetter = nW[i][pChar];
                    nW[i] = wd1 + nextLetter.toUpperCase() + wd2; 
                }
                
            } else {
                let w = nW[i];
                let firstLetter = w[0];
                w = firstLetter.toUpperCase() + w.slice(1);
                nW[i] = w;
            }
            
        } else if ( nW[i].indexOf(".") >= 0 ) {

            if ( verifyChar(nW[i]) !== 0 && verifyChar(nW[i]) != nW[i].length ) { // falha: aumentar tamanho letra a seguir ao ponto, mesma linha.
                
                let pChar = verifyChar(nW[i]);
                let wd1 = nW[i].slice(0, pChar);
                let wd2 = nW[i].slice(pChar+1);
                let nextLetter = nW[i][pChar];
                nW[i] = wd1 + nextLetter.toUpperCase() + wd2;
                console.log(verifyChar(nW[i]));

            } /* else if ( verifyChar(nW[i+1]) !== 0 && verifyChar(nW[i+1]) != nW[i+1].length ) { // erro: ponto final na ultima palavra e com enter no final sem palavras a seguir
                console.log("if 2");
                let pChar = verifyChar(nW[i+1]);
                let wd1 = nW[i+1].slice(0, pChar);
                let wd2 = nW[i+1].slice(pChar+1);
                let nextLetter = nW[i+1][pChar];
                nW[i+1] = wd1 + nextLetter.toUpperCase() + wd2;
                console.log(verifyChar(nW[i+1]));
            } */

        }

    }
    console.log(nW.join(" "));
}

function clearList(listA, busca) {
    let list = listA;
    let buscarPor = busca;
    let indice = list.indexOf(buscarPor);

    while(indice >= 0){
        list.splice(indice, 1);
        indice = list.indexOf(buscarPor);
    }
    return list;    
}

function verifyChar(palavra) {
    let wordFind = palavra;
    let charPosition = 0;    
    
     for (i = 0; i < wordFind.length; i++) {
        if (wordFind[i] === '\n' || wordFind[i] === '\r') {
          charPosition = i+1;
        };
      };
    return charPosition;
}