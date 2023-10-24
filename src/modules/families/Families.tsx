import { Container, Stack } from '@mui/joy';
import { FC } from 'react';
import CustomAppBar from '../../components/app-bar/AppBar';
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import FamiliesList from './components/list/FamiliesList';

const Families: FC = () => {
  return (
    <Stack width="100%" height="100%">
      <CustomAppBar title="Mes Familles" />
      <Stack
        component={Fab}
        position={'absolute'}
        bottom={'15px'}
        right={'15px'}
        bgcolor="#0B6BCB"
        color="white"
        size="small"
        aria-label="add"
      >
        <AddIcon />
      </Stack>
      <Container maxWidth="lg">
        <FamiliesList />
      </Container>
    </Stack>
  );
};

export default Families;
