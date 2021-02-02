import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Posts from './components/Posts'
import Nav from './components/Nav'
import { ThemeProvider } from './contexts/theme'
import { BrowserRouter as Router, Route } from 'react-router-dom'

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
      <Router>
        <div className={this.state.theme}>
          <div className='container'>
            <ThemeProvider value={this.state}>
              <Nav />

              <Route exact path='/' render={() => <Posts type='top'/>}/>
              <Route path='/new' render={() => <Posts type='new'/>}/>
            </ThemeProvider>
          </div>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))