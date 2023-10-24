import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/joy';
import { FC } from 'react';
import { useFamiliesList } from './useFamiliesList';
import SkeletonCard from '../../../../components/skeleton-card/SkeletonCard';

const FamiliesList: FC = () => {
  const { families, isLoading } = useFamiliesList();

  if (isLoading) {
    return (
      <Stack paddingTop={'16px'}>
        <Grid container rowSpacing={2} spacing={2}>
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <Grid key={index} xs={12}>
              <SkeletonCard key={index} ratio="5" />
            </Grid>
          ))}
        </Grid>
      </Stack>
    );
  }

  return families && families?.length > 0 ? (
    <Stack width="100%" height="100%"></Stack>
  ) : (
    <Stack width="100%" height="100%">
      <Card variant="outlined">
        <CardContent>
          <Typography level="h4" component="div" gutterBottom>
            Vous n'appartenez à aucune famille.
          </Typography>
          <Typography level="body-md" color="primary">
            Il semble que vous n'ayez pas encore rejoint de famille. Vous pouvez en créer une ou rejoindre une famille
            existante pour commencer.
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default FamiliesList;
