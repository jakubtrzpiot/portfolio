import React from 'react';

const Card = ({ className }) => {
  return (
    <div
      className={`justify-self-center flex flex-col  border-2 aspect-square lg:h-screen lg:max-h-[300px] border-primary ${className}`}
    >
      <h1>Weather App</h1>
    </div>
  );
};

export default Card;
