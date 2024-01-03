import {Component} from 'react'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {
    selectedLanguageIndex: 0, // Default to English
  }

  handleLanguageChange = index => {
    this.setState({
      selectedLanguageIndex: index,
    })
  }

  render() {
    const {selectedLanguageIndex} = this.state
    const selectedLanguage = languageGreetingsList[selectedLanguageIndex]

    return (
      <>
        <h1>Multilingual Greetings</h1>
        <div className="main">
          <ul>
            {languageGreetingsList.map((language, index) => (
              <li key={language.id}>
                <button
                  type="button"
                  onClick={() => this.handleLanguageChange(index)}
                >
                  {language.buttonText}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img
            alt={selectedLanguage.imageAltText}
            src={selectedLanguage.imageUrl}
          />
        </div>
      </>
    )
  }
}

export default App
