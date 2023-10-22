import { Snackbar, Alert, SnackbarProps, AlertProps } from '@mui/material';
import { FC, useEffect, useState } from 'react';

interface CustomSnackbarProps {
  isOpen: boolean;
  message: string;
}

const CustomSnackbar: FC<CustomSnackbarProps & SnackbarProps & AlertProps> = ({ isOpen, message, severity }) => {
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    if (isOpen) {
      setOpenSnackbar(true);
    }
  }, [isOpen]);

  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={3000}
      onClose={handleCloseSnackbar}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
