import React from 'react'

const Modal = ({ children, title }) => {
  return (
    <div className="modal modal-lg fade zindexModal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header d-block d-sm-none b-white border-bottom-modal">
            <h5 className="modal-title text-light">{title}</h5>
            <button type="button" className="btn-close" style={{ color: "white" }} data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body p-0 m-0 b-black">
            {children}
          </div>
          <div className="d-block d-sm-none modal-footer b-white border-top-modal">
            <button type="button" className="btn btn-style" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;
