function reverse(){
    const inputTextArea = document.getElementById('entrada-reverse');
    const outputTextArea = document.getElementById('saida-reverse');
    
    const inputText = inputTextArea.value.trim();
    const outputText = inputText.split('').reverse().join('');
    
    outputTextArea.value = outputText;
    // Associar a função inverterPalavra ao evento de clique do botão
    }
    document.getElementById('inverter').addEventListener('click', reverse);