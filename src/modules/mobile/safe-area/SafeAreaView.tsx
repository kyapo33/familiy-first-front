import { Stack } from '@mui/joy';
import { ReactNode, FC } from 'react';
import { safeAreaViewStyle } from './SafeAreaView.style';

interface SafeAreaViewProps {
  children: ReactNode;
}

const SafeAreaView: FC<SafeAreaViewProps> = ({ children }) => {
  return <Stack css={safeAreaViewStyle}>{children}</Stack>;
};

export default SafeAreaView;
