'use client'

import React, { useEffect, useRef } from 'react'

const YouTubePlayer = ({ videoId }) => {
  const playerRef = useRef(null)
  const playerInstance = useRef(null) // Lưu trữ instance của player

  useEffect(() => {
    // Tải thư viện YouTube IFrame API
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

    // Khởi tạo player khi API đã sẵn sàng
    window.onYouTubeIframeAPIReady = () => {
      playerInstance.current = new YT.Player(playerRef.current, {
        height: '390',
        width: '640',
        videoId: videoId,
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      })
    }

    // Cleanup player khi component unmount
    return () => {
      if (playerInstance.current) {
        playerInstance.current.destroy()
      }
      window.onYouTubeIframeAPIReady = null
    }
  }, [videoId])

  const onPlayerReady = (event) => {
    event.target.playVideo()
  }

  const onPlayerStateChange = (event) => {
    // Xử lý khi trạng thái player thay đổi
  }

  return <div ref={playerRef} />
}

export default YouTubePlayer
