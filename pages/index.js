import styled from 'styled-components'
import config from "../config.json"
import { CSSReset } from '../src/components/CSSReset'
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeline';

function HomePage() {
    const estiloHeader = {}

    return (
        <>
        <CSSReset/>
        <div style={estiloHeader}>
            <Menu/>
            <Header></Header>
            <TimeLine playlists={config.playlists} />
        </div>
        </>
    );
}

export default HomePage


const StyledHeader = styled.div`
    .user-info{
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