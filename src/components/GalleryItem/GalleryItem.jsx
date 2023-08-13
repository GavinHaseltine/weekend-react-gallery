import axios from "axios";
import { useState, useEffect } from "react";

function GalleryItem({item, getGallery}){
    
    //true allows showPic to get toggled
    const [showPic, setShowPic] = useState(true);


    const handleClick = (id) =>{
             console.log("clicked!")
                

             axios
            .put(`/gallery/like/${id}`)
             .then((response) => {
                 console.log("in handleLike", response)
                 getGallery();
             })
             .catch((error) => {
                 console.log(`Error in handleLike ${error}`);
                 alert("Error in PUT");
             });
     
         }


        //is just toggling showPic
         function handleImage(){
            setShowPic(!showPic)
         }

         //The div which holds both item and description gets toggled through
         //conditional logic
    return (
        <div>
            <div onClick={handleImage}>
                {showPic ? (
            <img src={item.path}/> ) : (
            <p>{item.description}</p>
                )}
            </div>
            <button onClick={() => handleClick(item.id)}>Like Button</button>
            <p>{item.likes} Likes</p>
        </div>
    )
}
export default GalleryItem