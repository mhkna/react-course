import React from 'react';

const Option = (props) => {
  return (
    <div>
      * {props.optionText}
      <button
        onClick={(e) => {
          //passing optionText up to handleDeleteOption
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

export default Option;
