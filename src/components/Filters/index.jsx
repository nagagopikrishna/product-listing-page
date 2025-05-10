import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import './index.css'

const Filters = (props) =>{

    const {setFilter, filterValue, setSort} = props

    const hideFilter = () =>{
        setFilter(!filterValue)
    }

    const onChangeSort = (event) => {
        setSort(event.target.value)
    }
    
    return (
    <>
        <div className='filters-sub-element-tablet'>
            <p className='items-count'> 3425 ITEMS </p>
            <button type='button' className='filters-buttton' onClick={hideFilter}> {filterValue ? <MdKeyboardArrowLeft/> :<MdKeyboardArrowRight size={16}/> }HIDE FILTER</button>
        </div>
        <div className="filter-sub-element-mobile">
            <p className="filter"> FILTER </p>
        </div>
        <> <p className="separator"> | </p> </>
        
        <select className='filter-select-element' onChange={onChangeSort}>
            <option> RECOMMENDED </option>
            <option> NEWEST FIRST </option>
            <option> POPULAR </option>
            <option value = "to_low"> PRICE: HIGH TO LOW </option>
            <option value="to_high"> PRICE: LOW TO HIGH </option>
        </select>
    
    </>
)
}

export default Filters