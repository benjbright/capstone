import React, { useContext } from "react"
import { Context } from "../Context"

const Favourites = () => {
  const { allPhotos } = useContext(Context)

  const displayFavourites = allPhotos.filter((photo) => photo.isFavorite)

  return (
    <main className="favourites-page">
      <h1>Favourite Images</h1>
      {displayFavourites.length === 0 && (
        <p>Please select your favourite pictures!</p>
      )}
      <div className="favourites-display">
        {displayFavourites.map((image) => (
          <img src={image.url} alt="" key={image.id} />
        ))}
      </div>
    </main>
  )
}

export default Favourites
