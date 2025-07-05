import React, { useRef, useEffect } from 'react'

const fallbackImg = 'https://placehold.co/220x220/png?text=Sem+Imagem'

const inspirations = [
    {
        name: 'Ada Lovelace',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg',
        description: 'Pioneira da programação e matemática',
        bio: 'https://www.ufmg.br/espacodoconhecimento/ada-lovelace-a-primeira-programadora-da-historia/'
    },
    {
        name: 'Steve Jobs',
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg',
        description: 'Co-fundador da Apple',
        bio: 'https://pt.wikipedia.org/wiki/Steve_Jobs'
    },
    {
        name: 'Steve Wozniak',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Steve_Wozniak_by_Gage_Skidmore.jpg',
        description: 'Co-fundador e engenheiro da Apple',
        bio: 'https://www.britannica.com/biography/Stephen-Gary-Wozniak'
    },
    {
        name: 'Linus Torvalds',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/LinuxCon_Europe_Linus_Torvalds_03.jpg',
        description: 'Criador do Linux',
        bio: 'https://www.britannica.com/biography/Linus-Torvalds'
    },
    {
        name: 'John Romero',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/John_Romero_-_GDC_2022_%28cropped%29.jpg',
        description: 'Desenvolvedor de jogos (Doom)',
        bio: 'https://pt.wikipedia.org/wiki/John_Romero'
    },
    {
        name: 'Hideo Kojima',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Hideo_Kojima_2025_SXSW_%28cropped%29.jpg',
        description: 'Designer de jogos (Metal Gear)',
        bio: 'https://dropsdejogos.uai.com.br/noticias/industria/quem-e-hideo-kojima-o-criador-de-metal-gear-e-death-stranding/'
    },
    {
        name: 'Michael Scott',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Steve_Carell_at_the_2010_SAG_Awards.jpg/250px-Steve_Carell_at_the_2010_SAG_Awards.jpg',
        description: 'Ex-gerente regional da Dundler Mifflin',
        bio: 'https://theoffice.fandom.com/wiki/Michael_Scott'
    }
]

function Inspirations() {
    const sliderRef = useRef(null)
    const isDragging = useRef(false)
    const startX = useRef(0)
    const scrollLeft = useRef(0)

    const startDrag = (e) => {
        isDragging.current = true
        startX.current = e.pageX - sliderRef.current.offsetLeft
        scrollLeft.current = sliderRef.current.scrollLeft
        document.body.style.userSelect = 'none' // bloqueia seleção no body inteiro
    }

    const stopDrag = () => {
        isDragging.current = false
        document.body.style.userSelect = '' // libera seleção depois
    }

    const onDrag = (e) => {
        if (!isDragging.current) return
        e.preventDefault()
        const x = e.pageX - sliderRef.current.offsetLeft
        const walk = (x - startX.current) * 1.2
        sliderRef.current.scrollLeft = scrollLeft.current - walk
    }

    useEffect(() => {
        // garante que ao soltar fora do slider, ainda funcione
        window.addEventListener('mouseup', stopDrag)
        window.addEventListener('mouseleave', stopDrag)
        return () => {
            window.removeEventListener('mouseup', stopDrag)
            window.removeEventListener('mouseleave', stopDrag)
        }
    }, [])

    return (
        <div className='container mb-3 mt-3'>
            <h1 className='text-start text-light'>Inspirações</h1>
            <div
                ref={sliderRef}
                className="d-flex gap-3 overflow-auto hide-scroll"
                style={{
                    cursor: isDragging.current ? 'grabbing' : 'grab',
                    scrollSnapType: 'x mandatory',
                    scrollBehavior: 'smooth',
                    WebkitOverflowScrolling: 'touch',
                }}
                onMouseDown={(e) => {
                    e.preventDefault()
                    startDrag(e)
                }}
                onMouseMove={onDrag}
            >
                {inspirations.map((person, index) => (
                    <div
                        key={index}
                        className="shadow uk-card uk-card-secondary uk-width-small"
                        style={{
                            minWidth: '200px',
                            maxWidth: '200px',
                            scrollSnapAlign: 'center',
                            userSelect: 'none',
                        }}
                    >
                        <div className="uk-card-media-top">
                            <a href={person.bio}>
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    onError={(e) => { e.target.onerror = null; e.target.src = fallbackImg }}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </a>
                        </div>
                        <div className="uk-card-body">
                            <h3 className="uk-card-title">{person.name}</h3>
                            <p>{person.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Inspirations
