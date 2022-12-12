// Script para realizar a mudança na 'horizontalColumn' ao realizar o Scroll.
let doc, body, html1
addEventListener('load', () => {
    doc = document;
    body = document.body;
    html1 = doc.documentElement;
    addEventListener('scroll', () => {
        document.getElementById('horizontalColumn').style.backgroundColor = html1.scrollTop > 90 ? 'rgba(245, 245, 245, 0.9)' : '#474c68';
        document.getElementById('footer').style.color = html1.scrollTop > 90 ? 'black' : 'whitesmoke';
    })
})