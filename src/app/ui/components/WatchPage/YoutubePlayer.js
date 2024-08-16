'use client'

import ReactPlayer from 'react-player/youtube'
import { YouTubeEmbed } from '@next/third-parties/google'

const YoutubePlayer = ({ videoId }) => {
  return (
    // <ReactPlayer
    //   url={`https://www.youtube.com/watch?v=${videoId}`}
    //   config={{
    //     youtube: {
    //       playerVars: { autoplay: 1, controls: 1, modestbranding: 1 },
    //     },
    //   }}
    //   width="100%"
    //   style={{
    //     maxWidth: 'none',
    //   }}
    // />
    <YouTubeEmbed videoid={videoId} params="autoplay=1" style="max-width: none; border-radius: 12px" />
  )
}

export default YoutubePlayer
