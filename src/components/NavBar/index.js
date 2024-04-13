import './index.css'

const NavBar = props => {
  const {score, gameTimer} = props
  return (
    <nav className="nav-bar-container">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="logo-image"
        />
      </div>
      <ul className="score-timer-container">
        <li>
          <p className="score-content">
            Score:<span className="span-score-timer">{score}</span>
          </p>
        </li>
        <li className="list-timer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-image"
          />
          <p className="timer-content">{gameTimer} Sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
