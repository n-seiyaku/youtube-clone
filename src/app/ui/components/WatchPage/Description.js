'use client'

import { Fragment, useState } from 'react'

import clsx from 'clsx'
import moment from 'moment'
import parse from 'html-react-parser'

const Description = ({ watchPageData }) => {
  const [isShowMore, setIsShowMore] = useState(false)

  const handleShowMore = () => {
    setIsShowMore(!isShowMore)
  }

  const descriptions = watchPageData.description.split('\n')
  const numberOfLines = descriptions.length

  return (
    <div className="mt-3 bg-tertiary rounded-xl">
      <div className="flow-root m-3">
        <p className="my-3">
          <span className="text-sm font-medium">{watchPageData.viewCount} views&nbsp;&nbsp;</span>
          <span className="text-sm font-medium">{moment(watchPageData.publishedAt).fromNow()}</span> <br />
          <>
            {isShowMore
              ? descriptions.map((description, i) => {
                  return (
                    <Fragment key={isShowMore + i}>
                      <span className="text-sm font-normal">{description}</span>
                      <br />
                    </Fragment>
                  )
                })
              : descriptions.slice(0, 3).map((description, i) => {
                  return (
                    <Fragment key={isShowMore + i}>
                      <span className="text-sm font-normal">{description}</span>
                      {i < 2 && <br />}
                    </Fragment>
                  )
                })}
          </>
          {!isShowMore ? (
            <button className="text-sm font-medium" onClick={handleShowMore}>
              ...more
            </button>
          ) : (
            <button className="text-sm font-medium" onClick={handleShowMore}>
              Show less
            </button>
          )}
        </p>
      </div>
    </div>
  )
}

export default Description
