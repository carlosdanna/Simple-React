var React = require('react');

var ListItem = React.createClass({
  render:function(){
    return (
      <div>
        <div className='col-sm-3'>{this.props.person.Firstname}</div>
        <div className='col-sm-3'>{this.props.person.Lastname}</div>
        <div className='col-sm-3'>{this.props.person.Description}</div>
        <div className='col-sm-3'>{this.props.person.Email}</div>
        </div>
        );
  }
});


module.exports = ListItem;
