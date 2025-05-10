import { useState , useEffect} from "react"


import Header from "../Header"
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

    useEffect(() =>{
        const productsList = async () =>{
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data);
        }
        productsList();
    }, [])

    

    // useEffect(() => {
    //     let sorted = [...products];
    //     if (sortOption === "to_low") {
    //       sorted.sort((a, b) => a.price - b.price);
    //     } else if (sortOption === "to_high") {
    //       sorted.sort((a, b) => b.price - a.price);
    //     }
    //     setSortedProducts(sorted);
    //   }, [sortOption, products]);

    let filteredProducts = products;

    if (sort != "")
    {
        if (sort === 'to_low') filteredProducts = products.sort(inComparator);
        else filteredProducts = products.sort(decComparator);
    }

    // console.log(products)
    // console.log(filterSection)
    console.log(sort);
    
    return (

    <>
        <Header/>
        <div className="home-page-container">
            <div className="description-container">
                <h1 className="heading"> DISCOVER OUR PRODUCTS </h1>
                <p className="description"> Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
            </div>
            <div className="filters-section-container">
                <Filters setFilter = {setFilter} filterValue = {filterSection} setSort = {setSort}/>
            </div>
            <div className="products-container">
                {filterSection ? <FilterSection/> : ""}
                <ul className="products-list-container">
                    {
                        filteredProducts.map((each) =>(
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