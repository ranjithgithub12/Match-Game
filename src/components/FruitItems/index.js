import './index.css'

const FruitItems = props => {
  const {eachTabImage, checkTheThumbnailImage} = props
  const {id, imageUrl, thumbnailUrl, category} = eachTabImage

  const onClickImage = () => {
    checkTheThumbnailImage(id)
  }

  return (
    <li className="list-of-image-container">
      <button className="thumbnail-button" type="button" onClick={onClickImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" alt="match"/>
      </button>
    </li>
  )
}

export default FruitItems
