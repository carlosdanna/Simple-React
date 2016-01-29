var React = require('react');

var InputField = React.createClass({
  getInitialState: function(){
    return {"text": "",
            "error": false,
          };
  },

  handleInput: function(event){
    if(event.target.value === ""){

      this.setState({
        "text": event.target.value,
        "error": true
       });
     }else{
       this.setState({
         "text": event.target.value,
         "error": false
       });
     }
  },
  clear: function(){
    this.setState({
      "text":"",
      "error": false
    });
  },

  render: function(){
    var errorMessage ="";
    if(this.props.isRequired && this.state.error){
      errorMessage = <p className="has-error">{this.props.inputName} is required</p>;
    }

    return (
      <div className={"row form-group " + ((this.state.error && this.props.isRequired)  ? "has-error" : "") }>
        <div className="col-sm-2">
          <label>{this.props.inputName + ": "}</label>
        </div>
        <div className="col-sm-10">
          <input className="form-control" type="text" value={this.state.text} onChange={this.handleInput} placeholder={this.props.inputName} onBlur ={this.handleInput}/>
          {errorMessage}
        </div>
      </div>);

      }

});

module.exports = InputField;
