import React from 'react';
import Video from './../../components/Video/Video'
import './_homepage.scss'
import { useDispatch,useSelector } from 'react-redux'
import { getPopularVideos } from '../../redux/actions/videoActions';
import HomePageSkeleton from '../../components/Skeletons/HomePageSkeleton';


const Homepage = () => {
  const dispatch = useDispatch()

  const { video } = useSelector(state => state)
  const { videos,loading,error } = video

  React.useEffect(() => {
    dispatch(getPopularVideos())
  },[dispatch])
  return (
    <div className='home'>
      {loading && <span>loading...</span>} 
      {videos?.map((video,index) => (
        <Video video={video} key={video.id} />
      ))}
    </div>
  )
};

export default Homepage;
