import React from 'react'

const Modal = ({ children }) => {
  return (
    <div className="modal modal-lg fade zindexModal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body p-0 m-0 b-black">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;
