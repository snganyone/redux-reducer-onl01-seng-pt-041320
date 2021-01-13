let state = {friends: []};

export function manageFriends(state, action){
    switch(action.type){
        case 'ADD_FRIEND': 
            return {...state, friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            let f = state.friends.find(f => f.id === action.id);

            return {...state, friends: [...state.friends.slice(f)]}
        default:
            return state
    }
}
