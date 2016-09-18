import React, {Component} from 'react'
import { Link } from 'react-router'
import {connect} from 'react-redux'


class User extends Component {
    constructor(props, context){
    super(props, context);
  }
    
    render () {
      //const {title, length} = this.props.courses;
      console.log('this.props.courses', this.props.courses);
        return (
            <div>
               <ol>
                 <li>{this.props.courses[1].title}</li>
                 <li>{this.props.courses[2].title}</li>
               </ol>
             </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
  return {
    courses:state.courses
  };
}



export default connect(mapStateToProps)(User);
