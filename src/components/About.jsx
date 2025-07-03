import React from 'react';

export const About = () => {
    return (
        <div className='container mt-3 mb-3 rounded'>
            <div className='text-light shadow p-4' style={{ backgroundColor: 'rgba(20, 93, 176, 0.5)' }}>
                <ul uk-accordion="multiple: true">
                    <li className="uk-open">
                        <a className="uk-accordion-title text-light" href="#">Quem sou eu?🧠</a>
                        <div className="uk-accordion-content">
                            <p>
                                <strong>Desenvolvedor Web</strong>, com <em>boas noções de lógica de programação</em>, e iniciando na área com <em>pequenos projetos</em>.
                                Me especializando no <strong>desenvolvimento back-end</strong>, mas com <em>boas noções de front-end</em>;
                                tenho <strong>conhecimentos sólidos em JavaScript</strong> e ferramentas e recursos do <strong>Node.js</strong> (como <strong>Express</strong> e <strong>Axios</strong>, para consumo direto de APIs).
                                Em busca de uma <strong>primeira oportunidade profissional</strong> na área, como <strong>Estagiário</strong> ou <strong>Desenvolvedor Jr.</strong>
                                <em>Comunicativo</em> e <em>companheiro</em>, gosto de <em>ajudar as pessoas</em> e também de <em>entender e procurar soluções para problemas</em>, sejam simples ou complexos.
                            </p>

                            <div className="mt-4 d-flex flex-wrap gap-2 justify-content-center">
                                <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
                                <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
                                <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
                                <img src="https://img.shields.io/badge/JSX-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="JSX" />
                                <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
                                <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
                                <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
                                <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                                <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
                                <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white" alt="Sequelize" />
                                <img src="https://img.shields.io/badge/Axios-5A29E8?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
                                <img src="https://img.shields.io/badge/Bootstrap%205-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap 5" />
                                <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
                                <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite" />
                            </div>
                            <hr className="uk-divider-icon"></hr>
                        </div>
                    </li>
                    <li>
                        <a className="uk-accordion-title text-light" href="#">Minhas experiências profissionais?🚀</a>
                        <div className="uk-accordion-content">
                            <p>
                                <strong>Profissional em transição para a área de Desenvolvimento Web</strong>, com sólida experiência em <strong>atendimento digital multicanal</strong> em empresas como <strong>Teleperformance (Nespresso)</strong> e <strong>Mercado Livre</strong>.
                                Forte habilidade em <em>comunicação</em>, <em>resolução de problemas</em> e <em>trabalho em equipe</em>, adquirida ao lidar com demandas diversas de forma ágil e empática.
                                Atualmente, estou me especializando em <strong>desenvolvimento back-end com Node.js</strong>, além de possuir <em>boas noções de front-end</em>.
                                Busco aplicar minha experiência em <em>entendimento de usuários</em> e <em>resolução de problemas</em> na criação de <strong>soluções eficientes e funcionais</strong> no ambiente de tecnologia.
                            </p>
                            <hr className="uk-divider-icon"></hr>
                        </div>
                    </li>
                    <li>
                        <a className="uk-accordion-title text-light" href="#">Meus hobbies?🤓</a>
                        <div className="uk-accordion-content">
                            <p>
                                Curto muito <strong>jogar videogames</strong>, tanto os <em>clássicos</em> quanto os <em>mais atuais</em>.
                                Também gosto bastante de <strong>ler</strong>, principalmente obras de <strong>Carl Sagan</strong>, <strong>Isaac Asimov</strong>, <strong>Philip K. Dick</strong> e <strong>Arthur C. Clarke</strong> — autores que me fazem pensar sobre o universo, tecnologia e o futuro.
                                Além disso, sou apaixonado por <strong>cinema</strong>, sempre em busca de bons filmes, seja pra refletir ou só curtir o momento.
                            </p>
                            <hr className="uk-divider-icon"></hr>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Conteúdo antigo / OLD */}
            <div className='shadow text-light border border-2 border-start-0 border-end-0 border-dark p-5' style={{ backgroundColor: 'rgba(20, 93, 176, 0.5)' }} hidden>
                <h3 className='text-light'>Sobre mim🧠<hr /></h3>
                <p>
                    Desenvolvedor Web, com boas noções de lógica da programação, e iniciando na área com pequenos projetos. Me especializando no desenvolvimento back-end, mas com boas noções de front-end; tenho conhecimentos sólidos em Javascript, e ferramentas e recursos do Node (como Express, e AXIOS, para consumo direto de APIs). Em busca de uma primeira oportunidade profissional na área, como Estagiário ou Desenvolvedor Jr.
                    Comunicativo, e companheiro, gosto de ajudar as pessoas, e também de entender e procurar soluções para problemas, sejam simples ou complexos.
                </p>
                {/* Badges no rodapé */}
                <div className="mt-4 d-flex flex-wrap gap-2 justify-content-center">
                    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
                    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
                    <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
                    <img src="https://img.shields.io/badge/JSX-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="JSX" />
                    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
                    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
                    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
                    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                    <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
                    <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white" alt="Sequelize" />
                    <img src="https://img.shields.io/badge/Axios-5A29E8?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
                    <img src="https://img.shields.io/badge/Bootstrap%205-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap 5" />
                    <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
                    <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite" />
                </div>
            </div>
        </div>
    );
};
