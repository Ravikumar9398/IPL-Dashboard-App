// Write your code here
import './index.css'

const MatchCard = props => {
  const {cardDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = cardDetails
  console.log(cardDetails)
  return (
    <li className="team-card-list">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="image-logo"
      />
      <p className="names">{competingTeam}</p>
      <p className="names">{result}</p>
      <p className={`${matchStatus}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
