const OffCanvasTop = ({ children, title }) => {
  return (
    <div className="offcanvas offcanvas-top b-black h-15" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
      <div className="offcanvas-body b-black border-bottom-modal">
        {children}
      </div>
    </div>
  )
}

export default OffCanvasTop;