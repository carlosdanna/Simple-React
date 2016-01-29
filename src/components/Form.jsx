var React = require('react');
var InputField = require('./InputField.jsx');
var EmailField = require('./EmailField.jsx');
var List = require('./List.jsx');


var Form = React.createClass({
  getInitialState: function(){
    return {people: []};
  },

  handleAddClick: function(){
    var randomNumber = Date.now()/1000;
    console.log(this);
    var person = {
      Id: randomNumber,
      Firstname: this.refs.firstname.state.text,
      Lastname: this.refs.lastname.state.text,
      Description: this.refs.description.state.text,
      Email: this.refs.email.state.text
    }
    this.state.people.push(person);
    this.setState({
      people: this.state.people
    });
    console.log(this.state.people);
  },
  render: function(){
    var marginTopStyle = {"margin-top": 20};
    return (
      <div className={"panel panel-" + this.props.panelType} style={marginTopStyle}>
        <div className="panel-heading">
          <h3>{this.props.panelTitle}</h3>
        </div>
        <div className="panel-body">
          <InputField inputName = "First name" isRequired = "true" ref="firstname"/>
          <InputField inputName = "Last name" isRequired = "true" ref="lastname"/>
          <InputField inputName = "Description" ref="description"/>
          <EmailField inputName = "Email" ref="email"/>
          <button className = "btn btn-primary"  onClick={this.handleAddClick}>Create</button>
          <button className = "btn btn-default">Cancel</button>
          <hr />
          <div clasName="row">
            <div className='col-sm-3'><h4>First name</h4></div>
            <div className='col-sm-3'><h4>Last name</h4></div>
            <div className='col-sm-3'><h4>Description</h4></div>
            <div className='col-sm-3'><h4>Email</h4></div>
            </div>
          <List people={this.state.people} />
        </div>


      </div>
    );
  }
});

module.exports = Form;
