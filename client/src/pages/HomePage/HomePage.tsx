import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/Common/PageHeader';
import { connections } from '../../utils/spaUrls';


export default function HomePage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <PageHeader title='Getting Started' />
      </Grid>
      <Grid item xs={12}>
        <Button component={Link} to={connections.games} variant='contained' color='primary'>
          See Video Games!
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button component={Link} to={connections.users} variant='contained' color='primary'>
          See Our Users!
        </Button>
      </Grid>
    </Grid>
  );
}
