export const MAKE_GUES = 'MAKE_GUES';
export const RESET_GAME = 'RESET_GAME';

export const makeGues = (gues) => ({
  type: MAKE_GUES,
  payload: gues,
});

export const resetGame = () => ({
  type: RESET_GAME,
});
