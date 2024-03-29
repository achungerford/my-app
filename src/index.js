import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// first React component, Square
/* renders a single <button> */
class Square extends React.Component {
    render() {
      return (
        <button className="square" onClick={() => { alert('click'); }}>
          {this.props.value}
        </button>
      );
    }
  }
  
  // second React component, Board, renders 9 squares
  class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i}/>;
    }
    // rendering the 9 squares
    render() {
      const status = 'Next player: X';

      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  // third React component, Game
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  