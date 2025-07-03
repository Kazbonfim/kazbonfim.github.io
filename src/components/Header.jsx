import React, { useEffect, useState } from 'react';
import axios from "axios";

export const Header = ({ username }) => {
    const [avatarUrl, setAvatar] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        // Faz a requisição para a API do GitHub
        axios
            .get(`https://api.github.com/users/${username}`)
            .then(res => {
                setAvatar(res.data.avatar_url); // Atualiza o URL do avatar
            })
            .catch(error => {
                console.log('Erro ao buscar dados do avatar', error.stack);
                // setError('Usuário não encontrado, ou erro na API');
                setAvatar('/images/github_avatar.png') // Avatar padrão em caso de erro
            });
    }, [username]);

    if (error) {
        return <p>{error}</p>;
    }

    if (!avatarUrl) {
        return (
            <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Carregando...</span>
            </div>
        );
    }

    return (
        <div className='container text-center my-3 position-relative'>
            {/* Header */}
            <div>
                <h1 className='display-3 text-primary text-shadow'>Kazbonfim v4.1
                    <span><h4 className='text-light'><i>Lucas Bonfim de Jesus, Software Developer Jr.</i></h4></span>
                </h1>

            </div>
            <div
                className="position-absolute start-0 top-50 translate-middle-y ms-4 hoverEffect"
                style={{ zIndex: 10 }}
            >
                <a href="https://github.com/Kazbonfim" target="_blank" rel="noopener noreferrer">
                    <img
                        src={avatarUrl}
                        alt="Avatar do GitHub"
                        style={{ width: 100, height: 100, borderRadius: '50%' }}
                    />
                </a>
            </div>
        </div>
    );
};
