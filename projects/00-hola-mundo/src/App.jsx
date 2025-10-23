import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Paco',
        isFollowing: false
    },
    {
        userName: 'Paco',
        name: 'Tomas',
        isFollowing: true

    }
]

export function App() {
    // const formatUserName = (userName) => `@${userName}`;
    // const formattedUserName = (<span>@{userName}</span>)
    // return (
    //     <section className='App'>
    //         <TwitterFollowCard
    //             // formattedUserName={formatUserName}
    //             initialIsFollowing={true}
    //             userName='midudev'
    //         >
    //             {/* usando children */}
    //             Miguel Angel Duran
    //         </TwitterFollowCard>
    //         <TwitterFollowCard
    //             // formattedUserName={formatUserName}
    //             isFollowing={false}
    //             userName='pheralb'
    //         >
    //             Alex Fernando Coro
    //         </TwitterFollowCard>

    //     </section>
    // )

    //recibiendo arrays 
    return (
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard
                            key = {userName}
                            userName={userName}
                            isFollowing={isFollowing}
                        >
                        {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )

}