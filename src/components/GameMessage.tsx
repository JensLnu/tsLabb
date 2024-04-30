type GameMessageProps = {
  message: string
}

export function GameMessage({ message }: GameMessageProps) {
  return <p className='game-message'>{message}</p>;
}