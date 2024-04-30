type HeaderProps = {
    gameStart: boolean,
}

export function Header({ gameStart }: HeaderProps) {
    return (
        <header>{!gameStart ? 'Welcome to Tic Tac Toe!' : 'Tic Tac Toe'}</header>
    )
}