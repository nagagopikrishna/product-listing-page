import {useState} from 'react'
import {Link} from 'react-router-dom'
import './index.css'


const Cart = () =>{
    const [cart, setCart] = useState(() =>{
        const items = localStorage.getItem("cart");
        return items ? JSON.parse(items) : []
    })

    const emptyCart = () =>{
        return (
            <div className='empty-cart-container'>
                <img src = "https://res.cloudinary.com/ddc7e5e7s/image/upload/e_background_removal/b_rgb:FFFFFF/f_png/v1746871034/png-transparent-empty-cart-illustration_jtit2l.png" alt = "empty-cart" className='empty-cart'/>
                <h1 className='empty-cart-heading'> Your Cart is Waiting! </h1>
                <p className='empty-cart-description'> Looks like you haven’t added anything yet. Let’s fix that and find something you’ll love. </p>
                <Link to = "/">
                    <button type='button' className='empty-cart-button'> Start Shopping </button>
                </Link>
                
            </div>
        )
    }

    console.log(cart)
    return(
        <div>
            {cart ?  emptyCart(): <h1> hello</h1>}
        </div>
    )
}


export default Cart