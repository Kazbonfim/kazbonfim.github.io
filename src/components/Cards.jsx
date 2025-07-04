import React from 'react'
import sagan from '../images/carl_sagan.jpg'
import gibson from '../images/neuromancer.jpg'
import nodejs from '../images/nodejs.png'
import re4 from '../images/re4.jpg'
import zelda from '../images/zelda.avif'
import rdr2 from '../images/rdr2.jpg'

function Cards() {
    const fallbackImg = 'https://placehold.co/220x220/png?text=Sem+Imagem'

    const suggestions = [
        {
            title: 'Um Mundo Assombrado Pelos Demônios',
            descr: 'Recomendo muito esse Livros do Sagan! Ele explica, de forma clara, como o ceticismo científico nos protege de enganos.',
            img: sagan,
            alt: 'Um Mundo Assombrado por Demônios',
            type: 'Livros',
            store: 'https://amzn.to/4lCldgI'
        },
        {
            title: 'Neuromancer',
            descr: 'Gosto muito de Neuromancer, de William Gibson! Um mergulho em tecnologia, ciberespaço e inteligência artificial.',
            img: gibson,
            alt: 'Neuromancer',
            type: 'Livros',
            store: 'https://amzn.to/4lbZ8Wm'
        },
        {
            title: 'Programação Web Com Node & Express',
            descr: 'Uso Node.js nos meus projetos e gosto muito! Uma plataforma JavaScript que facilita a criação de servidores escaláveis, e que conta com uma vasta biblioteca de recursos.',
            img: nodejs,
            alt: 'Programação Web Com Node E Express',
            type: 'Livros',
            store: 'https://amzn.to/4ldG1LO'
        },
        {
            title: 'Resident Evil 4',
            descr: 'Um dos meus jogos favoritos. Atmosfera intensa, combate envolvente e uma das melhores reimaginações da franquia.',
            img: re4,
            alt: 'Resident Evil 4',
            type: 'Jogos',
            store: 'https://amzn.to/44IdPL3'
        },
        {
            title: 'Breath of The Wild',
            descr: 'Aventura, exploração e puzzles marcantes. Zelda é uma inspiração em design de jogos e narrativa épica.',
            img: zelda,
            alt: 'Breath of The Wild',
            type: 'Jogos',
            store: 'https://amzn.to/4lHlPBU'
        },
        {
            title: 'Red Dead Redemption 2',
            descr: 'História cinematográfica e imersão total no velho oeste. Um marco em narrativa e realismo nos games.',
            img: rdr2,
            alt: 'Red Dead Redemption 2',
            type: 'Jogos',
            store: 'https://amzn.to/3I5smrw'
        }
    ]

    return (
        <div className='container'>
            <h1 className='text-start text-light'>Indicações + Links</h1>
            <div className='row g-3'>
                {suggestions.map((item, index) => (
                    <div className="col-12 col-md-4" key={index}>
                        <div className="uk-card uk-card-default h-100 d-flex flex-column">
                            {/* Imagem no topo */}
                            <div className="uk-card-media-top">
                                <img
                                    src={item.img || fallbackImg}
                                    className="img-fluid w-100"
                                    style={{ height: '300px', objectFit: 'cover' }}
                                    alt={item.alt}
                                />
                            </div>

                            {/* Conteúdo no meio */}
                            <div className="uk-card-body flex-grow-1">
                                {/* <h5>{item.title} <small className="text-muted">{item.type}</small></h5> */}
                                <h2>{item.title} <small className="text-muted">{item.type}</small></h2>
                                <p>{item.descr}</p>
                            </div>

                            {/* Rodapé com botão fixo */}
                            <div className="p-3 border-top">
                                <h3 className='ms-3'>
                                    <a href={item.store} target="_blank" rel="noopener noreferrer">
                                        <span className="badge bg-warning text-dark">Amazon</span>
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards
