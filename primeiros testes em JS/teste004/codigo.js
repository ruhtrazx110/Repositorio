function gerar(){
    var nm = document.querySelector('div>input:nth-child(1)').value
    var vc = parseFloat(document.querySelector('div>input:nth-child(2)').value)
    var vp = parseFloat(document.querySelector('div>input:nth-child(3)').value)
    var data = new Date().toLocaleDateString()
    var horario = new Date().toLocaleTimeString()
    var troco = vp - vc
    Nsoli = (Math.floor(Math.random() * 10000000) + 1);
    var tabelaNota = document.getElementById('notaFiscal');
    var linhaNota = document.createElement('div');
    linhaNota.classList.add('linha');
    linhaNota.innerHTML = `
        <div class="celulas">${nm}</div>
        <div class="celulas">${data}</div>
        <div class="celulas">${horario}</div>
        <div class="celulas">${vc}</div>
        <div class="celulas">${vp}</div>
        <div class="celulas">${troco}</div>
        <div class="celulas">${Nsoli}</div>
    `
    tabelaNota.appendChild(linhaNota)
   
}