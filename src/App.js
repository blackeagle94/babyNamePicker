import React, { Component } from 'react'
import Names from './components/Names'
import Input from './components/Input'
import Favourites from './components/Favourites'
const data = require('./components/babyNamesData.json')

class App extends Component {

    state = {
        names: data,
        fav: []
    }
    filterNames = (text) => {
        this.setState({...this.state, names: data.filter(item => {
            return item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1
        })})
    }

    select = (clas) => {
        if (clas === 'all') {
            this.setState({...this.state, names: data.filter(item => {
                return item
            })})
        } else {
            this.setState({...this.state, names: data.filter(item => {
                return item.sex === clas
            })})
        }
    }

    deleteAdded = (id) => {
      let newFav = this.state.fav
      newFav.splice(id, 1)
      this.setState({...this.state, fav: newFav})
    }

    addFav = (id) => {
      for (let i = 0; i < data.length; i++) {
          if (data[i].id == id) {

            this.setState({...this.state, fav: [...this.state.fav, data[i]]})
          }
      }

    }

    render() {

        return (
            <div className="App">
                <Input select={this.select} filterNames={this.filterNames}/>
                <br />
                <Favourites deleteAdded={this.deleteAdded} fav={this.state.fav}/>
                <hr className="hr"/>
                <br />
                <Names addFav={this.addFav} filterNames={this.filterNames} names={this.state.names}/>
            </div>
        )
    }
}

export default App
