import React from 'react';

const Paginator = ({ amount, onClick }) => {
  const newsTemplate = [];

  for (let i = 0; i < amount; i++) {
    newsTemplate[i] = (
      <a
        key={i + 1}
        onClick={(e) => {
          e.preventDefault();
          onClick(i + 1);
        }}
      >
        {i + 1}
      </a>
    );
  }

  return (
    <div>
      {newsTemplate}
    </div>
  );
};

export default Paginator;
