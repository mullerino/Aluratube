import styled from 'styled-components'

function Favoritos(props) {
    const names = Object.keys(props.info)

    return (
        <StyledFav>
            <section>
                <h2>Favoritos</h2>
                <div className = 'container'>
                    {names.map((pessoa) => {
                        const infos = props.info[pessoa]
                        console.log(infos.nome)
                        return (
                            <div className='content'>
                                <img src={infos.url}></img>
                                <span>{infos.nome}</span>
                            </div>
                        )
                    })}
                </div>
            </section>
        </StyledFav>
    )
}

const StyledFav = styled.div`
    section{
        height: 160px;
        width: 300px;
        padding: 32px;
        margin-top: 20px;
    }

    h2{
        font-size: 16px;
        margin-bottom: 16px;
        text-transform: capitalize;
    }

    .container {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    .content{
        display: flex;
        flex-direction: column;
    }

    .content img{
        border-radius: 50%;
        width: 100px;
        height: 100px;
    }

    .content span{
        font-size: 13px;
        margin-bottom: 15px;
        text-align: center;
    }

    .content:hover{
        transform: scale(1.05);
        transition: transform 0.5s linear;
    }

`;

export default Favoritos