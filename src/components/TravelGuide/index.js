import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TravelList from '../TravelList'
import './index.css'

class TravelGuide extends Component {
  state = {travelData: [], isLoading: true}

  componentDidMount() {
    this.getTravelData()
  }

  getTravelData = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()
    console.log(data)
    const formattedData = data.packages.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      imageUrl: eachItem.image_url,
      description: eachItem.description,
    }))
    this.setState({travelData: formattedData, isLoading: false})
  }

  render() {
    const {travelData, isLoading} = this.state
    return (
      <div className="Travel-guide-container">
        <h1 className="heading">Travel Guide</h1>
        <ul className="travel-list-container">
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            travelData.map(item => (
              <TravelList key={item.id} TravelDetails={item} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default TravelGuide
