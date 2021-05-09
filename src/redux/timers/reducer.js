import { ACTIONS } from '~/constants';

export function countdown(state = 0, action) {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (action.type) {
    case ACTIONS.COUNTDOWN:
      return action.seconds;
    default:
      return state;
  }
}
