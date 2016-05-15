var React = require('react');
var ReactDOM = require('react-dom');

var DATA = {
  title: 'Menu',
  items: [
    {id:1, name: 'tacos', type: 'maxican'},
    {id:2, name: 'burrito', type: 'maxican'},
    {id:3, name: 'tostada', type: 'maxican'},
    {id:4, name: 'hush poppies', type: 'southern'}
  ]
};

var Menu = React.createClass({
  render () {
    var items = DATA.items.map(function(item){
      return <li>{item.name}</li>;
    });
    return (
      <div>
        <h1>{DATA.title}</h1>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
});

ReactDOM.render(<Menus/>,document.body);
