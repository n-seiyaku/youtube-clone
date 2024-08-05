'use client'

import React, { useEffect, useRef } from 'react'

const YouTubePlayer = ({ videoId }) => {
  const playerRef = useRef(null)

  useEffect(() => {
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

    window.onYouTubeIframeAPIReady = () => {
      new YT.Player(playerRef.current, {
        height: '390',
        width: '640',
        videoId: videoId,
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      })
    }

    const onPlayerReady = (event) => {
      event.target.playVideo()
    }

    const onPlayerStateChange = (event) => {}

    return () => {
      window.onYouTubeIframeAPIReady = null
    }
  }, [videoId])

  return <div ref={playerRef} />
}

export default YouTubePlayer
