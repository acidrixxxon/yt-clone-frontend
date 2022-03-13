import React from 'react';
import Video from './../../components/Video/Video'
import './_homepage.scss'
import { useDispatch,useSelector } from 'react-redux'
import { getPopularVideos } from '../../redux/actions/videoActions';
import HomePageSkeleton from '../../components/Skeletons/HomePageSkeleton';
import useAuth from '../../hooks/useAuth';
import Wrapper from '../../components/common/Wrapper/Wrapper';
import { getWatchLater } from '../../redux/actions/userActions';


const Homepage = () => {
  const dispatch = useDispatch()

  const { video: {videos,error,loading} } = useSelector(state => state)

  const user = useAuth()

  React.useEffect(() => {
    dispatch(getPopularVideos())
  },[dispatch])

  return (
    <Wrapper>
      <div className='home'>
        {loading && <HomePageSkeleton />} 
        {videos?.length == 0 && <span className='no-video'>Видео пока нет...</span>}
        {videos && (
          <div className='videos__container'>
            {videos?.map((video,index) => (
              <Video video={video} key={video._id} />
            ))}
          </div>
        )}
      </div>
    </Wrapper>
  )
};

export default Homepage;
