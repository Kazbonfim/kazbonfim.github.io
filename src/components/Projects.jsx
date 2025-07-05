import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const query = `
      query {
        user(login: "Kazbonfim") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                id
                name
                description
                stargazerCount
                url
              }
            }
          }
        }
      }
    `

        axios.post('/api/github-graphql', { query })
            .then(response => {
                const pinnedRepos = response.data.data.user.pinnedItems.nodes
                setProjects(pinnedRepos)
            })
            .catch(error => console.error(error))
    }, [])

    return (
        <div id='projetos' className='container mt-4'>
            <h1 className='text-light'>Meus Projetos</h1>
            <div className='row'>
                {projects.map(proj => (
                    <div key={proj.id} className="col-12 col-md-12 col-lg-4 text-dark p-3 d-flex">
                        <div className="card text-bg-dark h-100 w-100">
                            <div className="card-header">
                                <span className="uk-margin-small-right" uk-icon="github-alt"></span> Github
                            </div>
                            <div className="card-body">
                                <h4 className='card-title d-flex justify-content-between align-items-start flex-wrap'>
                                    <span>{proj.name}</span>
                                    <a href={proj.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                        Abrir
                                    </a>
                                </h4>
                                <hr />
                                <p className="card-text">{proj.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h3 className='text-center text-light my-2 my-md-0'>
                <a href="#">
                    <span uk-icon="icon: arrow-up; ratio: 1"></span>
                    Voltar ao topo
                </a>
            </h3>
        </div>
    )
}

export default Projects
