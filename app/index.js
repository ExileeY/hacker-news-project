import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Posts from './components/Posts'
import Nav from './components/Nav'
import { ThemeProvider } from './contexts/theme'

class App extends React.Component {
  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === 'light' ? 'dark' : 'light'
      }))
    }
  }
  render() {
    return (
      <div className={this.state.theme}>
        <div className='container'>
          <ThemeProvider value={this.state}>
            <Nav />
            <Posts type='top'/>
          </ThemeProvider>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))