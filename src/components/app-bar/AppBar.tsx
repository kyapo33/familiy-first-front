import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { FC, Fragment, ReactElement } from 'react';
import { AppBarStyle } from './AppBar.style';

interface Props {
  window?: () => Window;
  children: ReactElement;
}

const HideOnScroll = (props: Props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

interface CustomAppBarProps {
  title: string;
}

const CustomAppBar: FC<CustomAppBarProps> = ({ title }) => {
  return (
    <Fragment>
      <CssBaseline />
      <HideOnScroll>
        <AppBar elevation={1} css={AppBarStyle}>
          <Toolbar variant="dense" className="toolbar">
            <Typography variant="h6" component="div">
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </Fragment>
  );
};

export default CustomAppBar;
