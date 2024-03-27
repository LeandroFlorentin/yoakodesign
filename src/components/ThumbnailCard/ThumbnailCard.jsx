import React from "react";
import { thumbnails } from "../../helpers/thumbnails";

const ThumbnailCard = () => {
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
