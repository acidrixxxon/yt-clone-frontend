import React from 'react'
import './_VerticalRecs.scss'
import RecommendationItem from './RecommendationItem'
import { useQuery } from 'react-query'
import VideoService from '../../Services/VideoService'
import { getPopularVideos } from '../../redux/actions/videoActions'

const VerticalRecs = () => {
    const [ recs,setRecs ] = React.useState([])
    const [ loading,setLoading ] = React.useState(false)
    React.useEffect(() => {
        getRecs()
    },[])
    
    const getRecs = async () => {
        setLoading(true)
        const res = await VideoService.getAllVideos()
        if (res.status === 200) {
            setRecs(res.data.videos.slice(0,5))
            setLoading(false)
        }
    }

    if ( loading === true) return <span>loading...</span>
    return (
        <>
            <ul className='recommendations__list'>
                {recs.length > 0 && recs?.map(item => {
                    return <RecommendationItem item={item} key={item._id} />
                })}
            </ul>
        </>
    )
}

export default VerticalRecs