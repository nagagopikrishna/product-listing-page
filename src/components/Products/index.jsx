import { FaRegHeart } from "react-icons/fa";
import './index.css'

const Products = (props) =>{

    const {productsDetails} = props
    const {image, title, price} = productsDetails
    return(
        <li className='item-container'>
            <img src={image} alt={title} className='product-image'/>
            <h1 className='product-name'>{title}</h1>
            <div className="sub-item-description">
                <p className='product-price'>price: {price}</p>
                <FaRegHeart color={"#292D32"} size={20}/>
            </div>
        </li>
    )
}


export default Products