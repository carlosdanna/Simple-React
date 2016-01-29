var React = require('react');
var ListItem = require('./ListItem.jsx');


var List = React.createClass({
  render: function(){

    var listItem = this.props.people.map(function(person){
      return (<ListItem key={person.Id} person={person} />);
    });
    return (<div className='row'>{listItem}</div>);
  }
});

module.exports = List;
