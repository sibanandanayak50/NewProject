import { ALL_TEXT_VALUE } from "../actions/actionTypes";

const initialState = {
    inputText: '',
    inputTextList: []
}

const allTextValueReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_TEXT_VALUE:
            action.data.list.push(action.data.input)
            return { ...state, inputTextList: action.data.list, inputText: '' }
        default:
            return state;
    }
};

export default allTextValueReducer;