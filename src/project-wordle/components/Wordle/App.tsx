import Game from '../Game';
import Header from '../Header';

function Wordle() {
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game />
      </div>
    </div>
  );
}

export default Wordle;
