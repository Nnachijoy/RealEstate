import { useState } from 'react'
import MyListing from './Component/MyListing.jsx';
import Favourite from './Component/Favourite.jsx';
import SavedProfile from './Component/SavedProfile.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <>
    <MyListing />
    <Favourite />
    <SavedProfile />
    </>
  )
}

export default App
