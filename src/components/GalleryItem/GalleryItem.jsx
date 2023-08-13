import axios from "axios";
import { useState, useEffect } from "react";

function GalleryItem({item, getGallery}){
    const [showPic, setShowPic] = useState(true);


    const handleClick = () =>{
             console.log("clicked!")
                
         }

         function handleImage(){
            setShowPic(!showPic)
         }

    return (
        <div>
            <div onClick={handleImage}>
                {showPic ? (
            <img src={item.path}/> ) : (
            <div>{item.description}</div>
                )}
            </div>
            <button>Like Button</button>
            <p>{item.likes} Likes</p>
        </div>
    )
}
export default GalleryItem