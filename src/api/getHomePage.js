import { fakeChannelUrl, fakeHomepagePhotoRequest, fakeHomepageRequest, fakeView } from '@/api/fakeHomepageRequest'

import getChannelPhotosAndCustomUrls from '@/api/getChannelPhotosAndCustomUrls'
import getVideoView from '@/api/getVideoView'
import he from 'he'
import moment from 'moment'
import youtubeService from '@/api/apiConfig'

const getHomePage = async (nextPageToken = '') => {
  try {
    // const response = await youtubeService.search.list({
    //   part: 'snippet',
    //   maxResults: 50,
    //   q: '',
    //   type: 'video',
    //   regionCode: 'VN',
    //   order: 'date',
    //   relevanceLanguage: 'vi',
    //   nextPageToken: nextPageToken,
    // })

    // const channelIds = []
    // const videoIds = []

    // const homePageData = {
    //   data: [],
    //   nextPageToken: response.data?.nextPageToken || '',
    // }

    // response.data.items.map((item) => {
    //   const data = {
    //     videoId: item.id.videoId,
    //     channelId: item.snippet.channelId,
    //     thumbnail: `https://i.ytimg.com/vi/${item.id.videoId}/mqdefault.jpg`,
    //     title: he.decode(item.snippet.title),
    //     channelPhoto: '',
    //     channelName: item.snippet.channelTitle,
    //     customUrl: '',
    //     views: '',
    //     relativeTime: moment(item.snippet.publishTime).fromNow(),
    //   }

    //   videoIds.push(data.videoId)
    //   channelIds.push(data.channelId)
    //   homePageData.data.push(data)
    // })

    // const { channelPhotos, customUrls } = await getChannelPhotosAndCustomUrls(channelIds)
    // const videoViews = await getVideoView(videoIds)

    // homePageData.data.map((item) => {
    //   item.channelPhoto = channelPhotos[item.channelId]
    //   item.customUrl = customUrls[item.channelId]
    //   item.views = videoViews[item.videoId]
    // })

    const homePageData = {
      data: [
        {
          videoId: '6UQApsFBQZ8',
          channelId: 'UCEQs1oUkzcxQcEvee_LeFLw',
          thumbnail: 'https://i.ytimg.com/vi/6UQApsFBQZ8/mqdefault.jpg',
          title: 'THỜI SỰ TỐI 01/9',
          channelPhoto:
            'https://yt3.ggpht.com/FewJuhVFKVxunh1d5ILSgqXsdvnYSmxx5qo_fKpzMSwO1H_2LaSyNX2513E9JjtQ0L_05eFGsnE=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'Truyền hình Quảng Ngãi',
          customUrl: '@truyenhinhquangngai',
          views: '865',
          relativeTime: 'an hour ago',
        },
        {
          videoId: 'KRoRse6LYIk',
          channelId: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
          thumbnail: 'https://i.ytimg.com/vi/KRoRse6LYIk/mqdefault.jpg',
          title: 'TNA X Division Wrestling Champion Zachary Wentz is ready to take on Wes Lee! 👊 #NXTNoMercy',
          channelPhoto:
            'https://yt3.ggpht.com/ytc/AIdro_ntokFOUW3fcSb3hxw2V2svi3QaKr0ofCpgtgH0FqSDZJiy=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'WWE',
          customUrl: '@wwe',
          views: '13412',
          relativeTime: '2 hours ago',
        },
        {
          videoId: '3kd6RTrRNRg',
          channelId: 'UC8opYphJsG9nFLMIUoAtEVA',
          thumbnail: 'https://i.ytimg.com/vi/3kd6RTrRNRg/mqdefault.jpg',
          title: 'Building a BEDROCK Factory in Minecraft Create',
          channelPhoto:
            'https://yt3.ggpht.com/GEYLj8wgl7rBbHdXJORCYkPBRWbdVFuJB8b0mPsh-ddmSkQBOc6-bWmf7PcjEm-fuGbBqVtR=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'Sigils',
          customUrl: '@sigils',
          views: '8546',
          relativeTime: '2 hours ago',
        },
        {
          videoId: 'vCuA9nMs8B8',
          channelId: 'UC6c1z7bA__85CIWZ_jpCK-Q',
          thumbnail: 'https://i.ytimg.com/vi/vCuA9nMs8B8/mqdefault.jpg',
          title: 'Will Erik ten Hag last until Christmas with Manchester United? | ESPN FC Extra Time',
          channelPhoto:
            'https://yt3.ggpht.com/ytc/AIdro_m9M03AM9MAPhowS2oDLOamub1K-6D4mlzMYY0I44Sn4bY=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'ESPN FC',
          customUrl: '@espnfc',
          views: '6646',
          relativeTime: '3 hours ago',
        },
        {
          videoId: 'hpFOTo4zhPc',
          channelId: 'UCGWkDcYbDKP9r--ym28YwAQ',
          thumbnail: 'https://i.ytimg.com/vi/hpFOTo4zhPc/mqdefault.jpg',
          title: 'EPT Barcelona 2024: €100K Super High Roller - DAY 2',
          channelPhoto:
            'https://yt3.ggpht.com/ytc/AIdro_nJ2TKfmEP-GAixJ0mpvNzD3DzMryBJGow7P7A6MaNTdV0=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'PokerStars',
          customUrl: '@pokerstars',
          views: '121497',
          relativeTime: '4 hours ago',
        },
        {
          videoId: 'VbI8_lL_H-Q',
          channelId: 'UCoLrcjPV5PbUrUyXq5mjc_A',
          thumbnail: 'https://i.ytimg.com/vi/VbI8_lL_H-Q/mqdefault.jpg',
          title: 'Cardinals vs. Yankees Game Highlights (9/1/24) | MLB Highlights',
          channelPhoto:
            'https://yt3.ggpht.com/ytc/AIdro_m7Zarb7n7bd4-NiuFBupJiuYleRAvPl3O7I3fnbkaCC_Lo=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'MLB',
          customUrl: '@mlb',
          views: '54037',
          relativeTime: '4 hours ago',
        },
        {
          videoId: 'B7NUNXPbOQs',
          channelId: 'UCY7GIDaXNnMviPvijIQUWzg',
          thumbnail: 'https://i.ytimg.com/vi/B7NUNXPbOQs/mqdefault.jpg',
          title: 'TIN BÓNG ĐÁ 2/9: MANCHESTER UNITED THẢM BẠI, CHELSEA BỊ CẦM HÒA, REAL MADRID GIÀNH CHIẾN THẮNG',
          channelPhoto:
            'https://yt3.ggpht.com/6D2hTrfE7oM4banjrJkfmfxiGdvWGwA1muyN-4bgXIbmLF3N_b7nJ468d4qyQzfZUVMMpsjBTQ=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'BLV Anh Quân News',
          customUrl: 'blvanhquannews',
          views: '30074',
          relativeTime: '4 hours ago',
        },
        {
          videoId: 'ACE1TX0HqCo',
          channelId: 'UCClNRixXlagwAd--5MwJKCw',
          thumbnail: 'https://i.ytimg.com/vi/ACE1TX0HqCo/mqdefault.jpg',
          title: 'Preparing for DYING LIGHT: THE BEAST with Vanoss & Nogla!',
          channelPhoto:
            'https://yt3.ggpht.com/ytc/AIdro_nmhnD_5Byu_HfT-0UNEEPCYKU1Pw2aE4WSX6f_DhIhHqg=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'H2ODelirious',
          customUrl: '@h2odelirious',
          views: '15467',
          relativeTime: '4 hours ago',
        },
        {
          videoId: '97h8UbPINMQ',
          channelId: 'UC9mBJdNZxwE-La5vX0Kozvg',
          thumbnail: 'https://i.ytimg.com/vi/97h8UbPINMQ/mqdefault.jpg',
          title: 'a 29 Year Old Man plays a nightmare',
          channelPhoto:
            'https://yt3.ggpht.com/IWDgYfKTBzLrcaTNNOSJY2IIXySP756_g_RKyUjnV5XYd0KUMC0aRsz88J05nnbjXBi644YKIcw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'Failboat',
          customUrl: '@failboat',
          views: '71510',
          relativeTime: '4 hours ago',
        },
        {
          videoId: 'u7c9LJKaQRE',
          channelId: 'UClOnJwSzSOKMh_tvCkIFRbQ',
          thumbnail: 'https://i.ytimg.com/vi/u7c9LJKaQRE/mqdefault.jpg',
          title: 'This is why we stick to the basics',
          channelPhoto:
            'https://yt3.ggpht.com/y9FxXDqiGWDZPMa-DD61U2C3N0PZD8NHmn5SES8PmYsK3C9LnO8hNe5Y_A7aWoqP11Voj-Nv4g=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'Fredo on TV',
          customUrl: '@fredoontv',
          views: '15330',
          relativeTime: '4 hours ago',
        },
        {
          videoId: 'cb6dEO2sD7A',
          channelId: 'UCort3mldTtMErPqprSlSfng',
          thumbnail: 'https://i.ytimg.com/vi/cb6dEO2sD7A/mqdefault.jpg',
          title: 'Willax en vivo - WILLAX DEPORTES - CONTRACORRIENTE - REY CON BARBA - 01/09/2024 | Willax',
          channelPhoto:
            'https://yt3.ggpht.com/ytc/AIdro_m_E-w4YYdWvCmkppv39ockqjEUtydS2yue-Sr5ynZp52xx=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'Willax Televisión',
          customUrl: '@willaxtv',
          views: '6939',
          relativeTime: '4 hours ago',
        },
        {
          videoId: 'nQJNR4Jio9w',
          channelId: 'UCIr4vkCsn0tdTW2xZ1jRG1g',
          thumbnail: 'https://i.ytimg.com/vi/nQJNR4Jio9w/mqdefault.jpg',
          title: 'This is WHY Donald Trump will win the 2024 ELECTION!!!!',
          channelPhoto:
            'https://yt3.ggpht.com/ytc/AIdro_mJQdJS8pqBaUG2ekAPfyTSZbU_dw1O2b55VceVC8wlEEM=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'Liberal Hivemind',
          customUrl: '@liberalhivemind',
          views: '68323',
          relativeTime: '5 hours ago',
        },
        {
          videoId: 'nRO7Z6FpqBU',
          channelId: 'UCLyeLv13NLgHjFn2FVdbh4w',
          thumbnail: 'https://i.ytimg.com/vi/nRO7Z6FpqBU/mqdefault.jpg',
          title: 'DAD I AM OK IS LIVE 💀🔥',
          channelPhoto:
            'https://yt3.ggpht.com/uOnQc8mQ3s-M0H7ad9xBok1D1cRWn5FvKpwLVg9wf50OnIjiw3r6TdMmZz517-vD9n57CvoLeg=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'DAD I AM OK GAMING',
          customUrl: '@dadiamokgaming',
          views: '375655',
          relativeTime: '5 hours ago',
        },
        {
          videoId: 'W83mKbPjBCk',
          channelId: 'UCnQC_G5Xsjhp9fEJKuIcrSw',
          thumbnail: 'https://i.ytimg.com/vi/W83mKbPjBCk/mqdefault.jpg',
          title: 'Accurate acronym!',
          channelPhoto:
            'https://yt3.ggpht.com/TxoTYAjZApfl32DHvlyU_gdcNwbN5Bgj7BRV0qyXtlsPSaao9oHhPw8CnuaRsoINV2vQkybo=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'Ben Shapiro',
          customUrl: '@benshapiro',
          views: '18586',
          relativeTime: '5 hours ago',
        },
        {
          videoId: '40R1SsuDQBA',
          channelId: 'UCnQC_G5Xsjhp9fEJKuIcrSw',
          thumbnail: 'https://i.ytimg.com/vi/40R1SsuDQBA/mqdefault.jpg',
          title: "Don't boycott Lowe's",
          channelPhoto:
            'https://yt3.ggpht.com/TxoTYAjZApfl32DHvlyU_gdcNwbN5Bgj7BRV0qyXtlsPSaao9oHhPw8CnuaRsoINV2vQkybo=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'Ben Shapiro',
          customUrl: '@benshapiro',
          views: '12262',
          relativeTime: '5 hours ago',
        },
        {
          videoId: '3ZSoDuC0p9U',
          channelId: 'UC2xHpoMtrvZmE78OJovbjIA',
          thumbnail: 'https://i.ytimg.com/vi/3ZSoDuC0p9U/mqdefault.jpg',
          title: 'The Round Table Game Show - Episode 9',
          channelPhoto:
            'https://yt3.ggpht.com/Kehiuya2_0YCxI9-dzuhuVwi7QX6MVpqiBarIMnAJs5Dl8pLhoGXbdllse0CzQItKLirbKM4Ot8=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'Chase & Melo',
          customUrl: '@chaseandmelo',
          views: '27702',
          relativeTime: '5 hours ago',
        },
        {
          videoId: 'p8I_YfSwbHE',
          channelId: 'UC-3jIAlnQmbbVMV6gR7K8aQ',
          thumbnail: 'https://i.ytimg.com/vi/p8I_YfSwbHE/mqdefault.jpg',
          title: 'Pro-Lifers FURIOUS With Trump Over This Interview',
          channelPhoto:
            'https://yt3.ggpht.com/ytc/AIdro_mu8jhHFiMky_7-d7c8RKimzD7G5mJkBomZcZ-GOfKr3g=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'The Majority Report w/ Sam Seder',
          customUrl: '@themajorityreport',
          views: '20542',
          relativeTime: '5 hours ago',
        },
        {
          videoId: 'PJgTsN1Z0hs',
          channelId: 'UClOnJwSzSOKMh_tvCkIFRbQ',
          thumbnail: 'https://i.ytimg.com/vi/PJgTsN1Z0hs/mqdefault.jpg',
          title: 'If you like this, we are friend now',
          channelPhoto:
            'https://yt3.ggpht.com/y9FxXDqiGWDZPMa-DD61U2C3N0PZD8NHmn5SES8PmYsK3C9LnO8hNe5Y_A7aWoqP11Voj-Nv4g=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'Fredo on TV',
          customUrl: '@fredoontv',
          views: '15869',
          relativeTime: '5 hours ago',
        },
        {
          videoId: '3MyGMrQ7Ags',
          channelId: 'UC3RdqvbXG6rFXWewmD1ZF0Q',
          thumbnail: 'https://i.ytimg.com/vi/3MyGMrQ7Ags/mqdefault.jpg',
          title: 'That One Friend that CAN’T Take One for the Team 😭 #Shorts #comedy',
          channelPhoto:
            'https://yt3.ggpht.com/t5ZjHkOIph0_28VSOf0rC5YrY28SXc5d1nZeyyz1NCPV1fVK54zYfc_xDWcvlGy8F0fLexkzUQ=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'ItssIMANNN',
          customUrl: '@itssimannn',
          views: '94362',
          relativeTime: '6 hours ago',
        },
        {
          videoId: 'zYROegUEgt4',
          channelId: 'UCnBPYxkoycJdJJ2OZEgWPwg',
          thumbnail: 'https://i.ytimg.com/vi/zYROegUEgt4/mqdefault.jpg',
          title: 'S1MPLE IS FINNALY COMEBACK IN CS2 | NEW CS2 UPDATE| CS2 SKINS GIVEAWAY! OPEN CASE!',
          channelPhoto:
            'https://yt3.ggpht.com/uyWTkRkLwXpcsi2ONcYI8zNnQzMgZL9SBMH7t06vN4Ph3ZwePlMm5WuaBE3C9SSnkf1tHXl99Ws=s240-c-k-c0x00ffffff-no-rj',
          channelName: 's1mple ',
          customUrl: '@counter-strike_streams',
          views: '658',
          relativeTime: '6 hours ago',
        },
        {
          videoId: 'lpOWmNgM_QQ',
          channelId: 'UC6ysC3YUZbjScBKZlNLrmtQ',
          thumbnail: 'https://i.ytimg.com/vi/lpOWmNgM_QQ/mqdefault.jpg',
          title: 'When they arrive!!',
          channelPhoto:
            'https://yt3.ggpht.com/Eiajdz4StQD6AQaAC6URTJL9Rb1K7unYuZ-saAvJS4BfFLHT61khP0xz90G_iWZ02Nezi_zg=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'Habitual Linecrosser',
          customUrl: '@habitual_linecrosser',
          views: '101766',
          relativeTime: '6 hours ago',
        },
        {
          videoId: 'mDtDwrE5Vy8',
          channelId: 'UClgJyzwGs-GyaNxUHcLZrkg',
          thumbnail: 'https://i.ytimg.com/vi/mDtDwrE5Vy8/mqdefault.jpg',
          title: "🚀 Turbocharge Wealth: AI's Crypto Clash & Tesla's LEAPs! 🏇💰",
          channelPhoto:
            'https://yt3.ggpht.com/ODTt9CIAed-Eyf_nsmWvdJk9ItGK8ciPQ4ZpKdZ5IkVChsojx0WUfjGTZxB6uvD_qhzdTDq8=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'InvestAnswers',
          customUrl: '@investanswers',
          views: '30630',
          relativeTime: '6 hours ago',
        },
        {
          videoId: '1UeUaG8N9QU',
          channelId: 'UCf-gQkGR25Pt5_pFV38sR5Q',
          thumbnail: 'https://i.ytimg.com/vi/1UeUaG8N9QU/mqdefault.jpg',
          title: '#insideout #srpelo #envy #embarrassment #what',
          channelPhoto:
            'https://yt3.ggpht.com/XTQggXd-ZkyudlA42wzVfG-KJemuvundD5fAugWIL7MzSwjdQeIsBBu24VCTAoE_9fHDLUohFw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'AnimeToons',
          customUrl: '@animetoons',
          views: '95612',
          relativeTime: '6 hours ago',
        },
        {
          videoId: 'Knmpl8OJh5o',
          channelId: 'UCPK91o0YLEDbuP6Pdk2KpBw',
          thumbnail: 'https://i.ytimg.com/vi/Knmpl8OJh5o/mqdefault.jpg',
          title: 'Scam Mfs',
          channelPhoto:
            'https://yt3.ggpht.com/gYHI-48JpRFAQpSyW3vb49_nqbnOroM03lU5CXjRuccjd_id5VggXQxAvT_FCEsD07f-LS7J2KI=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'Edward So',
          customUrl: '@edwardso',
          views: '92944',
          relativeTime: '7 hours ago',
        },
        {
          videoId: '-niED808Rgc',
          channelId: 'UCi6ZrkxUzLX5sn-UOr3nT2g',
          thumbnail: 'https://i.ytimg.com/vi/-niED808Rgc/mqdefault.jpg',
          title: '700k FUTTIES PACK!🥶',
          channelPhoto:
            'https://yt3.ggpht.com/Mfzmr_zlJhgW9bp5ZWESr-fYDicgC1a-O0OAouS4dKtu79XF-U0FSDrC0q5bkhugLi9qnrZdoA=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'StanManTV',
          customUrl: '@stanmantv',
          views: '88913',
          relativeTime: '7 hours ago',
        },
        {
          videoId: '_PidcVgh9cY',
          channelId: 'UCqg13GTGnouYpH4c0F6AMIg',
          thumbnail: 'https://i.ytimg.com/vi/_PidcVgh9cY/mqdefault.jpg',
          title: 'Thử Thách Road To Radiant Only Combo Breach và Vyse Day 1 @CoachMalix',
          channelPhoto:
            'https://yt3.ggpht.com/cnJbEHM8oDlJ0C67jisbxCAV-cjAKDXuXwiw9hnAUhltuKNe-UJ-aimedYHHpj3fiM3wzqgyAA=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'OcleoP',
          customUrl: '@ocleop',
          views: '5274',
          relativeTime: '7 hours ago',
        },
        {
          videoId: 'vJlgTKQrGC8',
          channelId: 'UCfU42vu0J0xk6oa2S0SP-Eg',
          thumbnail: 'https://i.ytimg.com/vi/vJlgTKQrGC8/mqdefault.jpg',
          title: '🔴 LIVE - HK15 | Một chiếc khỉ béo',
          channelPhoto:
            'https://yt3.ggpht.com/9qHvxrgHj1cypT_w2TCYb5-DtwnCysVzChbRmHsqS-Xl_5n_GkORv-A2G_FajTDqebIvCS0k=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'HK15',
          customUrl: '@ckg.hk15',
          views: '49138',
          relativeTime: '7 hours ago',
        },
        {
          videoId: 'kNsfYUtb7Dg',
          channelId: 'UCfDfvvMARk4TKcC62ALi6eA',
          thumbnail: 'https://i.ytimg.com/vi/kNsfYUtb7Dg/mqdefault.jpg',
          title: 'SUMMIT FINISH CLASH! 😮‍💨 | La Vuelta a España Stage 15 Highlights | Eurosport Cycling',
          channelPhoto:
            'https://yt3.ggpht.com/K32LAalyWSGR1uX2l5li0i0JH9bLxHBURtMAmE6fro2LjlOL2SuGYxcjKUIoxtWWboO50klVyA=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'Eurosport Cycling',
          customUrl: '@eurosportcycling',
          views: '78563',
          relativeTime: '8 hours ago',
        },
        {
          videoId: '8I4W80qN7as',
          channelId: 'UCQfwfsi5VrQ8yKZ-UWmAEFg',
          thumbnail: 'https://i.ytimg.com/vi/8I4W80qN7as/mqdefault.jpg',
          title: "Ukraine's Kharkiv hit by 10 airstrikes after Kyiv's drone attack on Russia • FRANCE 24 English",
          channelPhoto:
            'https://yt3.ggpht.com/ytc/AIdro_n_QTJ5-GLGnftQFkb7Kp36W2eBH3H-7ZqTQxzFkkqGrIE=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'FRANCE 24 English',
          customUrl: '@france24_en',
          views: '27277',
          relativeTime: '8 hours ago',
        },
        {
          videoId: 'S3UQfZWNTpY',
          channelId: 'UClQ3NafOy_42dJ0toK3QUKw',
          thumbnail: 'https://i.ytimg.com/vi/S3UQfZWNTpY/mqdefault.jpg',
          title: 'Build The Deadliest Toy Car, Win $1,000!',
          channelPhoto:
            'https://yt3.ggpht.com/8Yat-ht6uSglpKe5BonuiW3ZeaoU89MP0652EWzITq0lMWYD99Ak1pZXdZlqrSjUVm5WRjErnA=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'Stay Wild',
          customUrl: '@staywild-',
          views: '1777078',
          relativeTime: '8 hours ago',
        },
        {
          videoId: '3qV7EAXcgaI',
          channelId: 'UCWLC4UagvBKasTBCSoQbdxQ',
          thumbnail: 'https://i.ytimg.com/vi/3qV7EAXcgaI/mqdefault.jpg',
          title: 'XEM MU ĐÁ QUÁ BẨN MẮT NÊN LÀ ...',
          channelPhoto:
            'https://yt3.ggpht.com/stdXX6f3lcnQTjmNjYJ_YGdE799Zi8OPEUxI8T1ros4m7MXdhJJOXGXctdTGrxFfRxcPISY=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'Tabi Tuấn Anh',
          customUrl: '@tabituananhh',
          views: '32749',
          relativeTime: '8 hours ago',
        },
        {
          videoId: 'K2qppyi0zfw',
          channelId: 'UCZcCmWhvK0gfThyWRmRerDQ',
          thumbnail: 'https://i.ytimg.com/vi/K2qppyi0zfw/mqdefault.jpg',
          title: 'Tiền Giang: Trạm biến áp phát nổ rồi bốc cháy dữ dội trong đêm | Toàn cảnh 24h',
          channelPhoto:
            'https://yt3.ggpht.com/DP-V2WMAe5GwA_UZIeSpmgutwE2w6tyUp8Cgn0-NixsfK1VTOfDn7uEWFuRuf6mR53Dycc_6=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'TOÀN CẢNH 24H',
          customUrl: '@toancanh24',
          views: '4413',
          relativeTime: '8 hours ago',
        },
        {
          videoId: 'yCgDl6ieLHU',
          channelId: 'UCoc_XJPj6YLMQDWtPDQcDtA',
          thumbnail: 'https://i.ytimg.com/vi/yCgDl6ieLHU/mqdefault.jpg',
          title: "Brad Mondo Reacts To Viral 'French Bob' Haircuts GONE WRONG",
          channelPhoto:
            'https://yt3.ggpht.com/OS8KVhf5THBtSjziwtgrTysV3H0o5Ob08EhCKlFdhnZzgGE5Uaa-62sS0AadzhGTnCsVAeZ58A=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'Brad Mondo',
          customUrl: '@bradmondo',
          views: '104418',
          relativeTime: '8 hours ago',
        },
        {
          videoId: '4NPgCe9-ypY',
          channelId: 'UCfqoYnGRFtrIOo5hVb0M_nw',
          thumbnail: 'https://i.ytimg.com/vi/4NPgCe9-ypY/mqdefault.jpg',
          title: 'Abhira ki भजन sunnkar Goenkas hue emotional!|Ep4537|Latest|Yeh Rishta Kya Kehlata Hai|Mon-Sun|9:30PM',
          channelPhoto:
            'https://yt3.ggpht.com/Mvi8qaS7XJxQxPPkC_6e7P2_CL7q0j-_6YqenpL0R6h1aPfIqHAK4_iwgv2ShYZzm_noRYLIkPg=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'Yeh Rishta Kya Kehlata Hai ',
          customUrl: '@yehrishtakyakehlataahai',
          views: '11683',
          relativeTime: '8 hours ago',
        },
        {
          videoId: 'lMuktVJ7wfQ',
          channelId: 'UCwwRzW41YdhO2O0klNkttUA',
          thumbnail: 'https://i.ytimg.com/vi/lMuktVJ7wfQ/mqdefault.jpg',
          title: 'NO RETURNS',
          channelPhoto:
            'https://yt3.ggpht.com/FNa-9_wBTiR9jDc2e86xVwf7LX5nq06k9UjIQtFxzwROZ4ZhE1RUf-HOobl9x6OAZrIKK4UHmg=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'JD Delay',
          customUrl: '@jddelay5150',
          views: '69522',
          relativeTime: '9 hours ago',
        },
        {
          videoId: 'h5SQiMcYVdg',
          channelId: 'UClbFnMu72DbIvh6aZebAHsA',
          thumbnail: 'https://i.ytimg.com/vi/h5SQiMcYVdg/mqdefault.jpg',
          title: '(Restream) Một buổi stream pùn',
          channelPhoto:
            'https://yt3.ggpht.com/4ffrJrze6zBmxEfzUhR3TqYXBHWU_O6sii9jILfUdMbd8HhBAtk7CYeBEM-fp_S6RYu81Szsnw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'Levi',
          customUrl: '@levi97',
          views: '45552',
          relativeTime: '9 hours ago',
        },
        {
          videoId: 'cXfkk3pTyCo',
          channelId: 'UCJekW1Vj5fCVEGdye_mBN6Q',
          thumbnail: 'https://i.ytimg.com/vi/cXfkk3pTyCo/mqdefault.jpg',
          title: 'Sethi Se Sawal | Mulana Fazal Vs Govt | PMLN in Trouble | Future Political Scenario | Samaa TV',
          channelPhoto:
            'https://yt3.ggpht.com/u85qi8SAvlJ8kRyD6qCS1PsmnQOHFdbw4NSC30w3sC2m1OLt3WTkX9NFlMrELSwu84NVfiPY=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'SAMAA TV',
          customUrl: '@samaatv',
          views: '62680',
          relativeTime: '9 hours ago',
        },
        {
          videoId: '5xyXOVe_g1I',
          channelId: 'UCiPmpoENxYeX4VLAsIZVhoA',
          thumbnail: 'https://i.ytimg.com/vi/5xyXOVe_g1I/mqdefault.jpg',
          title: 'Mbappe From Ohio ☠️',
          channelPhoto:
            'https://yt3.ggpht.com/p-Vv2c6JCED1k3lcL5aKrqSIPLOtq2dPsmaynjNjRwhDGPaoIRqYnY8OpAtDKPEcGyS4aGPCXg=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'nuqi',
          customUrl: '@nuqi',
          views: '58984',
          relativeTime: '9 hours ago',
        },
        {
          videoId: '26s74GjaLjI',
          channelId: 'UCZfTWLrTkaoZoSx5fkrAPJA',
          thumbnail: 'https://i.ytimg.com/vi/26s74GjaLjI/mqdefault.jpg',
          title: "YouTuber's Who Did Horrible Things #3.5 🤔",
          channelPhoto:
            'https://yt3.ggpht.com/ObCdiw94AyU4LPfswmY71_xczhbHsnZLdWeIreNEDQAPeyhOeCsNmtt3ZNU5-_Gd-h08qku8D7k=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'hxsain',
          customUrl: '@hxsain',
          views: '68638',
          relativeTime: '9 hours ago',
        },
        {
          videoId: 'GhOx_E9cJmM',
          channelId: 'UCNvzD7Z-g64bPXxGzaQaa4g',
          thumbnail: 'https://i.ytimg.com/vi/GhOx_E9cJmM/mqdefault.jpg',
          title: '10 WEIRD Gaming Stories of August 2024',
          channelPhoto:
            'https://yt3.ggpht.com/ytc/AIdro_mT3hsjvr0yyS6bW4inz3956572zV_j4t7TLsEOkK0G1VM=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'gameranx',
          customUrl: '@gameranxtv',
          views: '113918',
          relativeTime: '9 hours ago',
        },
        {
          videoId: 'eVjS498Q7nc',
          channelId: 'UCc46uxgt6GIJxoBlb7i5UZQ',
          thumbnail: 'https://i.ytimg.com/vi/eVjS498Q7nc/mqdefault.jpg',
          title: 'GRWM For A School!😂💕 #ROMWE #ROMWEpartner #ROMWEBack2school',
          channelPhoto:
            'https://yt3.ggpht.com/YVGGnmlcP8JtEUNIFW1AuuFdUDmsvWOntAFcvpTGc0MJrexY_68kzBgN-VhIwqZzMAU4tB_u-A=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'NEVADA',
          customUrl: '@nevaaada',
          views: '78322',
          relativeTime: '9 hours ago',
        },
        {
          videoId: 'xzSgw3bYjxo',
          channelId: 'UCGqNr35y0iP-k1FG5czD-Gw',
          thumbnail: 'https://i.ytimg.com/vi/xzSgw3bYjxo/mqdefault.jpg',
          title: 'is it too soon for nutcracker videos??🤔 #nutcracker #ballerina #music',
          channelPhoto:
            'https://yt3.ggpht.com/TAH0ijZ_vi61epwHCDwqz6fvqWBTS5_q-VvRfCJqo5YhxPo3i1EpuBmROCUBgr8xt85LVf06=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'Amber Novella Skaggs',
          customUrl: '@ambernovella',
          views: '20204',
          relativeTime: '9 hours ago',
        },
        {
          videoId: 'xBq-dTEee1Q',
          channelId: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
          thumbnail: 'https://i.ytimg.com/vi/xBq-dTEee1Q/mqdefault.jpg',
          title: 'This match was brutal chaos the entire time! 😮‍💨 #WWEBash',
          channelPhoto:
            'https://yt3.ggpht.com/ytc/AIdro_ntokFOUW3fcSb3hxw2V2svi3QaKr0ofCpgtgH0FqSDZJiy=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'WWE',
          customUrl: '@wwe',
          views: '61366',
          relativeTime: '9 hours ago',
        },
        {
          videoId: 'VL7rNcYWCWU',
          channelId: 'UCH47U3R3EZ8yVH96m2wbIfw',
          thumbnail: 'https://i.ytimg.com/vi/VL7rNcYWCWU/mqdefault.jpg',
          title: 'Cà Phê Sáng Cuối Tuần FULL (09-01-24) với Nhi Huyền và Lê Thái',
          channelPhoto:
            'https://yt3.ggpht.com/ytc/AIdro_lvJlc2LuTJ7qSIdQaGxA9qukOxhtSznDq4bJU4Y2E_oQ=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'Little Saigon TV Official',
          customUrl: '@littlesaigontvofficial',
          views: '9630',
          relativeTime: '9 hours ago',
        },
        {
          videoId: 'nTDq9yO1TQ0',
          channelId: 'UC53vJs-sAu-D69kqN6wJtqQ',
          thumbnail: 'https://i.ytimg.com/vi/nTDq9yO1TQ0/mqdefault.jpg',
          title: 'cost of cosmetics in 🇺🇸 #amerika #usalife #inflation #cultureshock #drugstoreproducts #cvs',
          channelPhoto:
            'https://yt3.ggpht.com/vNJ8qncxhH4iK1aM0SbC4YAw23JOi2V61kqiK7jhjNmvHl-G02U86EcRbm4VIHgVPImtMTxniw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'Janine and Gen',
          customUrl: '@janineandgen',
          views: '15715',
          relativeTime: '10 hours ago',
        },
        {
          videoId: 'sdlZihbHmAk',
          channelId: 'UCiWLfSweyRNmLpgEHekhoAg',
          thumbnail: 'https://i.ytimg.com/vi/sdlZihbHmAk/mqdefault.jpg',
          title: 'Ask and you shall receive 🙌  (via @selenagomez/IG) #shorts',
          channelPhoto:
            'https://yt3.ggpht.com/ytc/AIdro_nQ6BSaej0jJWHYFCJ-4dJYS_47qksmdZGuOk3bLW4Zl3En=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'ESPN',
          customUrl: '@espn',
          views: '19785',
          relativeTime: '10 hours ago',
        },
        {
          videoId: 'Pmx_90r41U8',
          channelId: 'UCIEv3lZ_tNXHzL3ox-_uUGQ',
          thumbnail: 'https://i.ytimg.com/vi/Pmx_90r41U8/mqdefault.jpg',
          title: "Owner Doesn't Pay Staff And STEALS Their Tips | Hotel Hell | Gordon Ramsay",
          channelPhoto:
            'https://yt3.ggpht.com/bFpwiiOB_NLCVsIcVQ9UcwBjb1RzipnMmtNfLSWpeIaHboyGkBCq4KBitmovRbStk9WvIWIZOyo=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'Gordon Ramsay',
          customUrl: '@gordonramsay',
          views: '18294',
          relativeTime: '10 hours ago',
        },
        {
          videoId: 'T6teQD88Z_8',
          channelId: 'UCotfkJbhABqCRGnmQ7Mnotg',
          thumbnail: 'https://i.ytimg.com/vi/T6teQD88Z_8/mqdefault.jpg',
          title: 'Top 10 Work from Home Productivity Tips',
          channelPhoto:
            'https://yt3.ggpht.com/MF6ssWunUm8q14lr85Q4VWw1wURS_ipqezapP63rSi-E9MRtsCQ1qhsLJf9OuEyXuMQdlmOuwQ=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'Token',
          customUrl: '@token6789',
          views: '563641',
          relativeTime: '10 hours ago',
        },
        {
          videoId: 'i3RtRBcn1zI',
          channelId: 'UCfJN6KQJRloVhV38tnxpOBA',
          thumbnail: 'https://i.ytimg.com/vi/i3RtRBcn1zI/mqdefault.jpg',
          title: 'Only Took 5 Minutes To Destroy It!?!',
          channelPhoto:
            'https://yt3.ggpht.com/ytc/AIdro_mpUu9pS71oCIruWBm8jE2cWMCRcRdp4nHBEkTgoCTq_Ns=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'Larson Farms',
          customUrl: '@larsonfarms',
          views: '92848',
          relativeTime: '10 hours ago',
        },
        {
          videoId: 'MyFRXSmggRA',
          channelId: 'UCt3bSrxyNSDSl9y8wcPRCSQ',
          thumbnail: 'https://i.ytimg.com/vi/MyFRXSmggRA/mqdefault.jpg',
          title: 'Where you go I go 🏃🏽‍♂️ #shorts',
          channelPhoto:
            'https://yt3.ggpht.com/mXmhqPBkR6KjHqRkifhDtS_OZnDAf7XQuGf4PkyEpvtcBeDQ4cmrD0_U0dJoktsgp1hoNRl1X_k=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'Rizcochet',
          customUrl: '@rizcochet.official',
          views: '95754',
          relativeTime: '11 hours ago',
        },
      ],
      nextPageToken: 'CDIQAA',
    }

    return homePageData
  } catch (error) {
    console.log(error)
  }
}

export default getHomePage
