import React, {useEffect} from 'react'
import "../styles/Home.css";
import Header from '../components/Header';
import Catalog from '../components/Catalog';
import { connect } from 'react-redux';
import { allPostsAction } from '../services/actions';
const Home = ({
  allPostsAction,
}) => {
  useEffect(() => {
    allPostsAction();
  }, []);
  return (
    <div className='Home'>
        <Header />
        <Catalog />
    </div>
  )
}

export default connect(null, {
  allPostsAction
})(Home);