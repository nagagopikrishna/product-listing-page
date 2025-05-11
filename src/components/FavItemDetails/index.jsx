import './index.css'


const FavItemDetails = (props) =>{

    const {itemDetails, removeFavItem} = props
    const {id, image, title, price} = itemDetails

    const onClickRemoveFav = () =>{
        removeFavItem(id)
    }

    return(
        <li className='fav-list-item'>
            <img src = {image} alt = {title} className='fav-image'/>
            <div className='fav-items-details'>
                <h1 className='fav-title'> {title}</h1>
                <p className = "fav-price"> ${price}</p>
            </div>
            <button type = "button" onClick={onClickRemoveFav} className='remove-button'> Remove </button>
        </li>
    )
}


export default FavItemDetails