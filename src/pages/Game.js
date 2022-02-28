import React, { useEffect } from 'react'
import Window from '../components/game_engine/rendering_engine/Window/Window'


const Game = () => {
    Window()
    Window.createWindow();
    return(<div></div>)
}

export default Game