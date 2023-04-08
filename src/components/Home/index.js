// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {
    teamData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data

    const updatedData = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({
      teamData: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {teamData, isLoading} = this.state

    return (
      <div className="home-container">
        <div className="title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="title">Ipl Dashboard</h1>
        </div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <ul className="list-container">
            {teamData.map(each => (
              <TeamCard teamDetails={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
