const SectionVideos = ({ title, images = [] }) => {
  return (
    <div className="mt-3">
      <h6 className="fs-40 text-light fw-light overflow-hidden">{title}</h6>
      <div className="row d-flex justify-content-between ms-1 me-1">
        {images.map((value, key) => {
          return (
            <div key={key} className="col-12 col-md-6 ps-0">
              <video
                autoPlay
                loop
                src={value.src}
                className="tamano-video col-12 col-md-11 mt-4 rounded-4"
                style={{ background: "black" }}
              >
                <source />
              </video>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionVideos;
