type ActionType = {
    type: string
}
export const TOOGLE_COLLAPSED = "TOOGLE-COLLAPSED"

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOOGLE_COLLAPSED:
            return {
                ...state,
                collapsed : !state.collapsed
            };
        default:
            throw new Error("Bad action type")
    }
    return state
}