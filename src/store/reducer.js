/*
 * @Description: 
 * @Version: 2.0
 * @Autor: kakachake
 * @Date: 2019-09-29 16:53:10
 * @LastEditors: kakachake
 * @LastEditTime: 2019-09-29 17:15:54
 */
const defaultState = {
    focused: false
};

export default (state=defaultState, action) => {
    console.log(action);
    
    if(action.type === 'search_focus'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.focused = true
        return newState;
    }

    if(action.type === 'search_blur'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.focused = false
        return newState;
    }
    
    return state;
}