import axios from "axios"
//import galleryItems from "../../../server/modules/gallery.data";

export function GalleryList(galleryList) {

const handleClick = () =>{
    console.log("clicked!")
        
}

const handleLike = () => {

    axios
            .put(`/gallery/like/:id`)
            .then((response) => {
                //getGallery();
            })
            .catch((error) => {
                console.log(`Error in handleBuy ${error}`);
                alert("Something went wrong!!!");
            });
    };


    return <>
      {galleryList?.map(galleryItems => (
        <li key={galleryItems.id}>
         <img onClick={handleClick} src={galleryItems.path}/>
         <p> {galleryItems.description} </p>
         <p> Number of likes: {galleryItems.likes} </p>
         <button onClick={handleLike}>Like This!!</button>
        </li>
      ))}
    </>;
  }