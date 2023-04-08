// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatch: [],
    teamBannerUrl: '',
    matchCardList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamData()
  }

  convertMatchDetails = each => ({
    competingTeam: each.competing_team,
    competingTeamLogo: each.competing_team_logo,
    date: each.date,
    firstInnings: each.first_innings,
    id: each.id,
    manOfTheMatch: each.man_of_the_match,
    matchStatus: each.match_status,
    result: each.result,
    secondInnings: each.second_innings,
    umpires: each.umpires,
    venue: each.venue,
  })

  convertTeamCardDetails = each => ({
    umpires: each.umpires,
    competingTeam: each.competing_team,
    competingTeamLogo: each.competing_team_logo,
    date: each.date,
    firstInnings: each.first_innings,
    id: each.id,
    manOfTheMatch: each.man_of_the_match,
    matchStatus: each.match_status,
    result: each.result,
    secondInnings: each.second_innings,
    venue: each.venue,
  })

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const matchDetails = data.latest_match_details

    const updatedMatchDetails = this.convertMatchDetails(matchDetails)
    const bannerUrl = data.team_banner_url
    const teamCardDetails = data.recent_matches
    const updatedTeamCardDetails = teamCardDetails.map(each =>
      this.convertTeamCardDetails(each),
    )

    this.setState({
      latestMatch: updatedMatchDetails,
      teamBannerUrl: bannerUrl,
      matchCardList: updatedTeamCardDetails,
      isLoading: false,
    })
  }

  renderTeamMatches = () => {
    const {teamBannerUrl, latestMatch, matchCardList} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    return (
      <div className={`team-details-container ${id}`}>
        <img src={teamBannerUrl} alt="team banner" className="banner" />
        <p className="banner-title">Latest Match</p>
        <LatestMatch matchDetails={latestMatch} />
        <ul className="match-card-container">
          {matchCardList.map(each => (
            <MatchCard cardDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          this.renderTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
