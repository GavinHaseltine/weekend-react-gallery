import axios from "axios"

export function GalleryList({galleryList}) {

const handleClick = () =>{
    console.log("clicked!")
        
}

 function handleLike (galleryItems) {

    axios
            .put(`/gallery/like/${galleryItems.id}`)
            .then((response) => {
                console.log("in handleLike", response)
                //getGallery();
            })
            .catch((error) => {
                console.log(`Error in handleLike ${error}`);
                alert("Something went wrong!!!");
            });
    };


    return <>
      {galleryList?.map(galleryItems => (
        <li key={galleryItems.id}>
         <img onClick={handleClick} src={galleryItems.path}/>
         <p> {galleryItems.description} </p>
         <p> Number of likes: {galleryItems.likes} </p>
         <button onClick={handleLike(galleryItems.id)}>Like This!!</button>
        </li>
      ))}
    </>;
  }