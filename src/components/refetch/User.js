import React, {Component} from 'react'

class User extends Component {
    render () {
        return (
            <div>
                {this.props.data.name} + {this.props.data.people} 
            </div>
        )
    }
}

export default User