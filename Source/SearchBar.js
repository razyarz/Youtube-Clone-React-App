import React from 'react';


class SearchBar extends React.Component {
  state = { term: ''}


  onInputChange = (event) => {
    // set state to input event
    this.setState({ term: event.target.value})

  }


  onFormSubmit = (event) => {
    event.preventDefault();
    

    // submits request to api and sets it equal to the state
    this.props.onTermSubmit(this.state.term)

  }

 


  render() {
    
    return(
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit}className="ui form">
          <div className="field">
            <label>Youtube Clone<i class="fab fa-youtube"></i> </label>
            <input
              onChange={this.onInputChange} 
              type="text"
            />
          </div>
        </form>   
      </div>
    )
  }
}




export default SearchBar;