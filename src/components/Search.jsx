import React, { useEffect, useState } from 'react'
import '../styles/Search.css';
import { AiOutlineSearch } from "react-icons/ai";
import { connect } from 'react-redux';
import { searchPostsAction } from '../services/actions';
import { useNavigate } from 'react-router-dom';
const Search = ({searchPostsAction}) => {

  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  return (
    <div className='Search'>
        <AiOutlineSearch style={{
            width: 17,
            color: '#BDBDBD',
            cursor: 'pointer'
        }} onClick={
          ()=>{
            if (search.length > 0)
            {
                searchPostsAction(search);
                navigate('/search');
            }
          }
        } />
        <input className='searchInput' type='text' value={search} onChange={(e)=>{
          setSearch(e.target.value);
        }} placeholder='Search by name' onKeyDown={(e)=>{
          if(e.key === 'Enter' && search.length > 0){
            searchPostsAction(search);
            navigate('/search');
          }
        }} />
    </div>
  );
}

export default connect(null, {
  searchPostsAction
})(Search);