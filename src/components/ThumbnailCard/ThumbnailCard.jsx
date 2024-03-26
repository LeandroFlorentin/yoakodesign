import React from "react";
import t1Thumbnail from "../../assets/thumbnails/t-1.png";
import t2Thumbnail from "../../assets/thumbnails/t-2.png";
import t3Thumbnail from "../../assets/thumbnails/t-3.png";
import t4Thumbnail from "../../assets/thumbnails/t-4.png";
import t5Thumbnail from "../../assets/thumbnails/t-5.png";
import t6Thumbnail from "../../assets/thumbnails/t-6.png";
import t7Thumbnail from "../../assets/thumbnails/t-7.png";
import t8Thumbnail from "../../assets/thumbnails/t-8.png";
const ThumbnailCard = () => {
  const thumbnails = [
    {
      src: t1Thumbnail,
      id: "t-1",
    },
    {
      src: t2Thumbnail,
      id: "t-2",
    },
    {
      src: t3Thumbnail,
      id: "t-3",
    },
    {
      src: t4Thumbnail,
      id: "t-4",
    },
    {
      src: t5Thumbnail,
      id: "t-5",
    },
    {
      src: t6Thumbnail,
      id: "t-6",
    },
    {
      src: t7Thumbnail,
      id: "t-7",
    },
    {
      src: t8Thumbnail,
      id: "t-8",
    },
  ];
  return (
    <div className="mt-3">
      <div className="row d-flex justify-content-between ms-1 me-1">
        {thumbnails.map((value, key) => {
          return (
            <div key={key} className="col-12 col-md-6 ps-0">
              <img
                src={value.src}
                alt={value.id}
                className="tamano-video col-12 col-md-11 mt-4 rounded-4"
                style={{ background: "black" }} // TODO: sacar bg negro y que quede el tamaño estable
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThumbnailCard;
