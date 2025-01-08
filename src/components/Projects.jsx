import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Projects = () => {

    return (
        <div className='container text-center'>
            <h1 className='display-3'>Meus projetos relevantes:</h1>
            <h2>Por hora, peço que acessem o Github, OK? 😓</h2>
        </div>
    )
    // const [repositories, setRepositories] = useState([]);
    // const [filteredRepos, setFilteredRepos] = useState([]);

    // const user = 'kazbonfim'; // Usuário do GitHub
    // const topicFilter = 'portfolio'; // Tópico a ser filtrado

    // useEffect(() => {
    //     const fetchRepositories = async () => {
    //         try {
    //             // Passo 1: Obter todos os repositórios do usuário
    //             const res = await axios.get(`https://api.github.com/users/${user}/repos`);
    //             const repos = res.data;

    //             // Passo 2: Obter detalhes de cada repositório para verificar os tópicos
    //             const filtered = [];
    //             for (const repo of repos) {
    //                 const topicsUrl = `https://api.github.com/repos/${user}/${repo.name}/topics`;
    //                 try {
    //                     const topicsRes = await axios.get(topicsUrl, {
    //                         headers: { Accept: 'application/vnd.github.mercy-preview+json' }, // Cabeçalho para acessar tópicos
    //                     });
    //                     if (topicsRes.data.names.includes(topicFilter)) {
    //                         filtered.push(repo);
    //                     }
    //                 } catch (error) {
    //                     console.error(`Erro ao buscar tópicos para ${repo.name}:`, error.message);
    //                 }
    //             }

    //             setRepositories(repos); // Todos os repositórios
    //             setFilteredRepos(filtered); // Repositórios filtrados pelo tópico
    //         } catch (error) {
    //             console.error('Erro ao carregar repositórios:', error.message);
    //         }
    //     };

    //     fetchRepositories();
    // }, [user, topicFilter]);

    // return (
    //     <div className="container text-center">
    //         <h1>Meus projetos mais relevantes:</h1>
    //         {filteredRepos.length > 0 ? (
    //             <ul>
    //                 {filteredRepos.map(repo => (
    //                     <li key={repo.id}>
    //                         <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
    //                             <h3>{repo.name}</h3>
    //                         </a>
    //                     </li>
    //                 ))}
    //             </ul>
    //         ) : (
    //             <p>Nenhum repositório encontrado com o tópico "{topicFilter}".</p>
    //         )}
    //     </div>
};
