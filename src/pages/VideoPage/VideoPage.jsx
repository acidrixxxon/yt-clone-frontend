import React from 'react';
import { useParams } from 'react-router-dom';
import './_videoPage.scss'

const VideoPage = () => {
    const params = useParams()
    console.log(params);
  return (
        <div className='videoPage'>
            VideoPage

            <iframe src={`http://www.youtube.com/embed/${params.id}`} />
        </div>
    );
};

export default VideoPage;
