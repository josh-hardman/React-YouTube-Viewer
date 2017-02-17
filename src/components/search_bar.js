import React, { Component } from 'react';

//This is a functional component. Simple html out
//This should be your default, but if you need to, you can promote the component to a class based component

//const SearchBar = () => {
//    return <input /> //transpiles to React.createClass. You need to import React
//};

// if you use a class based component, you get access to React as its prototype. You must use a render method.
class SearchBar extends Component {
    constructor(props) {
        super(props); //get all the parent methods
        
        this.state = { term: '' };
    }
    
    render() {
        // pass our input a special event prop for onChange
        //a controlled components value only changes when the state changes. 
        return (
            <div className="search-bar">
                 <input 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
    
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
        
    //handleInputChange() or onInputChange()    
//    onInputChange(event) {
//        console.log(event.target.value)
//    }
}
    
export default SearchBar;