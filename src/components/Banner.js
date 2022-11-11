import styled from 'styled-components'

const StyledBanner = styled.div`
    section{
        margin-top: 50px;
        height: 250px;
        width: 100%;
    }

    img{
        height: 100%;
        width: 100%;
    }
`;

const Banner = function Banner(props) {
    return (
        <StyledBanner>
            <section>
                <img src={props.url}></img>
            </section>
        </StyledBanner>
    )
}

export default Banner