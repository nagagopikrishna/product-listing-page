import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import FavItemDetails from '../FavItemDetails'
import './index.css'


const FavComponent = () =>{

    const [favProducts, setFavProducts] = useState(() =>{
        const localFavItems = localStorage.getItem("fav");
        return localFavItems ? JSON.parse(localFavItems) : []
    }) 

    // console.log(favProducts);

    const removeFavItem = (id) =>{
        const filterFavProducts = favProducts.filter((each) => each.id !== id);
        setFavProducts(filterFavProducts);
    }

    useEffect(() =>{
        localStorage.setItem("fav", JSON.stringify(favProducts))
    }, [favProducts])

    const emptyFav = () =>{
        return(
            <div className='empty-fav-container'>
                <img src = "https://res.cloudinary.com/ddc7e5e7s/image/upload/e_background_removal/f_png/v1746927840/nkavewdw90bgpdkm7g8a.png" alt = "empty-cart" className='empty-fav'/>
                <h1 className='empty-fav-heading'>❤️ No Favorites Yet! </h1>
               <p className='empty-fav-description'> You haven’t liked anything yet. Tap the heart to save products you love. </p>
                <Link to = "/">
                    <button type='button' className='empty-fav-button'> Explore Products </button>
                </Link>
            </div>
        )
    }

    const favSectionContainer = () =>{
        return(
            <div className = "fav-container-section">
                <h1 className = "heading-fav-container"> Your Favorites </h1>
                <ul className='fav-list'>
                    {
                        favProducts.map((each) => <FavItemDetails key = {each.id} itemDetails = {each} removeFavItem = {removeFavItem}/>)
                    }
                </ul>
            </div>
        )
    }
    return(
        <div>
            {favProducts.length === 0 ?  emptyFav(): favSectionContainer()}
            <h1> hello world </h1>
        </div>
    )
}
export default FavComponent