import {createAction, handleActions} from 'redux-actions';

const CHANGE_MENU = 'common/CHANGE_MENU';

export const changeMenu = createAction(CHANGE_MENU,
    ({menu}) => ({menu}),
);

const initialState = {
    menu: 'about',
};

const menu = handleActions({
    [changeMenu]: (state, {payload: menu}) => ({
        ...state,
        menu
    })
}, initialState);

export default menu;