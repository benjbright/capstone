import React, { useContext } from "react";
import Image from "../components/Image";
import { getClass } from "../utils";
import { Context } from "../Context";

function Photos() {
  const { allPhotos } = useContext(Context);
  // console.log(allPhotos);

  const imageElements = allPhotos.map((img, index) => {
    return <Image key={img.id} img={img} className={getClass(index)} />;
  });

  return <main className="photos">{imageElements}</main>;
}

export default Photos;
