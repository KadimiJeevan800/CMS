const reducer=(state,action)=>
{
    
    if(action.type==="INC")
    {
        return(state=state+1) ;
    }
    if(action.type==="DEC")
    {
        return(state=state-1) ;
    }
    if(action.type==="INT")
    {
        return 0;
    }
    return state;
}

export default reducer