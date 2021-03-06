import { assign } from '../../../shared/utils';

import * as actions from '../../../dashboard/store/actions';
import * as states from '../../../dashboard/store/states';

export function reducer(state: states.State = states.initialState, action: actions.Actions) {
  switch (action.constructor) {

    case actions.LoadTitleAction:
      return handleLoadTitleAction(action as actions.LoadTitleAction, state);

    default:
      return state;
  }
}

function handleLoadTitleAction(action: actions.LoadTitleAction, state: states.State) {
  return assign(state, {
    title: action.title,
  });
}
