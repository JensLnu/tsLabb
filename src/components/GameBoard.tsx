type GameBoardProps = {
    squares: (string | null)[],
    handleClick: (i: number) => void,
}

export function GameBoard({ squares, handleClick }: GameBoardProps) {
    return (
        <div className='game-board'>
            {squares.map((square, i) => (
                <div className="square" key={i} onClick={() => handleClick(i)}>{square}</div>
            ))}
        </div>
    );
}