import React from 'react'
import sagan from '../../public/images/carl_sagan.jpg'
import gibson from '../../public/images/neuromancer.jpg'
import nodejs from '../../public/images/nodejs.png'

function Cards() {
    return (
        <div className='container'>
            <h1 className='text-center'>Indicações</h1>
            <div className='row g-3'>
                {/* Card Sagan */}
                <div className="col-12 col-md-4">
                    <div className="uk-card uk-card-default uk-card-hover h-100">
                        <div className="uk-card-media-top">
                            <img src={sagan} className="img-fluid w-100" style={{ height: '250px', objectFit: 'cover' }} alt="Um Mundo Assombrado por Demônios" />
                        </div>
                        <div className="uk-card-body">
                            <h3>Um Mundo Assombrado Pelos Demônios</h3>
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
                            <p>Uso Node.js nos meus projetos e gosto muito! Uma plataforma JavaScript que facilita a criação de servidores escaláveis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
