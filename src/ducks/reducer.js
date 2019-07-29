const initialState ={
    cart: []
}

//actions
const ADD_TO_CART = "ADD_TO_CART";
const CHECKOUT = "CHECKOUT";
const REMOVEITEM = "REMOVEITEM"

export function removeFromCart( id ){
    return{
        type: REMOVEITEM,
        payload: id
    }
}


export function addToCart( id ) {
    return {
        type: ADD_TO_CART,
        payload: id
    }
}


export function checkOut() {
  return {
    type: CHECKOUT,
    payload: null
  }
}

//reducer
export default function reducer(state = initialState, action){
    switch (action.type){
        case ADD_TO_CART:
            if(state.cart.indexOf(action.payload)=== -1){
                return {
                    cart: [...state.cart, action.payload]
                }
            }
            break;
        case REMOVEITEM:
            let tempCart = state.cart.slice()
            console.log(action.payload)
            console.log(tempCart)
            tempCart = tempCart.filter(function(c){
                if(c === action.payload){
                    return false
                }
                return true
            })
            console.log(tempCart)
            return {
                cart: tempCart
            }
        default: 
            return state
    }
}

//action creators
