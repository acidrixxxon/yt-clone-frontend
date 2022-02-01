import React from 'react';
import Video from './../../components/Video/Video'
import './_homepage.scss'
import { useDispatch,useSelector } from 'react-redux'
import { getPopularVideos } from '../../redux/actions/videoActions';
import { Spinner } from 'react-bootstrap'

const Homepage = () => {
  const dispatch = useDispatch()

  const { video } = useSelector(state => state)
  const { videos,loading,error } = video

  React.useEffect(() => {
    dispatch(getPopularVideos())
  },[dispatch])
  return (
    <div className='home'>
      {loading && 
        (<Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      {videos?.map((video,index) => (
        <Video video={video} key={video.id} />
      ))}
    </div>
  )
};

export default Homepage;
