import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Nav from './components/Nav'
import { ThemeProvider } from './contexts/theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loading from './components/Loading'

const Posts = React.lazy(() => import('./components/Posts'))
const Post = React.lazy(() => import('./components/Post'))
const User = React.lazy(() => import('./components/User'))

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
              
              <React.Suspense fallback={<Loading />}>
                <Switch>
                  <Route exact path='/' render={() => <Posts type='top'/>}/>
                  <Route path='/new' render={() => <Posts type='new'/>}/>
                  <Route path='/user' component={User}/>
                  <Route path='/post' component={Post}/>
                  <Route render={() => <h1 className='center-text'>404</h1>}/>
                </Switch>
              </React.Suspense>
            </ThemeProvider>
          </div>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))