import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import PageHeader from 'components/Common/PageHeader';
import { connections } from 'utils/spaUrls';
import { Link } from 'react-router-dom';


export default function HomePage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <PageHeader title='Getting Started' />
      </Grid>
      <Grid item xs={12}>
        <Button component={Link} to={connections.list} variant='contained' color='primary'>
          See Video Games!
        </Button>
      </Grid>
    </Grid>
  );
}
