import axios from "axios"
import { useState, useEffect } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

export function GalleryList() {

    const [galleryItem, setGalleryItem] = useState([]);




    let getGallery = () => {
        axios.get('/gallery')
            .then(response => {
                // console.log('Get response is', response.data)
                setGalleryItem(response.data) // confirm this is the right thing to take here
                console.log("in getGallery", response.data)
            })
            .catch(error => {
                console.log('error in GET:', error)
            })
      }
      
      
      useEffect(() => {
        getGallery()
      }, [])


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