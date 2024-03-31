import Vector from "../assets/Vector.png";

const Landing = ({ reference, scrollToRef, workRef,contactRef }) => {
  return (
    <div ref={reference} className="mt-3 pb-5">
      <div className="background-general ht-auto">
        <div>
          <div style={{ width: "775px" }}>
            <h1 className="text-light iam overflow-y-hidden">Hey,</h1>
            <h1 className="text-light iam overflow-y-hidden">I'm yoako.</h1>
            <div className="pt-5 gap-3 d-flex flex-wrap">
              <button className="btn btn-txt text-light border rounded-pill ps-4 pe-4 pt-1 pb-1">
                Digital design
              </button>
              <button className="btn btn-txt text-light border rounded-pill ps-4 pe-4 pt-1 pb-1">
                Video edition
              </button>
              <button className="btn btn-txt text-light border rounded-pill ps-4 pe-4 pt-1 pb-1">
                UX | UI
              </button>
              <button className="btn btn-txt text-light border rounded-pill ps-4 pe-4 pt-1 pb-1">
                & More
              </button>
            </div>
            <p className="text-start text-light about-txt mt-5">
              I’m a multidisciplinary digital designer & video editor with a
              strong interest in modern & technological styles.
            </p>
          </div>
          <div className="d-flex align-items-center mt-5 justify-content-start">
            <button className="btn btn-light fs-32 rounded-pill fw-semibold ps-5 pe-5 pt-2 pb-2" onClick={()=>scrollToRef(contactRef)}>
              Let's chat!
            </button>
            <div
              className="pointer d-flex flex-column align-items-center me-5"
              style={{ marginLeft: "400px" }}
              onClick={() => scrollToRef(workRef)}
            >
              <p className="text-light fw-semibold">Scroll down</p>
              <img
                className="fs-6 scroll-down"
                src={Vector}
                alt="Scroll down"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
