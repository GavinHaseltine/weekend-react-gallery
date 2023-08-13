import axios from "axios";
import { useState, useEffect } from "react";

function GalleryItem({item, getGallery}){


    return (
        <div>
            <img src={item.path}/>
            <div>{item.description}</div>
        </div>
    )
}
export default GalleryItem
