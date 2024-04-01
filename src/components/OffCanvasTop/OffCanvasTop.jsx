const OffCanvasTop = ({ children, title }) => {
  return (
    <div className="offcanvas offcanvas-top b-black" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
      <div className="offcanvas-body b-black border-bottom-modal flex-grow-0">
        {children}
      </div>
    </div>
  )
}

export default OffCanvasTop;