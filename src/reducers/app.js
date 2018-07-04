import * as Act from 'actions';
import util from 'util';

const initState = {
    userInfo: util.getUserInfo(),
}

export default function app(state = initState, action) {
    switch(action.type) {
        default:
            return state;
    }
}
