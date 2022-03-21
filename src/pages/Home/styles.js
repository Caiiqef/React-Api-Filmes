import styled from 'styled-components'

export const Container = styled.div`
    h1 {
        text-align: center;
        margin: 4rem 0;
    }
`

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 2frem;
`

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 2rem;
        box-shadow: 2px 1px 5px #ffffff; 
    }

    span {
        font-weight: bold;
        font-size: 120%;
        text-align: center;
        /* RAINBOW GRADIENT EFFECT */
        /* box-shadow: inset 0 0 12px 12px white, inset 0 0 13px 2px white;
        background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet); */
    }

    a {
        transition: all 0.3s;
    }

    a:hover{
        transform: scale(1.1);
    }
`

