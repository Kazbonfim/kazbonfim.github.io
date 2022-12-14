// Script para realizar a mudança na 'horizontalColumn' ao realizar o Scroll.
let doc, body, html1
addEventListener('load', () => {
    doc = document;
    body = document.body;
    html1 = doc.documentElement;
    addEventListener('scroll', () => {
        document.querySelector('body').style.backgroundColor = html1.scrollTop > 400 ? '#19191A' : '#0E6CC4';
    })
});

// Script para alterar a cor de fundo, conforme o scroll da página.
let doc1, head, html2
    addEventListener('load', () => {
        doc = document;
        head = document.head
        html2 = doc.documentElement
        addEventListener('scroll', () => {
            document.getElementById('waveSelector').href = html2.scrollTop > 400 ? './blackwave.css' : './wave.css';
        })
    })




