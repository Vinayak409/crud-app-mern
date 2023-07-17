
import {styled, Card, Typography} from '@mui/material';

const StyledDiv = styled('div')`
  & > p{
    font-size: 25px;

  }
`

const VinayakChittora = () => {
  return (
    <Card>
      <Typography>This is simple crud app built using mern stack</Typography>
    </Card>
  )
}

export default VinayakChittora
