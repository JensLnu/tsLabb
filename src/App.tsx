import { useEffect, useState } from 'react'
import './App.css'
import { GameMessage } from './components/GameMessage';
import { GameControls } from './components/GameControls';
import { Header } from './components/Header';
import { GameBoard } from './components/GameBoard';

function App() {
  const [gameStart, setGameStart] = useState(false);
  const [gameMessage, setGameMessage] = useState('');
  const [currentPlayer, setCurrentPlayer] = useState('O');
  const [squares, setSquares] = useState([...Array(9).fill(null)]);

  // kollar om det finns en vinnare eller om spelplanen är full varje gång 'squares' ändras
  useEffect(() => {
    if (checkWinner(currentPlayer)) setGameMessage(`vinnare är ${currentPlayer}!`);
    if (draw()) setGameMessage("It's a draw!");
  }, [squares])

  // om rutan man klickat på är tom så läggs spelarens symbol till i rutan i arrayen 'newSqueres' som sedan uppdaterar 'squares'
  // annars dyker det upp ett meddelande som säger att man försöker klicka i en ruta som det redan finns en symbol i
  const handleClick = (i: number) => {
    if (squares[i] === null) {
      setGameMessage('');
      const newSquares = [...squares];
      newSquares[i] = currentPlayer;
      setSquares(newSquares);
    } else {
      setGameMessage('Välj en tom ruta!');
      setTimeout(() => setGameMessage(''), 2000);
    }
  }

  // ändrar 'currentPlayer' till det motsatta
  // om något av dem nestlade arryerna i 'winPatterns' har  alla samma symbol som 'player' (X eller O) retunera true
  const checkWinner = (player: string) => {
    const winPatterns: number[][] = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6]            // diagonals
    ]
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    return winPatterns.some(pattern => pattern.every(index => squares[index] === player))
  }

  // om alla 'squares' inte har värdet 'null' retunera true
  const draw = () => {
    return squares.every(squar => squar !== null)
  }

  // skapar en ny array med 9e platser och alla har värdet 'null'
  // nollställer 'gameMessage'
  const resetGame = () => {
    setSquares([...Array(9).fill(null)]);
    setGameMessage('');
  }

  return (
    <>
      <Header gameStart={gameStart} />
      <main>
        <GameControls gameStart={gameStart} setGameStart={setGameStart} resetGame={resetGame} />
        {gameStart && (
          <>
            <GameBoard squares={squares} handleClick={handleClick} />
            <GameMessage message={gameMessage} />
          </>
        )}
      </main>
    </>
  )
}

export default App