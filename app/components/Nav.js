import React from 'react'
import { ThemeConsumer } from '../contexts/theme'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <ThemeConsumer>
      {({theme, toggleTheme}) => {
        return (
          <nav className='row space-between'>
            <ul className='row nav'>
              <li>
                <NavLink exact to='/' className='nav-link' activeStyle={{color: 'rgb(178,34,34)'}}>Top</NavLink>
              </li>
              <li>
                <NavLink to='/new' className='nav-link' activeStyle={{color: 'rgb(178,34,34)'}}>New</NavLink>
              </li>
            </ul>
            <button 
              style={{fontSize: 30}}
              className='btn-clear'
              onClick={toggleTheme}
            >
              {theme === 'dark' ? '💡' : '🔦'}
            </button>
          </nav>
        )
      }}
    </ThemeConsumer>
  )
}