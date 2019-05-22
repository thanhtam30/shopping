import * as Types from './Types'
import axios from 'axios';
// GET CART
export const getCart = () => dispatch => {
  axios.get('/api/cart')
    .then(res => dispatch({
      type: Types.GET_CART,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: Types.GET_CART,
      payload: null
    }))
}
//Them cart
export const addToCart = (cart) => dispatch => {
  axios.post('/api/cart', cart)
    .then(res => dispatch({
      type: Types.ADD_TO_CART,
      payload: res.data
    })).catch(err => dispatch({
      type: Types.ADD_TO_CART,
      payload: null
    }))
}

//update
// UPDATE CART
// UPDATE CART
export function updateCart(_id, unit, cart){
  // Create a copy of the current array of books
  const currentBookToUpdate = cart
  // Determine at which index in books array is the book to be deleted
  const indexToUpdate = currentBookToUpdate.findIndex(
    function(book){
      return book._id === _id;
    }
  )

  const newBookToUpdate = {
    ...currentBookToUpdate[indexToUpdate],
    quantity: currentBookToUpdate[indexToUpdate].quantity + unit
  }

  let cartUpdate = [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]

  return function(dispatch){
    axios.post("/api/cart", cartUpdate)
      .then(function(response){
        dispatch({type:Types.UPDATE_CART, payload:response.data})
      })
      .catch(function(err){
        dispatch({type:"UPDATE_CART_REJECTED", msg: 'error when adding to the cart'})
      })
  }
}

// DELETE FROM CART
export const deleCart = (cart) => dispatch => {
 if(window.confirm('Ban co muon xoa khong')) {
    axios.post('/api/cart', cart)
    .then(res => dispatch({
      type: Types.DELETE_CART_ITEM,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: Types.DELETE_CART_ITEM,
      payload: null
    }))
  }

}

//
export const clearCart=()=>{
  return {
      type:Types.CLEAR_CART
  }
}

