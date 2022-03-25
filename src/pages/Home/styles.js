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
    row-gap: 2.2rem;
`

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 200px;
        height: 300px;
        border-radius: 1rem;
        margin-bottom: 2rem;
        /* box-shadow: 2px 1px 5px #ffffff;  */
        position: relative;
        margin-top: 5px;
    }

    span {
        font-weight: bold;
        font-size: 120%;
        text-align: center;
    }

    a {
        transition: all 0.3s;
    }

    a:hover{
        transform: scale(1.05);
    }

    .teste{
        height: 310px;
        width: 210px;
        /* border: 3.5px solid #fff; */
        position: absolute;
        border-radius: 1rem;
        /* box-shadow: 0 20px 35px rgba(0,0,0,0.3); */
        overflow: hidden;
    }

    .teste:before{
        content: "";
        height: 100%;
        width: 100%;
        position: absolute;
        border-radius: 1rem;
        background: conic-gradient(
            #9400D3, 
            #4B0082, 
            #0000FF, 
            #00FF00, 
            #FFFF00, 
            #FF7F00, 
            #FF0000,
            #9400D3);
            animation: spin 5s infinite linear;
        }

    @keyframes spin{
        100%{
            transform: rotate(-360deg)
        }
    }

    .teste:after{
        content: "";
        position: absolute;
        height: 280px;
        width: 180px;
        top: 3.5%;
        left: 3.5%;
        border-radius: 1rem;
        display: grid;
        place-items: center;
    }
`
