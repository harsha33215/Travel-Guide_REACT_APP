import './index.css'

const TravelList = props => {
  const {TravelDetails} = props
  const {name, imageUrl, description} = TravelDetails

  return (
    <li className="list-items-container">
      <img className="item-image" src={imageUrl} alt={name} />
      <div className="details">
        <h1 className="name">{name}</h1>
        <p className="description">{description}</p>
      </div>
    </li>
  )
}
export default TravelList
