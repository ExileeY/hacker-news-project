import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Nav from './components/Nav'
import Posts from './components/Posts'
import Post from './components/Post'
import User from './components/User'
import { ThemeProvider } from './contexts/theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
              
              <Switch>
                <Route exact path='/' render={() => <Posts type='top'/>}/>
                <Route path='/new' render={() => <Posts type='new'/>}/>
                <Route path='/user' component={User}/>
                <Route path='/post' component={Post}/>
                <Route render={() => <h1 className='center-text'>404</h1>}/>
              </Switch>
            </ThemeProvider>
          </div>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))