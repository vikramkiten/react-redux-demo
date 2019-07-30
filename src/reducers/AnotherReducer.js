function AnotherReducer(state,action)
{
    switch(action.type)
    {
        case "ACTION1":
            return {item:"action1"}
        default:
            return {item:"action2"}
    }
}

export default AnotherReducer;