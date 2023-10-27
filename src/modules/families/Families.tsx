import { Container, Stack } from '@mui/joy';
import { FC } from 'react';
import CustomAppBar from '../../components/app-bar/AppBar';
import FamiliesList from './components/list/FamiliesList';

const Families: FC = () => {
  return (
    <Stack width="100%" height="100%">
      <CustomAppBar title="Mes Familles" />

      <Container maxWidth="lg">
        <FamiliesList />
      </Container>
    </Stack>
  );
};

export default Families;
