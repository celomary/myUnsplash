import React from 'react'
import Catalog from '../components/Catalog';
import Header from '../components/Header';

const SearchPage = () => {
  return (
    <div className='Home'>
        <Header />
        <Catalog search />
    </div>
  )
}

export default SearchPage;