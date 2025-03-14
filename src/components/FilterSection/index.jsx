import './index.css'

const FilterSection = () =>(
    <div className='filter-section-container'>
        <div className='customizble-container'>
            <input type='checkbox' className='check-box'/>
            <h1 className='customizble-head'> Customizble </h1>
        </div>
        <hr className='divide-line'/>
        <select className='filter-selector-element'>
            <option>IDEAL FOR</option>
        </select>
        <p className='all'> All </p>
        <hr className='divide-line'/>
        <select className='filter-selector-element'>
            <option> WORK </option>
        </select>
        <p className='all'> All </p>
        <hr className='divide-line'/>
        <select className='filter-selector-element'>
            <option> FABRIC </option>
        </select>
        <p className='all'> All </p>
        <hr className='divide-line'/>
        <select className='filter-selector-element'>
            <option>SEGMENT</option>
        </select>
        <p className='all'> All </p>
        <hr className='divide-line'/>
        <select className='filter-selector-element'>
            <option>SUITABLE FOR</option>
        </select>
        <p className='all'> All </p>
        <hr className='divide-line'/>
        <select className='filter-selector-element'>
            <option> RAW MATERIALS </option>
        </select>
        <p className='all'> All </p>
        <hr className='divide-line'/>
        <select className='filter-selector-element'>
            <option>PATTERN</option>
        </select>
        <p className='all'> All </p>
        <hr className='divide-line'/>
    </div>
    
)

export default FilterSection