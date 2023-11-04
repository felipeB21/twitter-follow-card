import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard idName="github" name="felipeB21" />
            <TwitterFollowCard idName="react" name="React" />
            <TwitterFollowCard idName="TeamMessi" name="Leo Messi" />
        </section>
    )
}