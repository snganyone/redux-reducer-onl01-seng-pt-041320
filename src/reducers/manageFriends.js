let state = {friends: []};

export function manageFriends(state, action){
    switch(action.type){
        case 'ADD_FRIEND': 
            return {...state, friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            let f = state.friends.find(x => x.id === action.id);
            console.log(f);
            return {...state, friends: [...state.friends.map(function(element){
                 if(element !== f){
                     return element;
                 }}).filter(item => typeof(item) !== 'undefined')]}
        default:
            return state
    }
}
