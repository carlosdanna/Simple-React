var React = require('react');
var validator = require('validator');

var EmailField = React.createClass({
  getInitialState: function(){
    return {
      "text": "",
      "error": false,
    };
  },

  handleInput: function(event){

    if(validator.isEmail(event.target.value)){
      this.setState({
        "text": event.target.value,
        "error": false
       });
     }else{
       this.setState({
         "text": event.target.value,
         "error": true
       });
     }
  },

  render: function(){
    var errorMessage ="";
    if(this.props.isRequired || this.state.error){
      errorMessage = <p className="has-error">{this.props.inputName} is not valid</p>;
    }

    return (
      <div className={"row form-group " + ((this.state.error )  ? "has-error" : "") }>
        <div className="col-sm-2">
          <label>{this.props.inputName + ": "}</label>
        </div>
        <div className="col-sm-10">
          <input className="form-control" type="text" value={this.state.text} onChange={this.handleInput} placeholder={this.props.inputName} onBlur={this.handleInput}/>
          {errorMessage}
        </div>
      </div>);

      }

});

module.exports = EmailField;
