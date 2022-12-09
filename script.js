// Script para realizar a mudança no 'hover' do avatar, á esquerda da página.
const avatar = document.querySelector('.avatar')
avatar.addEventListener('mouseover', (a) => {
    avatar.src = './resources/avatar.png'
    return
});

avatar.addEventListener('mouseout', (a) => {
    avatar.src = './resources/git.png'
    return
});

// Script para realizar a mudança na 'horizontalColumn' ao realizar o Scroll.
let doc, body, html1
addEventListener('load', () => {
    doc = document;
    body = document.body;
    html1 = doc.documentElement;
    addEventListener('scroll', () => {
        document.getElementById('horizontalColumn').style.backgroundColor = html1.scrollTop > 90 ? 'whitesmoke' : '#474c68';
    })
})