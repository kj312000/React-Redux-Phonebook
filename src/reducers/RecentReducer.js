export const RecentReducer = (state = [], action) => {
    const maxSize = 10;
    switch (action.type) {
        case 'RECENT':
            let recent = [...state];
            if(recent.length===maxSize){
                recent.shift()
            }
            recent.push(action.payload)
            return recent;
        default:
            return state
    }
}