import React , {PropTypes} from 'react';
//import ReactDOM from 'react-dom';
import $ from 'jquery';

class SingerList extends React.Component 
{
        constructor(props) 
        {
            super(props);

          this.state={id:2,name:[{"LastName":"Tang"},{"LastName":"Wu"},{"LastName":"Gou"}], items:[]};
        
        
        let tempItems;
        let itemArray;
        //let stringifyiteArray;

        let get =function(url){
        return new Promise(function(success, error){
        $.ajax({
        url:url,
          dataType:"json",
          success:success,
          error:error
          });
        });
        };
        
        get("https://vince2ndtry.herokuapp.com/cities")
         .then(data =>
           {
           tempItems=data;
           itemArray=tempItems.map(itemObj=>itemObj.name),
           this.setState({items:itemArray}),
           //this.props.stringifyiteArray=JSON.stringify(itemArray);
           console.log("this.props.stringifyiteArray", itemArray, this.props.stringifyiteArray);
           }
        );
      }



   
    render() {
      return ( 
    <div>
      <h1> This is from SingerList.js</h1>
      <h1> this.state.id: {this.state.id}</h1>
      <h1> this.state.items: {this.state.items[3]}</h1>
      <ul>
        {this.state.items.map((item, index)=>{ return <li key={index}>{index} - {item}</li>})}
      </ul>
      <h3> {this.props.stringifyiteArray}</h3>
      <h2> this.state.name[2].LastName: {this.state.name[2].LastName}</h2>
    </div>
      );
    }

   
}

 SingerList.propTypes = {
  stringifyiteArray: React.PropTypes.string
 }

  SingerList.defaultProps = {
  stringifyiteArray: "stringifyiteArray value"
 }

export default SingerList;