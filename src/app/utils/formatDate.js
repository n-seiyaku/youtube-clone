import moment from 'moment'

const formatDate = (dateString) => {
  const date = moment(dateString)
  const now = moment()

  const diffInDays = now.diff(date, 'days')

  if (diffInDays < 7) {
    return date.fromNow()
  }

  return date.format('MMM Do YY')
}

export default formatDate
