import { Box, Button, Container, Stack, Typography } from '@mui/joy';
import { useProfilPicture } from './useProfilePicture';
import CustomSnackbar from '../../../components/snackbar/CustomSnackbar';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Preview from './components/Preview';
import { FC } from 'react';
import { Backdrop, CircularProgress, Dialog } from '@mui/material';
import { useNavigate } from 'react-router';
import { RoutesPath } from '../../../routes/Paths';

interface ProfilePictureProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfilePicture: FC<ProfilePictureProps> = ({ open, setOpen }) => {
  const { imageSrc, error, takePicture, onUpload, loading, uploadError, handleClose } = useProfilPicture(setOpen);

  return (
    <Dialog fullScreen open={open} onClose={() => setOpen(false)}>
      <Stack width="100%" height="100%" paddingTop="16px">
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
          <CircularProgress color="primary" />
        </Backdrop>
        <Container maxWidth="lg">
          <Stack component={Typography} textAlign="center" fontSize="15px" level="body-md" paddingBottom="10px">
            Ajouter une photo de profil ou passez cette étape
            <br />
            Vous pourriez toujours le faire plus tard
          </Stack>
          <Preview takePicture={takePicture} imgSrc={imageSrc ?? ''} onUpload={onUpload} />
          <CustomSnackbar
            isOpen={error || Boolean(uploadError)}
            severity="error"
            message="Impossible d'ajouter l'image"
          />
          <Box position="absolute" bottom={30} left={50} right={50} margin="auto 0">
            <Button
              fullWidth
              color="primary"
              variant="outlined"
              endDecorator={<NavigateNextIcon />}
              onClick={handleClose}
            >
              {'Passez cette étape'}
            </Button>
          </Box>
        </Container>
      </Stack>
    </Dialog>
  );
};

export default ProfilePicture;
