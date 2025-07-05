import React from 'react';

export const HeaderMenu = () => {

    function handleButton(url) {
        window.location.href = url;
    }

    return (
        <div className='container text-center mt-3 position-relative'>
            {/* Botões do Header */}
            <div className='row g-2 justify-content-center'>
                <div className='col-12 col-sm-6 col-md-3'>
                    <button className='uk-button uk-button-large uk-button-secondary w-100 fs-5' onClick={() => handleButton('https://github.com/Kazbonfim')}><span className="uk-margin-small-right" uk-icon="github-alt"></span>GitHub</button>
                </div>
                <div className='col-12 col-sm-6 col-md-3'>
                    <button className='uk-button uk-button-large uk-button-secondary w-100 fs-5' onClick={() => handleButton('https://www.linkedin.com/in/kazbonfim/')}><span className="uk-margin-small-right" uk-icon="linkedin"></span>Linkedin</button>
                </div>
                <div className='col-12 col-sm-6 col-md-3'>
                    <button className='uk-button uk-button-large uk-button-secondary w-100 fs-5' onClick={() => handleButton('https://wa.me/5511989374977')}><span className="uk-margin-small-right" uk-icon="whatsapp"></span>WhatsApp</button>
                </div>
                <div className='col-12 col-sm-6 col-md-3'>
                    <button className='uk-button uk-button-large uk-button-secondary w-100 fs-5' onClick={() => handleButton('#projetos')}><span className="uk-margin-small-right" uk-icon="cog"></span>Projetos</button>
                </div>
            </div>
            <hr className="uk-divider-icon"></hr>
        </div>
    );
};
