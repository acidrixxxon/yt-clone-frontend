import React from 'react';
import Video from './../../components/Video/Video'
import './_homepage.scss'
import { useDispatch,useSelector } from 'react-redux'
import { getPopularVideos } from '../../redux/actions/videoActions';
import HomePageSkeleton from '../../components/Skeletons/HomePageSkeleton';
import useAuth from '../../hooks/useAuth';


const Homepage = () => {
  const dispatch = useDispatch()

  const { video } = useSelector(state => state)
  const { videos,loading,error } = video

  const user = useAuth()

  React.useEffect(() => {
    dispatch(getPopularVideos())
  },[dispatch])
  return (
    <div className='home'>
      {loading && <HomePageSkeleton />} 
      {videos && (
        <div className='videos__container'>
          {videos?.map((video,index) => (
            <Video video={video} key={video.id} />
          ))}
        </div>
      )}
    </div>
  )
};

export default Homepage;
