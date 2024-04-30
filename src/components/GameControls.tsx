type GameControlsProps = {
    gameStart: boolean,
    setGameStart: (newGame: boolean) => void,
    resetGame: () => void,
}

export function GameControls({ gameStart, setGameStart, resetGame }: GameControlsProps) {
    return (
        <div>
            {!gameStart ? (
                <button onClick={() => setGameStart(true)}>Start spelet</button>
            ) : (
                <button onClick={resetGame}>Nytt spel</button>
            )}
        </div>
    );
}