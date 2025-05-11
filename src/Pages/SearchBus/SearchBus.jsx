import './SearchBus.css'
import {  FaSearch } from 'react-icons/fa'
import { IoSwapVerticalSharp } from 'react-icons/io5'
const SearchBus = () => {
  return (
    <div className='searchBus d-flex align-items-center justify-content-center'>
      <div className="container border border-2 rounded-5 col-6">
          <div className="fromBox p-2 border-bottom mt-3">
            <label htmlFor='from-input' className='ps-3 h5' >From</label>
            <input id='from-input' className='from-input ps-3 border border-0' placeholder='Enter Your Location'/>
          </div>
          <div className="swap-div position-fixed col-6 d-flex justify-content-end pe-5">
          <button className='swap-locations me-2 rounded rounded-5 bg-white'><IoSwapVerticalSharp className='IoSwapVerticalSharp m-0 h4'/></button>
          </div>
          <div className="toBox p-2 border-bottom mt-3">
            <label htmlFor='to-input' className='ps-3 h5' >To</label>
            <input id='to-input' type='text' className='to-input ps-3 border border-0' placeholder='Enter The Destination'/>
          </div>
          <div className="searchButton p-2 mt-4">
            <button className='ms-3 rounded p-2 rounded-5 h5 bg-danger text-white border-0 d-flex align-items-center justify-content-center'><FaSearch className='me-3 display-0'/> Search Buses</button>
          </div>
      </div>
    </div>
  )
}

export default SearchBus