const Card = ({ className, src, alt, toggle, target, setModal, modal }) => {
  return (
    <div className={className} onClick={() => setModal(parseInt(modal))} data-bs-toggle={toggle} data-bs-target={target}>
      <img className="img-card w-100 pointer rounded-5" src={src} alt={alt} />
    </div>
  )
}

export default Card;
