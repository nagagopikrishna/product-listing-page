import { useState , useEffect} from "react"


import Header from "../Header"
import Filters from "../Filters"
import './index.css'
import Products from "../Products"
import Footer from "../Footer"
import FilterSection from "../FilterSection"

const Home = () =>
{   
    const [products, setProducts] = useState([])
    const [filterSection, setFilter] = useState(false)

    useEffect(() =>{
        const productsList = async () =>{
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data);
        }
        productsList();
    }, [])

    // console.log(products)
    console.log(filterSection)
    
    return (

    <>
        <Header/>
        <div className="home-page-container">
            <div className="description-container">
                <h1 className="heading"> DISCOVER OUR PRODUCTS </h1>
                <p className="description"> Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
            </div>
            <div className="filters-section-container">
                <Filters setFilter = {setFilter} filterValue = {filterSection}/>
            </div>
            <div className="products-container">
                {filterSection ? <FilterSection/> : ""}
                <ul className="products-list-container">
                    {
                        products.map((each) =>(
                            <Products key={each.id} productsDetails = {each}/>
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