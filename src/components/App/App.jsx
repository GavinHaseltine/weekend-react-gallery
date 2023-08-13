import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import { GalleryList } from "../GalleryList/GalleryList";
//const galleryItems = require('../modules/gallery.data');

function App() {
  
    return (
      <div className="App">
        
<GalleryList />
        
      </div>
    );
}

export default App;
