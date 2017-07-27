import React from 'react';
import PropTypes from 'prop-types';

const AddComment = ({name, handleChange}) => {
  return (
    <div className='comment'>
      <div className='comment-form' >
        <textarea
          placeholder='Anything to add or suggest to your manager?'
          name={name}
          className='comment-input'
          onChange={handleChange}
          />
      </div>
    </div>
  )
}

AddComment.propTypes = {
  handleChange: PropTypes.func,
  name: PropTypes.string
}

export default AddComment;
