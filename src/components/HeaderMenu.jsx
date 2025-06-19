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
                    <button className='uk-button uk-button-large uk-button-secondary w-100 fs-5' onClick={() => handleButton('https://github.com/Kazbonfim')}>GitHub</button>
                </div>
                <div className='col-12 col-sm-6 col-md-3'>
                    <button className='uk-button uk-button-large uk-button-secondary w-100 fs-5' onClick={() => handleButton('https://www.linkedin.com/in/kazbonfim/')}>Linkedin</button>
                </div>
                <div className='col-12 col-sm-6 col-md-3'>
                    <button className='uk-button uk-button-large uk-button-secondary w-100 fs-5' onClick={() => handleButton('https://wa.me/5511989374977')}>WhatsApp</button>
                </div>
                <div className='col-12 col-sm-6 col-md-3'>
                    <button className='uk-button uk-button-large uk-button-secondary w-100 fs-5' onClick={() => handleButton('#')} disabled>Projetos</button>
                </div>
            </div>

            <hr />
        </div>
    );
};
