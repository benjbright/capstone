import React, { useContext } from "react"
import { Context } from "../Context"
import Image from "../components/Image"

const Favourites = () => {
  const { allPhotos } = useContext(Context)
  console.log(allPhotos)

  const displayFavourites = allPhotos
    .filter((photo) => photo.isFavorite)
    .map((photo) => <Image key={photo.id} img={photo} />)

  console.log(displayFavourites)

  return (
    <main className="favourites-page">
      <h1>Favourite Images</h1>
      {displayFavourites.length === 0 && (
        <p>Please select your favourite pictures!</p>
      )}
      <div className="favourites-photos">{displayFavourites}</div>
    </main>
  )
}

export default Favourites
