// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannersList} = props
  const {headerText, description, className} = bannersList
  return (
    <div className={`container-1 ${className}`}>
      <div className="container">
        <h1 className="heading">{headerText}</h1>
        <p className="seasons-text">{description}</p>
        <button className="button-styling" type="button">
          Show More
        </button>
      </div>
    </div>
  )
}

export default BannerCardItem
