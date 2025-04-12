import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="max-w-[1400px] p-4 md:p-6 mx-auto">{children}</div>;
};

export default Container;
