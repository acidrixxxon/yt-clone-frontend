import React from 'react'
import { getRecommendations } from '../../utils/requestAPI'
import './_VerticalRecs.scss'
import RecommendationItem from './RecommendationItem'
import { useQuery } from 'react-query'

const VerticalRecs = () => {
    const { data,isLoading,isError } = useQuery('recs',getRecommendations)

    if ( isLoading) return <span>loading...</span>
    if ( isError ) return <span>error...</span>

    return (
        <>
            <ul className='recommendations__list'>
                {data?.map(item => {
                    return <RecommendationItem item={item} key={item.id} />
                })}
            </ul>
        </>
    )
}

export default VerticalRecs