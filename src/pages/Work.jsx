import { useState } from "react";
import SectionVideos from "../components/SectionVideos/SectionVideos";
import Promo from "../assets/PROMO.png";
import Card from "../components/Card/Card.jsx";
import { useMediaQuery } from "react-responsive";
import Project1 from "../assets/projects/project_1.png";
import Modal from "../components/Modal/Modal.jsx";
import Modal1 from "../assets/Modal/Modal_1.png"

const Work = ({ reference }) => {
  const mediaLanding = useMediaQuery({ query: "(max-width:500px)" });
  const [modal, setModal] = useState(0);
  function devolverTitle(modal) {
    switch (modal) {
      case 1: return "First Project";
      default: return "";
    }
  }
  return (
    <div ref={reference}>
      <Modal title={devolverTitle(modal)}>
        {
          modal === 1 ? <img className="w-100" src={Modal1} alt="Modal1" /> : null
        }
      </Modal>
      <div
        ref={reference}
        className={`h-auto background-work ${mediaLanding ? "p-5" : "p-6"
          } pt-5 pb-5 m-0 rounded-150-top`}
      >
        <h3 className="text-light overflow-hidden video-title">Video edition</h3>
        <p className="text-light m-0 mt-3 work-txt">
          Videos of ~15, 20 minutes. Shorts, reels, tiktok.
        </p>
        <p className="text-light work-txt">
          Edition focused on viewer retention & thumbnails that seek the public’s
          attention.
        </p>
        <div>
          <SectionVideos title="Gaming" images={[1, 2]} />
          <SectionVideos title="Educational" images={[1, 2]} />
          <SectionVideos title="Music" images={[1, 2]} />
          <div className="mt-5">
            <h3 className="text-light overflow-hidden video-title">Short from edits</h3>
            <p className="text-light m-0 mt-3 work-txt">
              Shorts, reels, tiktok.
            </p>
            <p className="text-light work-txt">
              Edits from 30s to 3 minutes. Quality edits adapted to the fastness of social media. Attention to detail.
            </p>
            <div className="d-flex justify-content-around flex-wrap">
              <video
                autoPlay
                loop
                src={"./"}
                className="edit col-12 col-md-11 mt-5 rounded-4"
                style={{ background: "black" }}
              >
                <source />
              </video>
              <video
                autoPlay
                loop
                src={"./"}
                className="edit col-12 col-md-11 mt-5 rounded-4"
                style={{ background: "black" }}
              >
                <source />
              </video>
              <video
                autoPlay
                loop
                src={"./"}
                className="edit col-12 col-md-11 mt-5 rounded-4"
                style={{ background: "black" }}
              >
                <source />
              </video>
              <video
                autoPlay
                loop
                src={"./"}
                className="edit col-12 col-md-11 mt-5 rounded-4"
                style={{ background: "black" }}
              >
                <source />
              </video>
            </div>
          </div>
        </div>
      </div>
      <img className="image-promo" src={Promo} alt="Promo" />
      <div
        className={`h-auto background-work ${mediaLanding ? "p-5" : "p-6"
          } pt-5 pb-5 m-0 rounded-150-bottom`}
      >
        <div className="pt-5">
          <div className="row m-0">
            <h3 className="col-12 fs-48 text-light overflow-hidden fw-bold">
              Design
            </h3>
            <div className="col-12">
              <p className="col-12 col-md-8 col-sm-12 text-light fs-24">
                Find out how i helped these brands to seek the most approachable
                result to perfection on every design aspect, on every detail.{" "}
              </p>
            </div>
            <div className="col-12">
              <p className="col-12 col-md-8 col-sm-12 text-light fs-24">
                The projects under this title are pieces that search that level of
                quality, that tell a story, and communicate the brand’s desire
                through graphic and practical designing.
              </p>
            </div>
            <button className="btn btn-light col-12 col-md-4 col-lg-3 fs-4 rounded-pill fw-semibold mt-5">
              Contact me
            </button>
            <div className="pt-5">
              <Card className="proyecto-1 rounded-5" src={Project1} modal="1" setModal={setModal} alt="Poject 1" toggle="modal" target="#exampleModal" />
            </div>
          </div>
        </div>
      </div >
    </div>
  );
};

export default Work;
