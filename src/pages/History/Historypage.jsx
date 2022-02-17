import React from 'react'
import SignUpCard from '../../components/SignUpCard/SignUpCard'
import HomePageSkeleton from '../../components/Skeletons/HomePageSkeleton'
import useAuth from '../../hooks/useAuth'
import './_historypage.scss'
import { AiOutlineVideoCamera } from 'react-icons/ai'

const Historypage = () => {
    const { user } = useAuth()

    if (!user) return (
        <SignUpCard
            icon={<AiOutlineVideoCamera />}
            title="История поиска и просмотра недоступна"
            description="Чтобы посмотреть историю просмотра, войдите в аккаунт."    
        />
    )
  return (
    <div className='history'>
        Historypage
        <div className="container">
            <HomePageSkeleton />    
        </div>    
    </div>
  )
}

export default Historypage