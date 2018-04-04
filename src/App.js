import React, { Component } from 'react';
import Form from './form/form';
import Table from './table/table';
import './App.css';

class App extends Component {
  state={
    persons:[],
    selectedPerson:{},
    epIndex:null
  };

  formSubmitter=(val)=>{
    let personsarr=[...this.state.persons];
    let index=this.state.epIndex;
    let person=personsarr.find(e=>e.name===val.name);
    if(!person){
      personsarr.push(val);
      this.setState({persons:personsarr});
    }else if(person && index>=0){
      personsarr[this.state.epIndex]=val;
      this.setState({persons:personsarr});
      this.setState({epIndex:null});
    }else{
      alert("duplicate record exists")
    }
    let formempty={};
    this.setState({selectedPerson:formempty});
  }
  personEditHandler=(person,index) =>{
    this.setState({selectedPerson:person});
    this.setState({epIndex:index})
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6">
            <Form submit={this.formSubmitter} personEdit={this.state.selectedPerson}/>
          </div>
          <div className="col-sm-6 col-md-6">
            <Table rows={this.state.persons} selectedPerson={this.personEditHandler}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;