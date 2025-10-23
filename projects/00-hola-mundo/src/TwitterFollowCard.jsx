
import { useState } from 'react'

export function TwitterFollowCard({ children, initialIsFollowing, userName = 'unknow',  }) {

    //state
    const [isFollowing, setFollowing] = useState(initialIsFollowing);
    //como actualizar el estado
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following'
        : 'tw-followCard-button';
    const handleClick = () => {
        setFollowing(!isFollowing);
    }


    const imgSource = `https://unavatar.io/${userName}`;
    // const addAt = (userName) => `@${userName}`;

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    src={imgSource}
                    alt="midu"
                    className='tw-followCard-avatar'>

                </img>
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span> 
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
}