import React from 'react'

// CONDITIONAL RENDERING.

const Welcome = ({name}) => {
  return (
    <div>
        {/* if name is present, show below one, else something else.  */}
      
      {/* {name ? <h1>Welcome to my app, {name}. Enjoy!!</h1> : null} */}

      {name && <h1>Welcome to my app, {name}. Enjoy!!</h1>}


    </div>
  )
}

export default Welcome
