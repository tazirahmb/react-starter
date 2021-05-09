import { ACTIONS } from '~/constants';
import { setCountdown } from '~/utils/timers';

export function updateCountdown(seconds) {
  return {
    type: ACTIONS.COUNTDOWN,
    seconds,
  };
}

export function startCountdown(seconds, finishCountdown) {
  return (dispatch) => {
    const _updateCountdown = (_seconds) => {
      dispatch(updateCountdown(_seconds));
    };

    setCountdown(seconds, _updateCountdown, finishCountdown);
  };
}
