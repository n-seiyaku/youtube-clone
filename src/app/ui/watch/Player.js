'use client'

import ReactPlayer from 'react-player/youtube'

const Player = ({ videoId }) => {
  return (
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${videoId}`}
      config={{
        youtube: {
          playerVars: { autoplay: 1, controls: 1, modestbranding: 1 },
        },
      }}
      width="100%"
      style={{
        maxWidth: 'none',
      }}
    />
  )
}

export default Player
