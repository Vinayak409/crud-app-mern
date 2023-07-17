import { useEffect, useState } from 'react';

import {Table, TableHead, TableBody, TableRow, TableCell, styled, Button} from '@mui/material';

import { getUsers, deleteUser } from '../service/api';

import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;

const StyledTableHeadRow = styled(TableHead)`
  background: #000000;
  & > tr > th{
    color: #fff;
    font-size: 20px;
  }
`;

const StyledTableBodyRow = styled(TableRow)`
  & > td{
    font-size: 20px;
  }
`;


const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    getAllUsers();
  }, []);

  const getAllUsers = async ()=>{
    let response = await getUsers();
    setUsers(response.data);
  }

  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getAllUsers();
  }

  return (
    <StyledTable>
      <StyledTableHeadRow>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </StyledTableHeadRow>

      <TableBody>
        {
          users.map(user => (
            <StyledTableBodyRow key={user.userId}>
              <TableCell>{user.userId}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button variant='contained' style={{marginRight: '10px'}} component={Link} to={`/edituser/${user.userId}`}>Edit</Button>
                <Button variant='contained' color='secondary' onClick={() => deleteUserDetails(user.userId)}>Delete</Button>
              </TableCell>
            </StyledTableBodyRow>
          ))
        }
      </TableBody>
    </StyledTable>
  )
}

export default AllUsers
