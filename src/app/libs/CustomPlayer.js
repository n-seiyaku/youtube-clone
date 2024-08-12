const CustomPlayer = () => {
  return (
    <div class="ytp-left-controls">
      <a class="ytp-prev-button ytp-button" role="button" aria-disabled="true" style="display: none;">
        <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
          <use class="ytp-svg-shadow" xlink:href="#ytp-id-11"></use>
          <path class="ytp-svg-fill" d="m 12,12 h 2 v 12 h -2 z m 3.5,6 8.5,6 V 12 z" id="ytp-id-11"></path>
        </svg>
      </a>
      <button
        class="ytp-play-button ytp-button"
        aria-keyshortcuts="k"
        data-title-no-tooltip="Phát"
        aria-label="Phát phím tắt k"
        title="Phát (k)"
      >
        <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
          <use class="ytp-svg-shadow" xlink:href="#ytp-id-1958"></use>
          <path
            class="ytp-svg-fill"
            d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"
            id="ytp-id-1958"
          ></path>
        </svg>
      </button>
      <a
        class="ytp-next-button ytp-button"
        role="button"
        data-title-no-tooltip="Tiếp theo"
        aria-keyshortcuts="SHIFT+n"
        aria-disabled="false"
        aria-label="Tiếp theo phím tắt SHIFT+n"
        data-duration="29:20"
        data-preview="https://i.ytimg.com/vi/knakUcYiwFY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCowqt751OiUxLWuigGhPQojFrfGg"
        data-tooltip-text="[ 𝑷𝒍𝒂𝒚𝒍𝒊𝒔𝒕 ] 𝕋𝔸𝕂𝔸𝕐𝔸ℕ"
        href="https://www.youtube.com/watch?v=knakUcYiwFY"
        title="Tiếp theo (SHIFT+n)"
      >
        <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
          <use class="ytp-svg-shadow" xlink:href="#ytp-id-13"></use>
          <path
            class="ytp-svg-fill"
            d="M 12,24 20.5,18 12,12 V 24 z M 22,12 v 12 h 2 V 12 h -2 z"
            id="ytp-id-13"
          ></path>
        </svg>
      </a>
      <span class="ytp-volume-area">
        <button
          class="ytp-mute-button ytp-button"
          aria-keyshortcuts="m"
          data-title-no-tooltip="Tắt tiếng"
          style=""
          aria-label="Tắt tiếng phím tắt m"
          title="Tắt tiếng (m)"
        >
          <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
            <use class="ytp-svg-shadow" xlink:href="#ytp-id-15"></use>
            <use class="ytp-svg-shadow" xlink:href="#ytp-id-16"></use>
            <defs>
              <clipPath id="ytp-svg-volume-animation-mask">
                <path d="m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"></path>
                <path d="M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"></path>
                <path
                  class="ytp-svg-volume-animation-mover"
                  d="M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z"
                  transform="translate(0, 0)"
                ></path>
              </clipPath>
              <clipPath id="ytp-svg-volume-animation-slash-mask">
                <path
                  class="ytp-svg-volume-animation-mover"
                  d="m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z"
                  transform="translate(0, 0)"
                ></path>
              </clipPath>
            </defs>
            <path
              class="ytp-svg-fill ytp-svg-volume-animation-speaker"
              clip-path="url(#ytp-svg-volume-animation-mask)"
              d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z"
              fill="#fff"
              id="ytp-id-15"
            ></path>
            <path
              class="ytp-svg-fill ytp-svg-volume-animation-hider"
              clip-path="url(#ytp-svg-volume-animation-slash-mask)"
              d="M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z"
              fill="#fff"
              id="ytp-id-16"
              style="display: none;"
            ></path>
          </svg>
        </button>
        <div
          class="ytp-volume-panel"
          role="slider"
          aria-valuemin="0"
          aria-valuemax="100"
          tabindex="0"
          aria-valuenow="100"
          aria-valuetext="100% âm lượng"
          aria-label="Âm lượng"
          style=""
          title="Âm lượng"
        >
          <div class="ytp-volume-slider" draggable="true" style="touch-action: none;">
            <div class="ytp-volume-slider-handle" style="left: 40px;"></div>
          </div>
        </div>
      </span>
      <div class="ytp-time-display notranslate" style="">
        <span class="ytp-time-clip-icon">
          <svg height="100%" version="1.1" viewBox="0 0 24 24" width="100%">
            <path d="M22,3h-4l-5,5l3,3l6-6V3L22,3z M10.79,7.79C10.91,7.38,11,6.95,11,6.5C11,4.01,8.99,2,6.5,2S2,4.01,2,6.5S4.01,11,6.5,11 c0.45,0,.88-0.09,1.29-0.21L9,12l-1.21,1.21C7.38,13.09,6.95,13,6.5,13C4.01,13,2,15.01,2,17.5S4.01,22,6.5,22s4.5-2.01,4.5-4.5 c0-0.45-0.09-0.88-0.21-1.29L12,15l6,6h4v-2L10.79,7.79z M6.5,8C5.67,8,5,7.33,5,6.5S5.67,5,6.5,5S8,5.67,8,6.5S7.33,8,6.5,8z M6.5,19C5.67,19,5,18.33,5,17.5S5.67,16,6.5,16S8,16.67,8,17.5S7.33,19,6.5,19z"></path>
          </svg>
        </span>
        <span>
          <span class="ytp-time-current">3:51</span>
          <span class="ytp-time-separator"> / </span>
          <span class="ytp-time-duration">23:13</span>
        </span>
        <span class="ytp-clip-watch-full-video-button-separator">•</span>
        <span class="ytp-clip-watch-full-video-button">Xem toàn bộ video</span>
        <button class="ytp-live-badge ytp-button" disabled="true">
          Trực tiếp
        </button>
      </div>
      <div class="ytp-chapter-container" style="display: none;">
        <button class="ytp-chapter-title ytp-button fitted-chapter-button ytp-chapter-container-disabled" disabled="">
          <span class="ytp-chapter-title-prefix" aria-hidden="true">
            •
          </span>
          <div class="ytp-chapter-title-content" title="Xem chương" aria-label=""></div>
          <div class="ytp-chapter-title-chevron">
            <svg height="100%" viewBox="0 0 24 24" width="100%">
              <path d="M9.71 18.71l-1.42-1.42 5.3-5.29-5.3-5.29 1.42-1.42 6.7 6.71z" fill="#fff"></path>
            </svg>
          </div>
        </button>
      </div>
      <div class="ytp-chapter-container" style="display: none;">
        <button class="ytp-chapter-title ytp-button ytp-chapter-container-disabled fitted-chapter-button" disabled="">
          <span class="ytp-chapter-title-prefix" aria-hidden="true">
            •
          </span>
          <div
            class="ytp-chapter-title-content"
            title="Xem khoảnh khắc quan trọng"
            aria-label="Xem khoảnh khắc quan trọng"
          ></div>
          <div class="ytp-chapter-title-chevron">
            <svg height="100%" viewBox="0 0 24 24" width="100%">
              <path d="M9.71 18.71l-1.42-1.42 5.3-5.29-5.3-5.29 1.42-1.42 6.7 6.71z" fill="#fff"></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  )
}

export default CustomPlayer
