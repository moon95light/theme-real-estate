const initialData = {
	list : []
}
const todoReducers = (state = initialData, action) =>{
	switch(action.type){
		case "ADD_TODO" : 
		const {id, data} = action.payload;
		 // console.log(action);
		return{
			...state,
			list: [
				...state.list,
				{
					id: id,
					data: data,
				}
			]
		}
		case "DELETE_TODO" : 
		const newList = state.list.filter((elem) => elem.id !== action.id)
		
		return{
			...state,
			list: newList 
		}
		
		case "REMOVE_TODO" : return{
			...state,
			list: []
		}
		default: return state;
        
        /* case "EDIT_TODO" : 
        const newEditItem = state.list.find((elem) => elem.id === id)
        return{
            ...state,
			list: newEditItem 
        } 
        ////diffrent type
        case "EDIT TODO" :
        const editItem = (id) => {
            let newEditItem = state.list.find((elem) => {
                return elem.id === action.id
            }); 
            console.log(newEditItem);
        } */   
	}
}
export default todoReducers;