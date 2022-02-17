import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import './_HomePageSkeleton.scss'




const HomePageSkeleton = () => {
  return (
      <div className='skeletons'>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          {[...Array(10)].map(item => (<Skeleton />) )}
        </SkeletonTheme>
        
      </div>
  )
}

export default HomePageSkeleton