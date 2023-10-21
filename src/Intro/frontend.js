import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const divsToUpdate = document.querySelectorAll('.green-blocks-intro');

divsToUpdate.forEach(div => {
  const data = JSON.parse(div.querySelector('pre').innerText);
  ReactDOM.render(<OurComponent {...data} />, div);
  div.classList.remove('green-blocks-intro'); // remove the dot before class name
});

function OurComponent(props) {
  return (
    <div className={`green-blocks-intro container mx-auto p-6 ${props.style}`}>
      <h2 className="text-2xl font-bold">{props.header}</h2>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </div>
  );
}