import { MAKE_GUES, RESET_GAME } from '../pages/actions';

const initialState = {
  number: Math.floor(Math.random() * 101),
  feedback: '',
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_GUES:
      const { number } = state;
      const gues = action.payload;
      let feedback = '';

      if (gues < number) {
        feedback = 'Не правильно, берите выше';
      } else if (gues > number) {
        feedback = 'Не правильно, берите ниже';
      }

      return {
        ...state,
        feedback,
      };

    case RESET_GAME:
      return {
        number: Math.floor(Math.random() * 101),
        feedback: '',
      };

    default:
      return state;
  }
};

export default gameReducer;
