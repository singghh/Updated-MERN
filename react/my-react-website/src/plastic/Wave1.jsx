import React from 'react'
import Wave from 'react-wavify'

const Wave1 = () => (
    <Wave fill='#2e9cf5'
          paused={false}
          style={{ display: 'flex' }}
          options={{
            height: 0,
            amplitude: 40,
            speed: 0.15,
            points: 4,
            
          }}
    />
  )
export default Wave1