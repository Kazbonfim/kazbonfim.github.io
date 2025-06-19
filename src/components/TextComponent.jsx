import React, { useState, useEffect } from 'react';

export const TextComponent = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        const randomContent = ['Front-End', 'Back-End', 'Express', 'Sequelize', 'React', 'JSX', 'PHP', 'C', 'Axios', 'GitHub', 'Git', 'MySQL', 'MongoDB', 'Prisma'];

        // Define a função para atualizar o conteúdo
        const updateContent = () => {
            const randomIndex = Math.floor(Math.random() * randomContent.length);
            setContent(randomContent[randomIndex]);
        };

        // Atualiza o conteúdo a cada 3 segundos
        const intervalId = setInterval(updateContent, 3000);

        // Inicializa o conteúdo imediatamente
        updateContent();

        // Limpeza do intervalo quando o componente for desmontado
        return () => clearInterval(intervalId);
    }, []); // O array vazio faz a execução apenas uma vez após a montagem

    return (
        <div className="container text-center mt-3">
            <h1 className=' display-3'>Minhas skills:</h1>
            <h2 className='text-shadow display-5 text-primary'>{content}</h2>
        </div>
    );
};