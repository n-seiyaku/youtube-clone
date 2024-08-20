'use client'

import { Fragment, useState } from 'react'

import formatView from '@/app/utils/formatView'
import moment from 'moment'
import numberWithCommas from '@/app/utils/numberWithCommas'

const Description = ({ watchPageData }) => {
  const [isShowMore, setIsShowMore] = useState(false)

  const handleShowMore = () => {
    setIsShowMore(!isShowMore)
  }

  const descriptions = watchPageData.description.split('\n')
  const numberOfLines = descriptions.length > 3 ? 3 : descriptions.length

  return (
    <div className="mt-3 bg-tertiary rounded-xl">
      <div className="flow-root m-3">
        <p className="my-3">
          <span className="text-sm font-medium">
            {isShowMore ? numberWithCommas(watchPageData.viewCount) : formatView(watchPageData.viewCount)}
            &nbsp;views&nbsp;&nbsp;
          </span>
          <span className="text-sm font-medium">
            {isShowMore
              ? moment(watchPageData.publishedAt).format('MMM Do YY')
              : moment(watchPageData.publishedAt).fromNow()}
          </span>
          <br />
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
              : descriptions.slice(0, numberOfLines).map((description, i) => {
                  return (
                    <Fragment key={isShowMore + i}>
                      <span className="text-sm font-normal">{description}</span>
                      {i < numberOfLines - 1 && <br />}
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
