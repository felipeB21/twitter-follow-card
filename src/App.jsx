import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard idName="twitter" name="Felipe Bolgar" />
            <TwitterFollowCard idName="midudev" name="Miguel Angel Duran" />
            <TwitterFollowCard idName="TeamMessi" name="Leo Messi" />
        </section>
    )
}