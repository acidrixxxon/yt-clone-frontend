import React from 'react'
import './_VerticalRecs.scss'
import RecommendationItem from './RecommendationItem'
import { useQuery } from 'react-query'
import ApiService from '../../utils/ApiService'

const VerticalRecs = () => {
    const { data,isLoading,isError } = useQuery('recs', ApiService.getVideos)
    console.log(data)

    if ( isLoading) return <span>loading...</span>
    if ( isError ) return <span>error...</span>

    return (
        <>
            <ul className='recommendations__list'>
                {data.map(item => {
                    return <RecommendationItem item={item} key={item._id} />
                })}
            </ul>
        </>
    )
}

export default VerticalRecs