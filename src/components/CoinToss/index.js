// Write your code here

import {Component} from 'react'
import './index.css'

const HEAD_IMAGE = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAIL_IMAGE = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossImage: HEAD_IMAGE, headsCount: 0, tailsCount: 0}

  onClickToss = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let tossUrl = ''
    let updateTailsCount = tailsCount
    let updateHeadsCount = headsCount

    if (tossResult === 0) {
      tossUrl = HEAD_IMAGE
      updateHeadsCount += 1
    } else {
      tossUrl = TAIL_IMAGE
      updateTailsCount += 1
    }
    this.setState({
      tossImage: tossUrl,
      headsCount: updateHeadsCount,
      tailsCount: updateTailsCount,
    })
  }

  render() {
    const {tossImage, headsCount, tailsCount} = this.state
    const total = headsCount + tailsCount
    return (
      <div className="app-container">
        <div className="game-container">
          <h1 className="main-heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={tossImage} alt="toss result" className="image" />
          <button type="button" className="button" onClick={this.onClickToss}>
            Toss Coin
          </button>
          <div className="result-container">
            <p className="total">Total: {total}</p>
            <p className="heads">Heads: {headsCount}</p>
            <p className="tails">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
