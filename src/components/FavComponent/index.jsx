import {useState} from 'react'
import './index.css'


const FavComponent = () =>{

    const [favProducts, setFavProducts] = useState(() =>{
        const localFavItems = localStorage.getItem("fav");
        return localFavItems ? JSON.parse(localFavItems) : []
    }) 

    console.log(favProducts);
    
    const emptyFav = () =>{
        return (
            <div className='empty-cart-container'>
                <img src = "https://res.cloudinary.com/ddc7e5e7s/image/upload/e_background_removal/f_png/v1746927840/nkavewdw90bgpdkm7g8a.png" alt = "empty-cart" className='empty-fav'/>
                <h1 className='empty-cart-heading'> Your Cart is Waiting! </h1>
                <p className='empty-cart-description'> Looks like you haven’t added anything yet. Let’s fix that and find something you’ll love. </p>
                <Link to = "/">
                    <button type='button' className='empty-cart-button'> Start Shopping </button>
                </Link>
            </div>
        )
    }
    return(
        <div>
            {favProducts.length !== 0 ?  emptyFav(): <h1> hello</h1>}
        </div>
    )
}
export default FavComponent