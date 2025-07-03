import React from 'react'
import sagan from '../../public/images/carl_sagan.jpg'
import gibson from '../../public/images/neuromancer.jpg'
import nodejs from '../../public/images/nodejs.png'
import re4 from '../../public/images/re4.jpg'
import zelda from '../../public/images/zelda.avif'
import rdr2 from '../../public/images/rdr2.jpg'

function Cards() {
    return (
        <div className='container'>
            <h1 className='text-center text-light'>Indicações</h1>
            <div className='row g-3'>
                {/* Card Sagan */}
                <div className="col-12 col-md-4">
                    <div className="uk-card uk-card-default uk-card-hover h-100">
                        <div className="uk-card-media-top">
                            <img src={sagan} className="img-fluid w-100" style={{ height: '250px', objectFit: 'cover' }} alt="Um Mundo Assombrado por Demônios" />
                        </div>
                        <div className="uk-card-body">
                            <h3>Um Mundo Assombrado Pelos Demônios</h3>
                            <hr className="uk-divider-icon" />
                            <p>Recomendo muito esse livro do Sagan! Ele explica, de forma clara, como o ceticismo científico nos protege de enganos.</p>
                        </div>
                    </div>
                </div>
                {/* Card Neuromancer */}
                <div className="col-12 col-md-4">
                    <div className="uk-card uk-card-default uk-card-hover h-100">
                        <div className="uk-card-media-top">
                            <img src={gibson} className="img-fluid w-100" style={{ height: '250px', objectFit: 'cover' }} alt="Neuromancer" />
                        </div>
                        <div className="uk-card-body">
                            <h3>Neuromancer</h3>
                            <hr className="uk-divider-icon" />
                            <p>Gosto muito de Neuromancer, de William Gibson! Um mergulho em tecnologia, ciberespaço e inteligência artificial.</p>
                        </div>
                    </div>
                </div>
                {/* Card Node.js */}
                <div className="col-12 col-md-4">
                    <div className="uk-card uk-card-default uk-card-hover h-100">
                        <div className="uk-inline-clip uk-transition-toggle uk-card-media-top">
                            <img src={nodejs} className="img-fluid w-100" style={{ height: '250px', objectFit: 'cover' }} alt="Node.js" />
                        </div>
                        <div className="uk-card-body">
                            <h3>Node.js</h3>
                            <hr className="uk-divider-icon" />
                            <p>Uso Node.js nos meus projetos e gosto muito! Uma plataforma JavaScript que facilita a criação de servidores escaláveis.</p>
                        </div>
                    </div>
                </div>
                {/* Card Resident Evil 4 */}
                <div className="col-12 col-md-4">
                    <div className="uk-card uk-card-default uk-card-hover h-100">
                        <div className="uk-inline-clip uk-transition-toggle uk-card-media-top">
                            <img src={re4} className="img-fluid" style={{ height: '250px', objectFit: 'cover' }} alt="Resident Evil 4" />
                        </div>
                        <div className="uk-card-body">
                            <h3>Resident Evil 4</h3>
                            <hr className="uk-divider-icon" />
                            <p>Um dos meus jogos favoritos. Atmosfera intensa, combate envolvente e uma das melhores reimaginações da franquia.</p>
                        </div>
                    </div>
                </div>
                {/* Demais cards devem seguir esse padrão, até um próximo design ser feito */}
                {/* Card Zelda */}
                <div className="col-12 col-md-4">
                    <div className="uk-card uk-card-default uk-card-hover h-100">
                        <div className="uk-inline-clip uk-transition-toggle uk-card-media-top">
                            <img src={zelda} className="img-fluid w-100" style={{ height: '250px', objectFit: 'cover' }} alt="The Legend of Zelda" />
                        </div>
                        <div className="uk-card-body">
                            <h3>The Legend of Zelda</h3>
                            <hr className="uk-divider-icon" />
                            <p>Aventura, exploração e puzzles marcantes. Zelda é uma inspiração em design de jogos e narrativa épica.</p>
                        </div>
                    </div>
                </div>

                {/* Card Red Dead Redemption 2 */}
                <div className="col-12 col-md-4">
                    <div className="uk-card uk-card-default uk-card-hover h-100">
                        <div className="uk-inline-clip uk-transition-toggle uk-card-media-top">
                            <img src={rdr2} className="img-fluid w-100" style={{ height: '250px', objectFit: 'cover' }} alt="Red Dead Redemption 2" />
                        </div>
                        <div className="uk-card-body">
                            <h3>Red Dead Redemption 2</h3>
                            <hr className="uk-divider-icon" />
                            <p>História cinematográfica e imersão total no velho oeste. Um marco em narrativa e realismo nos games.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
