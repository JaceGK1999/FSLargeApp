import React from 'react';

export default function RenderAnimals({ name, image, breed, bio, age }) {

  const getAge = () => {
    return `${age} years old`;
  };
  return (
    <div>
      <h3>Here is {name}</h3>
      <img src={image} />
      <p>
        {name} is a(n) {getAge()} {breed}
      </p>
      <div>
        <p>{bio}</p>
      </div>
    </div>
  );
}
