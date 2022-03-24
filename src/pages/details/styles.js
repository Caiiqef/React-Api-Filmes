import  styled  from 'styled-components'

export const Container = styled.div`

    padding: 4rem 0;


    h1 {
        margin: 3rem 0;
    }

    .movie {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 250px;
        border-radius: 1rem;
        transition: all 2s;
        box-shadow: 0px 0px 15px #ffffff; 
    }

    img:hover{
        transform: scale(1.150);
    }

    .details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 3rem;
        max-width: 50%;
    }

    button{
        background: #6654da;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        color: white;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size: 100%;
        transition: all 0.3s;
    }

    button:hover{
        background: #5848c2;
    }

    span{
        line-height: 130%;
        margin-bottom: 1rem;
        font-size: 110%;
    }

    .release-date{
        opacity: 0.5;
    }
`