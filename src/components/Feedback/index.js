// Write your React code here.
import {Component} from 'react'
import './index.css'

const Thankyou = props => {
  const {resourcesDetails} = props
  const {loveEmojiUrl} = resourcesDetails
  return (
    <li>
      <div className="Emoji-container1">
        <img src={loveEmojiUrl} alt="love emoji" className="love-img" />
        <h1 className="Thank-you-heading">Thank You!</h1>
        <p className="performance-description">
          We will use your feedback to improve our customer support
        </p>
      </div>
    </li>
  )
}

const Emoji = props => {
  const {resourcesList, changestate} = props
  const {id, name, imageUrl} = resourcesList

  const ClickEmoji = () => {
    changestate(id)
  }

  return (
    <li>
      <img src={imageUrl} alt="name" className="emoji" onClick={ClickEmoji} />
      <p className="Emoji-headings">{name}</p>
    </li>
  )
}

class Feedback extends Component {
  state = {isEmojiClicked: false}

  changestate = id => {
    this.setState({isEmojiClicked: true})
  }

  render() {
    const {isEmojiClicked} = this.state
    const {resources} = this.props

    return (
      <div className="app-container">
        <ul className="Message-container">
          {isEmojiClicked && (
            <div>
              <Thankyou resourcesDetails={resources} />
            </div>
          )}
          {!isEmojiClicked && (
            <div>
              <h1 className="customer-heading">
                How satisfied are you with our customer support performance?
              </h1>
              <div className="H">
                {resources.emojis.map(eachItem => (
                  <Emoji
                    resourcesList={eachItem}
                    key={eachItem.id}
                    changestate={this.changestate}
                  />
                ))}
              </div>
            </div>
          )}
        </ul>
      </div>
    )
  }
}

export default Feedback
