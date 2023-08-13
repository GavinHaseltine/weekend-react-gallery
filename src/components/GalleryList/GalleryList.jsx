import axios from "axios"
import { useState, useEffect } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

//Runs on start
export function GalleryList() {
 
    const [galleryItem, setGalleryItem] = useState([]);



 //GETs the galleryList array
    let getGallery = () => {
        axios.get('/gallery')
            .then(response => {
                
                setGalleryItem(response.data) 
                console.log("in getGallery", response.data)
            })
            .catch(error => {
                console.log('error in GET:', error)
            })
      }
      
      //On startup pretty much
      useEffect(() => {
        getGallery()
      }, [])

//Loops through galleryItem
    return (
        <div>
            <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {galleryItem.map((item) => (
            <GalleryItem 
            key={item.id}
            item={item}
            getGallery={getGallery} />
        ))}
        </div>
    )
  }


//------------------ UNNEDDED OR MOVED
  // const handleClick = () =>{
//     console.log("clicked!")
        
// }

//  function handleLike (galleryItems) {

//     axios
//             .put(`/gallery/like/${galleryItems.id}`)
//             .then((response) => {
//                 console.log("in handleLike", response)
//                 //getGallery();
//             })
//             .catch((error) => {
//                 console.log(`Error in handleLike ${error}`);
//                 alert("Something went wrong!!!");
//             });
//     };