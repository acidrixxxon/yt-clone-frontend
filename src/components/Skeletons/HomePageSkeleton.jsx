import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import './_HomePageSkeleton.scss'


const VideSkeleton = () => {
    return (
        <div className='skeleton-container'>
            <SkeletonTheme color="#343a40">
                <Skeleton height={200} width={150} className="hui"/>
            </SkeletonTheme>
        </div>
    )
}

const HomePageSkeleton = () => {
  return (
      <>
        {[...Array(10)].map(item => (<Skeleton width={150} height="100%" width={150} />) )}
      </>
    
  )
}

export default HomePageSkeleton