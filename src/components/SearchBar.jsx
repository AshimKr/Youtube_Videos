import React, { Component } from "react";

export default class SearchBar extends Component {
    constructor(){
        super();
        this.state = {term:''};
    }

    onFormSubmit=(e)=>{
        e.preventDefault()
        this.props.onSearchBarSubmit(this.state.term)
    }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui fluid form" onSubmit={this.onFormSubmit}>
          <div className="ui fluid icon input">
            <input type="text" value={this.state.term} onChange={(e)=> this.setState({...this.state,term:e.target.value})} placeholder="Search for video..." />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}
