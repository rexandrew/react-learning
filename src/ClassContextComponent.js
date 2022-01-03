import React, { Component } from 'react'
import { ThemeContext } from './App'


export default class ClassContextComponent extends Component {

    themeStyle(dark) {
        return {
            backgroundColor: dark ? '#333' : '#ccc',
            color: dark ? '#CCC' : '#333',
            padding: '2rem',
            margin: '2rem'
        }
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {darkTheme => {
                    return <div style={this.themeStyle(darkTheme)}> Class
                     theme</div>
                }
                }
            </ThemeContext.Consumer>
        )
    }
}