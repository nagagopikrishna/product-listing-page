// import { FaRegHeart } from "react-icons/fa";
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import './index.css'

const Products = (props) =>{

    const {productsDetails, addItemToCart, getFavProduct, isFav} = props
    const {id, image, title, price} = productsDetails

    const addToCart = () =>{
        addItemToCart(id)
    }

    const addToFav = () =>{
        getFavProduct(id)
    }

    console.log(isFav)

    return(
        <li className='card'>
            <div className="item-container">
                <div className="sub-item-description">
                    <img src={image} alt={title} className='product-image'/>
                    {/* <AiFillHeart color={"#292D32"} size={20} onClick={addToFav} style={{ color: isFav ? "red" : "gray" , cursor: "pointer"}}/> */}
                    {isFav ? (<AiFillHeart style={{ color: "red", cursor: "pointer" }} color={"#292D32"} size={20} onClick={addToFav} />) : (<AiOutlineHeart color={"#292D32"} size={20} onClick={addToFav} style={{ color: "gray", cursor: "pointer" }} />)}

                </div>
                <h1 className='product-name'>{title}</h1>
                <p className='product-price'>${price}</p>
                <button type="button" className="add-to-cart" onClick={addToCart}> Add to cart</button>
            </div>
        </li>
    )
}


export default Products