import React from 'react';

export const HeaderMenu = () => {

    function handleButton(url) {
        window.location.href = url;
    }

    return (
        <div className='container text-center mt-3 position-relative'>

            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button onClick={() => handleButton('#')} type="button" className="btn btn-outline-dark">Projetos</button>
                <button onClick={() => handleButton('https://www.linkedin.com/in/kazbonfim/')} type="button" className="btn btn-outline-dark">Linkedin</button>
                <button onClick={() => handleButton('https://github.com/Kazbonfim')} type="button" className="btn btn-outline-dark">GitHub</button>
            </div>

            <button onClick={() => handleButton('#')} type="button" className="btn btn-outline-success ms-3" hidden>WhatsApp</button>

            <hr />
        </div>
    );
};
