import React from 'react'
import Navigation from './components/Navigation'
import Background from './components/Background'
import Planetary from './components/Planetary'

function App() {
    return (
        <div className="App">
            <div
                style={{ position: 'relative', height: '100vh', overflow: "hidden" }}
            >
                <Navigation />
                <Planetary />
                <Background />
            </div>
        </div>
    )
}

export default App
