import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import { GalleryList } from "../GalleryList/GalleryList";
//const galleryItems = require('../modules/gallery.data');

function App() {
const [galleryList, setGalleryList] = useState([]);
  
let getGallery = () => {
  axios.get('/gallery')
      .then(response => {
          // console.log('Get response is', response.data)
          setGalleryList(response.data) // confirm this is the right thing to take here
          console.log("in getGallery", response.data)
      })
      .catch(error => {
          console.log('error in GET:', error)
      })
}


useEffect(() => {
  getGallery()
}, [])

console.log("galList", galleryList)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
<GalleryList
galleryList ={galleryList}
/>
        
      </div>
    );
}

export default App;
