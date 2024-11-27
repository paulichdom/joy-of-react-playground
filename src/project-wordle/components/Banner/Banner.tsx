import * as React from 'react';

type BannerProps = {
  status: string;
  children?: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({status, children}) => {
  return <div className={`${status} banner`}>{children}</div>;
}

export default Banner;
