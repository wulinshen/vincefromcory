import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import DeleteUser from './DeleteUser';


const UserListRow = ({oneUser, deleteUser})=> {
  return (
        <tr>
           <td><Link to={'/users/' + oneUser._id}>{oneUser._id}</Link></td>
           <td>{oneUser.name}</td>
           <td>{oneUser.people}</td>
           <td><Link to={'/deleteuser/'+ oneUser._id}> <DeleteUser/> </Link></td>
           <td ><Link to={'/deleteuser/'+ oneUser._id}> <button onClick={deleteUser}> Delete </button></Link></td>
        </tr>
  );
};

UserListRow.propTypes = {
  oneUser: PropTypes.object.isRequired
};

export default UserListRow;
