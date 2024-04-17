import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_PENDING, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_PENDING, GET_PRODUCT_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_PENDING, POST_PRODUCT_SUCCESS, PUT_PRODUCT_ERROR, PUT_PRODUCT_PENDING, PUT_PRODUCT_SUCCESS } from "../action/action";


let initialState = {
    user: [],
    isLoading: false,
    isError: null,
}

let userReducer = (state = initialState, action) => {
    console.log(action, "action from  reducer");
    switch (action.type) {
        // get data
        case GET_PRODUCT_PENDING:{
            return{
                ...state,
                isLoading : true,
            };
        }
        case GET_PRODUCT_SUCCESS:{
            return{
                isLoading:false,
                user:action.data
            };
        }
        case GET_PRODUCT_ERROR:{
            return{
                ...state,
                isError:action.data
            };
        }

        //post data
        case POST_PRODUCT_PENDING:{
            return{
                ...state,
                isLoading : true,
            };
        }
        case POST_PRODUCT_SUCCESS:{
            return{
                isLoading:false,
                user:state.user.concat(action.data),
            };
        }
        case POST_PRODUCT_ERROR:{
            return{
                isError:action.data,
                ...state,
            };
        }

        //delete data
        case DELETE_PRODUCT_PENDING:{
            return{
                ...state, 
                isLoading:true,
            };
        }
        case DELETE_PRODUCT_SUCCESS:{
            return{
                isLoading:false,
                user:state.user.filter((e) => e.id !== action.data.id),
            };
        }
        case DELETE_PRODUCT_ERROR:{
            return{
                isLoading:false,
                isError:action.data,
            };
        }

        //put data
        case PUT_PRODUCT_PENDING:{
            return{
                ...state,
                isLoading: true,
            };
        }
        case PUT_PRODUCT_SUCCESS :{
            return{
                isLoading:false,
                user:state.user.map((value) =>{
                    if(value.id == action.data.id){
                        return{
                            ...value,
                            ...action.data,
                        };
                    }else{
                        return{
                            ...value,
                        };
                    }
                })
            };
        }
        case PUT_PRODUCT_ERROR:{
            return{
                isLoading:false,
                isError:action.data
            };
        }
        default:{
            return{
                ...state,
            };
        }
    }
}

export default  userReducer;