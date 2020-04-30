import React,{Component} from 'react';
import CardList from '../components/CardList';
import {robots} from './robots';
import SearchBox from '../components/SearchBox.js';
import './app.css';
import Scroll from '../components/Scroll.js';


class App extends Component {

	    constructor(){
	    super()
      this.state = {
       robots: robots,
       searchfield:''
      }
	}
  
        onSearchChange = (event) => {
          this.setState({searchfield: event.target.value})
        }


	render() {
    const filteredRobots = this.state.robots.filter(robot  =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    
      return( 
       <div className = 'tc'>

        <h1 className='f1'>RoboFriends</h1>

         <SearchBox searchChange={this.onSearchChange}/>

          <Scroll>
           <CardList obots={filteredRobots} />
          </Scroll>

        </div>

        );
      }
  }

export default App;