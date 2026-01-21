import React from "react";


const SecondsCounter = (props) => {
  const six = Math.floor(props.seconds / 100000) % 10;
  const five = Math.floor(props.seconds / 10000) % 10;
  const four = Math.floor(props.seconds / 1000) % 10;
  const three = Math.floor(props.seconds / 100) % 10;
  const two = Math.floor(props.seconds / 10) % 10;
  const one = Math.floor(props.seconds / 1) % 10;

  return (
    <div className="bg-black d-flex justify-content-center align-items-center py-4 gap-2">

      <div className="bg-dark text-white rounded p-2 fs-1 border border-secondary">
        <i className="bi bi-clock"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
        </svg></i>
      </div>

      <div className="bg-dark text-white rounded p-2 fs-1 border border-secondary">
        {Math.floor(props.seconds / 100000) % 10}
      </div>

      <div className="bg-dark text-white rounded p-2 fs-1 border border-secondary">
        {Math.floor(props.seconds / 10000) % 10}
      </div>

      <div className="bg-dark text-white rounded p-2 fs-1 border border-secondary">
        {Math.floor(props.seconds / 1000) % 10}
      </div>

      <div className="bg-dark text-white rounded p-2 fs-1 border border-secondary">
        {Math.floor(props.seconds / 100) % 10}
      </div>
      <div className="bg-dark text-white rounded p-2 fs-1 border border-secondary">
        {Math.floor(props.seconds / 10) % 10}
      </div>
      <div className="bg-dark text-white rounded p-2 fs-1 border border-secondary">
        {props.seconds % 10}
      </div>
    </div>
  );
};

export default SecondsCounter;