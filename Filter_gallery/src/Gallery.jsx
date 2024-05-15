import React, { useState } from 'react';
import './App.css';


function Gallery() {
   let [filter, setFilter] = useState("all") ;
   const images = [
    { id: 1, url: 'https://images.pexels.com/photos/20988795/pexels-photo-20988795/free-photo-of-a-book-and-headphones-laying-on-top-of-a-bed.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'},
    { id: 2, url: 'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'city' },
    { id: 3, url: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'nature' },
    { id: 4, url: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'city' },
    { id: 5, url: 'https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'nature' },
    { id: 6, url: 'https://images.pexels.com/photos/169677/pexels-photo-169677.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'city' },
    { id: 7, url: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'nature' },
    { id: 8, url: 'https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800', category: 'nature' },
    { id: 9, url: 'https://images.pexels.com/photos/1028225/pexels-photo-1028225.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'nature' },
    { id: 10, url: 'https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'nature' },
    { id: 11, url: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'city' }
   ]


  return (
    <div class='main'>
    <div className="container">
        <h3>Filter Gallery</h3>
        <div className="buttons">
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("nature")}>Nature</button>
            <button onClick={() => setFilter("city")}>City</button>
        </div>
        <div className="gallery">
        {images
        .filter(image => filter === "all" || image.category == filter)
          .map(image => (
            <img src={image.url}/>
          ))}
        </div>
    </div>
    </div>
  )
}

export default Gallery