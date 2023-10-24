import { AspectRatio, AspectRatioProps, SkeletonProps, Skeleton } from '@mui/joy';
import { FC } from 'react';

const SkeletonCard: FC<AspectRatioProps & SkeletonProps> = ({ ratio }) => {
  return (
    <AspectRatio ratio={ratio}>
      <Skeleton variant="overlay" />
    </AspectRatio>
  );
};

export default SkeletonCard;
