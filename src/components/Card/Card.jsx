import Camisa from "../../assets/photo.png"
const Card = () => {
  return (
    <div className="card mb-3 w-100" style={{ backgroundColor: "transparent" }}>
      <div className="row g-0 justify-content-between">
        <div className="col-xl-4 col-12">
          <div className="card-body">
            <h5 className="card-title overflow-hidden text-light fs-40">Arco | Japanese restaurant brand identity & logo.</h5>
            <p className="card-text text-light">Developed the brand identity for a Japanese style restaurant</p>
            <p className="card-text text-light"><small className="text-light">Designed logo, graphic patterns, colour palette, monogram.</small></p>
            <div className="d-flex justify-content-center">
              <button className="btn btn-style ps-5 pe-5 rounded-5 fs-32 fw-semibold">See more</button>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-7">
          <div>
            <img src={Camisa} className="img-fluid m-0 p-4 border rounded-5" alt="Photo" style={{ maxHeight: "500px" }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
