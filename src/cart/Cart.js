import React, { useContext } from 'react'
import { StoreContext } from '../Menu/CONTEXT/StoreContext'
import './Cart.css'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const navi=useNavigate()
  const { cartitem, remove, food_list,getTotal,url } = useContext(StoreContext)
  function place(e){
    e.preventDefault()
    navi('/place')

  }
  console.log(cartitem)
  return (

  <div className='container'>
    <div className='cart'>
      <div className='cart1'>
        <div className='cart2'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>


        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartitem[item._id]) {
            return (

              <div><div className='cart3'>

                <img src={url+"/Images/"+item.image} />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartitem[item._id]}</p>
                <p>{item.price * cartitem[item._id]}</p>
                <p className='cross' onClick={() => remove(item._id)}> x</p>
              </div>
                <hr />
              </div>)
          }

        })}

      </div>
      <div className='cart4'>
        <div className='cart5'>
          <h2>Cart Totals</h2>
          <div>
            <div className='cart6'>
              <p> Sub Total</p>
              <p>{getTotal()}</p>
            </div>
            <hr />
            <div className='cart6'>
              <p>Delivery Fee</p>
              <p>{25}</p>
            </div>
            <hr />
            <div className='cart6'>
              <b>Total</b> 
              <b>{getTotal()+25}</b>
            </div>

          </div>
          <button onClick={place}>PROCEED TO CHECKOUT</button>
        </div>
        <div>
          <div className='cart7'>
            <p>if you have promocode,Enter it here</p>
            <div className='cart8'>
              <input type="text" placeholder='promocode' />
              <button >Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Cart