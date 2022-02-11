import React from 'react'
import { getChannel } from '../../utils/requestAPI'
import './_VerticalRecs.scss'
import { useQuery } from 'react-query'
import numeral from 'numeral'

const RecommendationItem = ({ item }) => {
    const { data,isLoading,isError } = useQuery('channel',() => getChannel(item.snippet.channelId))
    if (isLoading) return <span>loading...</span>

  return (
    <li className='recommendations__list-item'>
        <img src={item.snippet.thumbnails.default.url} alt="img" className="recommendation__image" />
        <div className="recommendation__data">
            <h3 className="recommendation__title">
                {item.snippet.title}
            </h3>
            <span className="recommendation__channel-title">
                {data.items[0].snippet.title}
            </span>
            <div className="recommendation__metadata">
                <span className='views'>{numeral(item.statistics.viewCount).format('0.a')}</span>
                <span className="divider">•</span>
                <span className="date">2 года назад</span>
            </div>
        </div>
    </li>
  )
}

export default RecommendationItem