// Write your code here
import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,

    manOfTheMatch,

    result,
    secondInnings,
    umpires,
    venue,
  } = matchDetails
  return (
    <div className="team-card-bg">
      <div>
        <p className="names">{competingTeam}</p>
        <p className="names">{date}</p>
        <p className="names">{venue}</p>
        <p className="names">{result}</p>
      </div>

      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="team-logo"
      />

      <div>
        <p className="names">First Innings</p>
        <p className="names">{firstInnings}</p>
        <p className="names">Second Innings</p>
        <p className="names">{secondInnings}</p>
        <p className="names">Man Of The Match</p>
        <p className="names">{manOfTheMatch}</p>
        <p className="names">Umpires</p>
        <p className="names">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
