import React from 'react'

const Child = ({ largeValue }) => {
  console.log("Child re-rendered with largeValue:", largeValue);
  
  return (
    <div>
    </div>
  )
}

export default React.memo(Child)
