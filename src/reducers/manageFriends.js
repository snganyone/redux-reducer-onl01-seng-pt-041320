let state = {friends: []};

export function manageFriends(state, action){
    switch(action.type){
        case 'ADD_FRIEND': 
            return {friends: state.friends.push(state.friends)}
        case 'REMOVE_FRIEND':
            return {...state.friends}
        default:
            return state
    }
}
