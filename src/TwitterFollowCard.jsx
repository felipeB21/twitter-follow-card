import { useState } from "react"

export function TwitterFollowCard ({ idName, name, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const followText = isFollowing ? 'Following' : 'Follow'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following'
    :  'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                className="tw-followCard-avatar"
                src={`https://unavatar.io/${idName}`}
                alt="Avatar de midudev" />
                <div className="tw-followCard-info">
                    <strong className="tw-followCard-infoUserName">{name}</strong>
                    <span className="tw-followCard-infoIdName">@{idName}</span>
                    <span>{isFollowing}</span>
                </div>
            </header>
            <aside className="tw-followCard-aside">
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-followText">{followText}</span>
                    <span className="tw-followCard-unfollow">Unfollow</span>
                </button>
            </aside>
        </article>
    )
}