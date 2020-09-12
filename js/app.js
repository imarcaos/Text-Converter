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
    // falta converter todas as palavras a seguir a quebra de linha (enter) 01/09/2020
    
    for (let i = 0; i < nW.length; i++) {
        
        console.log( verifyChar(nW[i]) );

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

            } else if ( nW[i].indexOf(".") >= 0 && nW.length <= 1 ) {
                
                if ( verifyChar(nW[i]) !== 0 ) {
                    console.log("Finded Char");

                }
                let w = nW[i];
                let firstLetter = w[0];
                w = firstLetter.toUpperCase() + w.slice(1);
                nW[i] = w;

            } else if ( nW[i].indexOf(".") >= 0 && nW.length > 1 && nW[i].indexOf("\n") === '\n' || nW[i].indexOf("\r") === '\r' ) {
                console.log('found enter key');

            } else {
                let w = nW[i];
                let firstLetter = w[0];
                w = firstLetter.toUpperCase() + w.slice(1);
                nW[i] = w;
            }
            
        } else if ( nW[i].indexOf(".") >= 0 && nW.length > i ) { 
            let w = nW[i+1];
            let firstLetter = w[0];
            w = firstLetter.toUpperCase() + w.slice(1);
            nW[i+1] = w;

        } else if (nW[i].indexOf("\n") === '\n' || nW[i].indexOf("\r") === '\r') { // função para procurar a tecla enter em teste 01/09/2020
            console.log('found enter key');
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
        //can improve more char tests here.
      };
    return charPosition;
}