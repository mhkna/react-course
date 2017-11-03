import React from 'react';

const Option = (props) => (
  <div>
    * {props.optionText}
    <button
    className="button button--link"
      onClick={(e) => {
        //passing optionText up to handleDeleteOption
        props.handleDeleteOption(props.optionText);
      }}
    >
      remove
    </button>
  </div>
);

export default Option;
