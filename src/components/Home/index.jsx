import { useState , useEffect} from "react"

import Filters from "../Filters"
import './index.css'
import Products from "../Products"
import Footer from "../Footer"
import FilterSection from "../FilterSection"


function inComparator(product1,product2){
    if(product1.price > product2.price){
        return 1
    }else{
        return -1
    }
}

function decComparator(product1,product2){
    if(product1.price < product2.price){
        return 1
    }else{
        return -1
    }
}


const Home = () =>
{   
    const [products, setProducts] = useState([])
    const [sort, setSort] = useState("");
    const [filterSection, setFilter] = useState(false)
    const [searchText, setSearchText] = useState("");
    const [cartItems, setCartItems] = useState(() => {
    try {
        const items = localStorage.getItem("cart");
        return items ? JSON.parse(items) : [];
    } catch (e) {
        console.error("Corrupted cart in localStorage. Resetting...", e);
        localStorage.removeItem("cart");
        return [];
    }
});

    const addItemToCart = (id) => {
        const product = products.find((each) => each.id === id);
        setCartItems(prev => 
            prev.find(item => item.id === id) ? prev : [...prev, product]
        );
    };

    useEffect(() =>{
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems])

    useEffect(() =>{
        const productsList = async () =>{
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data);
        }
        productsList();
    }, [])

    let filteredSortedProducts = products;

    if (sort != "")
    {
        if (sort === 'to_high') filteredSortedProducts = products.sort(inComparator);
        else filteredSortedProducts = products.sort(decComparator);
    }

    // console.log(products)
    // console.log(filterSection)
    // console.log(sort);

    let filteredProducts = filteredSortedProducts;
    filteredProducts = filteredSortedProducts.filter((each) =>{
        const userText = searchText.toLowerCase();
        const productText= each.title.toLowerCase();
        return productText.includes(userText);
    })
    
    return (

    <>
        {/* <Header/> */}
        <div className="home-page-container">
            <div className="description-container">
                <h1 className="heading"> DISCOVER OUR PRODUCTS </h1>
                <p className="description"> Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
            </div>
            <div className="filters-section-container">
                <Filters setFilter = {setFilter} filterValue = {filterSection} setSort = {setSort} setSearchText = {setSearchText} />
            </div>
            <div className="products-container">
                {filterSection ? <FilterSection/> : ""}
                <ul className="products-list-container">
                    {
                        filteredProducts.map((each) =>(
                            <Products key={each.id} productsDetails = {each} addItemToCart = {addItemToCart}/>
                        ))
                    }
                </ul>
            </div>
        </div>
        <Footer/>
    </>

)

}

export default Home