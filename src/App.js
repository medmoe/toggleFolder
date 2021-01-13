import react from 'react';
import './App.css';

class Display extends react.Component {
  constructor(props){
    super(props);
    this.state = {
      isToggleOn : false
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle(){
    this.setState(state => ({
      isToggleOn : !(this.state.isToggleOn)
    }));
    console.log(this.state.isToggleOn);
  }
  render(){
    if(!this.state.isToggleOn){
      return <div className="container">
          <h2>Home</h2>
          <ul>
            <li>File1</li>
            <li>File2</li>
            <li>File3</li>
          </ul>
          <button onClick={this.toggle}>Toggle</button>
      </div>
    }else{
      return <div className="container">
                <h2>Home</h2>
                <button onClick={this.toggle}>Toggle</button>
              </div>
              
      
      
    }
  }
}
function App() {
  return (
    <div className="App">
        <Display />
    </div>
  );
}

export default App;
