import React, {Component} from 'react'
import User from './User';
import {Table} from 'react-bootstrap';
import UserListRow from './UserListRow';



class UserList extends Component {

    render () {
        const {data, deleteUser}=this.props;
        return (
         <div>  
        <Table class="table table-condensed table-hover table-bordered table-striped">
              <thead>
               <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>People</th>
               </tr>
               </thead>

               <tbody>
                {
          data.map(oneUser =>
            <UserListRow  key={oneUser._id} oneUser={oneUser} />
        )}
               </tbody>
        </Table>       
        </div>


        )
    }
}

export default UserList