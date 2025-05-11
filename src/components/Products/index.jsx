import { FaRegHeart } from "react-icons/fa";
import './index.css'

const Products = (props) =>{

    const {productsDetails, addItemToCart, getFavProduct} = props
    const {id, image, title, price} = productsDetails

    const addToCart = () =>{
        addItemToCart(id)
    }

    const addToFav = () =>{
        getFavProduct(id)
    }

    return(
        <li className='card'>
            <div className="item-container">
                <div className="sub-item-description">
                    <img src={image} alt={title} className='product-image'/>
                    <FaRegHeart color={"#292D32"} size={20} onClick={addToFav}/>
                </div>
                <h1 className='product-name'>{title}</h1>
                <p className='product-price'>${price}</p>
                <button type="button" className="add-to-cart" onClick={addToCart}> Add to cart</button>
            </div>
        </li>
    )
}


export default Products