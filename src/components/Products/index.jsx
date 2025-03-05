import './index.css'

const Products = (props) =>{

    const {productsDetails} = props
    const {image, title, price} = productsDetails
    return(
        <li className='item-container'>
            <img src={image} alt={title} className='product-image'/>
            <h1 className='product-name'>{title}</h1>
            <p className='product-price'>price: {price}</p>
        </li>
    )
}


export default Products