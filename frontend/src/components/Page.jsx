import React from 'react';

const Page = (props) => {
  return (
    <div className='BaseTemplate'>
        {props.children}
    </div>
  )
};

export default Page;
