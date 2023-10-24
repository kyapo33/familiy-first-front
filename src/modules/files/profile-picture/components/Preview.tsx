import { Box, CardCover, Stack, colors } from '@mui/joy';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import { FC } from 'react';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useGetUserProfile } from '../../../../hooks/queries/useGetUserProfile';

interface PreviewProps {
  imgSrc: string;
  takePicture: () => Promise<void>;
  onUpload: (src: string) => Promise<void>;
}

const Preview: FC<PreviewProps> = ({ imgSrc, takePicture, onUpload }) => {
  return (
    <Box border={`1px solid ${colors.blue[100]}`} padding="10px" borderRadius="10px" bgcolor="#FBFCFE">
      <Stack component={Card} minHeight="200px" justifyContent="center" alignItems="center">
        <Stack component={CardCover}>
          {!imgSrc ? (
            <Stack
              component={AddAPhotoIcon}
              width="25% !important"
              alignSelf="center"
              onClick={takePicture}
              fontSize="small"
            />
          ) : (
            <img src={imgSrc} loading="lazy" alt="" />
          )}
        </Stack>
      </Stack>
      {imgSrc && (
        <CardContent orientation="horizontal">
          <Stack
            component={Button}
            variant="solid"
            size="md"
            color="primary"
            marginRight="auto"
            alignSelf="start"
            fontWeight={600}
            marginTop="10px"
            onClick={takePicture}
          >
            Remplacer
          </Stack>
          <Stack
            component={Button}
            variant="solid"
            size="md"
            color="primary"
            marginLeft="auto"
            alignSelf="end"
            fontWeight={600}
            onClick={() => onUpload(imgSrc)}
          >
            Enregistrer
          </Stack>
        </CardContent>
      )}
    </Box>
  );
};

export default Preview;
