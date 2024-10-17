import React from 'react';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <section className="text-primary-text mt-7 mx-10 lg:mx-12">{children}</section>;
};

export default Container;
