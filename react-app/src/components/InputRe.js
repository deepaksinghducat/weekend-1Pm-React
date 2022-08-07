export const InputReduce = (state,action) => {
    if(action.type === 'add') {
        return {
            input: action.data
        }
    }
    return state
}