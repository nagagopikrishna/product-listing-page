// import {useState} from 'react'
// import { Link } from 'react-router-dom'
// import './index.css'


// const Cart = () =>{
//     const [cart, setCart] = useState(() => {
//   const storedCart = localStorage.getItem("cart");
//   if (!storedCart) return [];

//   try {
//     const parsedCart = JSON.parse(storedCart);
//     // Add quantity: 1 if missing or invalid
//     const fixedCart = parsedCart.map(product => ({
//       ...product,
//       quantity:
//         typeof product.quantity === "number" && product.quantity > 0
//           ? product.quantity
//           : 1,
//     }));
//     return fixedCart;
//   } catch (error) {
//     console.error("Error parsing cart from localStorage", error);
//     return [];
//   }
// });




//     const emptyCart = () =>{
//         return (
//             <div className='empty-cart-container'>
//                 <img src = "https://res.cloudinary.com/ddc7e5e7s/image/upload/e_background_removal/b_rgb:FFFFFF/f_png/v1746871034/png-transparent-empty-cart-illustration_jtit2l.png" alt = "empty-cart" className='empty-cart'/>
//                 <h1 className='empty-cart-heading'> Your Cart is Waiting! </h1>
//                 <p className='empty-cart-description'> Looks like you haven’t added anything yet. Let’s fix that and find something you’ll love. </p>
//                 <Link to="/">
//                     <button type='button' className='empty-cart-button'> Start Shopping </button>
//                 </Link>
//             </div>
//         )
//     }

//     const cartProducts = () =>{
//         return <h1> Cart Details </h1>
//     }

//     console.log(cart)
//     return(
//         <div>
//             {cart.length !== 0 ?  cartProducts(): emptyCart()}
//         </div>
//     )
// }


// export default Cart



import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Cart = () => {
  // Load cart with quantity fallback
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart')
    if (!storedCart) return []

    try {
      const parsedCart = JSON.parse(storedCart)
      return parsedCart.map(product => ({
        ...product,
        quantity:
          typeof product.quantity === 'number' && product.quantity > 0
            ? product.quantity
            : 1,
      }))
    } catch (error) {
      console.error('Error parsing cart', error)
      return []
    }
  })

  // Sync cart changes to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const increment = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
    )
  }

  const decrement = (id) => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === id
            ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 0) }
            : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  const removeItem = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id))
  }

  const totalPrice = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2)

  const emptyCart = () => (
    // <div className='empty-cart-container'>
    //   <img
    //     src='https://res.cloudinary.com/ddc7e5e7s/image/upload/e_background_removal/b_rgb:FFFFFF/f_png/v1746871034/png-transparent-empty-cart-illustration_jtit2l.png'
    //     alt='empty-cart'
    //     className='empty-cart'
    //   />
    //   <h1>Your Cart is Waiting!</h1>
    //   <p>Looks like you haven’t added anything yet. Let’s fix that and find something you’ll love.</p>
    //   <Link to='/'>
    //     <button type='button'>Start Shopping</button>
    //   </Link>
    // </div>
    <div className='empty-cart-container'>
                <img src = "https://res.cloudinary.com/ddc7e5e7s/image/upload/e_background_removal/b_rgb:FFFFFF/f_png/v1746871034/png-transparent-empty-cart-illustration_jtit2l.png" alt = "empty-cart" className='empty-cart'/>
                <h1 className='empty-cart-heading'> Your Cart is Waiting! </h1>
                 <p className='empty-cart-description'> Looks like you haven’t added anything yet. Let’s fix that and find something you’ll love. </p>
                <Link to="/">
                    <button type='button' className='empty-cart-button'> Start Shopping </button>
                </Link>
            </div>
  )

  return (
    <div className='cart-container'>
      {cart.length === 0 ? (
        emptyCart()
      ) : (
        <div className='cart-container-products'>
          <div className='cart-list-headings-container'>
              <h1 className='cart-heading'> Item </h1>
              <h1 className='cart-heading'> Quantity </h1>
              <h1 className='cart-heading'> Price </h1>
          </div>
          {cart.map(item => (
            <div key={item.id} className='cart-item'>
              <div>
              <img src={item.image} alt={item.title} className='cart-item-image' />
              <h3 className='cart-product-title'>{item.title}</h3>
              </div>
              {/* <div className='cart-item-details'> */}
              <div className='quantity-controls'>
                <button onClick={() => decrement(item.id)}>-</button>
                <span className='quantity'>{item.quantity}</span>
                <button onClick={() => increment(item.id)}>+</button>
              </div>
                <p className='cart-product-price'> ${item.price}</p>
                {/* <button onClick={() => removeItem(item.id)} className='cart-product-remove-button'>Remove</button> */}
              {/* </div> */}
            </div>
          ))}
          <hr className='price-line'/>
          <h2 className='total-price'>Total Price: ${totalPrice}</h2>
        </div>
      )}
    </div>
  )
}

export default Cart
