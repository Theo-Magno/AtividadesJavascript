function calcularTempo() {
    let dataInformada = prompt("Digite a data (dd/mm/aaaa):");
    let dataAtual = new Date();
    let dataAlvo = null;

    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dataInformada)) {
        alert("Formato de data inválido. Por favor, digite no formato dd/mm/aaaa.");
        return;
    }

    let partesData = dataInformada.split("/");
    let dia = parseInt(partesData[0]);
    let mes = parseInt(partesData[1]);
    let ano = parseInt(partesData[2]);

    // Verificar se o mês está entre 1 e 12
    if (mes < 1 || mes > 12) {
        alert("Mês inválido. Por favor, insira um valor entre 1 e 12.");
        return;
    }

    // Verificar se o dia é válido para o mês especificado
    let ultimoDiaDoMes = new Date(ano, mes, 0).getDate(); // Ao passar 0 no parâmetro de dia, retorna o total de dias do mês
    if (dia < 1 || dia > ultimoDiaDoMes) {
        alert(`Dia inválido para o mês especificado. O mês ${mes} tem entre 1 e ${ultimoDiaDoMes} dias.`);
        return;
    }

    dataAlvo = new Date(ano, mes - 1, dia);

    let anos = dataAlvo.getFullYear() - dataAtual.getFullYear();
    let meses = dataAlvo.getMonth() - dataAtual.getMonth();
    let dias = dataAlvo.getDate() - dataAtual.getDate();

    // Ajustar os valores negativos
    if (dias < 0) {
        meses--;
        dias += new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0).getDate();
    }
    if (meses < 0) {
        anos--;
        meses += 12;
    }

    alert(`Faltam ${anos} anos, ${meses} meses e ${dias} dias até a data informada.`);
}
