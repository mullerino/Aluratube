import styled from 'styled-components'
import Banner from '../src/components/Banner';
import { CSSReset } from '../src/components/CSSReset'
import Menu from '../src/components/Menu';
import config from '../config.json'
import { StyledTimeline } from '../src/components/Timeline';
import Favoritos from '../src/components/Favoritos';


function HomePage() {
    return (
        <>
        <CSSReset/>
        <div>
            <Menu/>
            <Banner url = 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
            <Header/>
            <TimeLine playlists={config.playlists} />
            <Favoritos info = {config.favoritos}/>
        </div>
        </>
    );
}

export default HomePage


const StyledHeader = styled.div`
    .user-info{
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap:16px;
    }
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
`;

function Header() {
    return (
        <StyledHeader>
            <section className="user-info">
                <img src="https://avatars.githubusercontent.com/u/75099666?v=4"></img>
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
        </StyledHeader>
    )
}

function TimeLine(props) {
    const playlistsNames = Object.keys(props.playlists)

    return (
        <StyledTimeline>
            {playlistsNames.map((playlistsName) => {
                const videos = props.playlists[playlistsName]

                return (
                    <section>
                        <h2>{playlistsName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url} target ="_blank">
                                        <img src={video.thumb}></img>
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>

                    </section>
                )
            })}
        </StyledTimeline>
    )
}