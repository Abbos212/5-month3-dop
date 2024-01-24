import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeGues, resetGame } from '../actions';
import classes from '../style.module.css'

const GuesGame = ({ number,  resetGame,  }) => {
    const [gues, setGues] = useState('');



    return (
        <div className={classes.block}>
          <input
            type="number"
            value={gues}
            onChange={(e) => setGues(e.target.value)}
          />
          {number !== null && (
            <div>
              {number > parseInt(gues, 10) ? (
                <p>Не правильно, берите выше</p>
              ) : number < parseInt(gues, 10) ? (
                <p>Не правильно, берите ниже</p>
              ) : number === "" ? (
                <p>Введите число</p>
              ) : (
                <div>
                  <p>Поздравляем, вы отгадали число!</p>
                  <button onClick={resetGame}>Заново</button>
                </div>
              )}
            </div>
          )}
        </div>
      );
};

const mapStateToProps = (state) => ({
    number: state.number,
    feedback: state.feedback,
});

export default connect(mapStateToProps, { makeGues, resetGame })(GuesGame);
