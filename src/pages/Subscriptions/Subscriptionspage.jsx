import React from 'react'
import SignUpCard from '../../components/SignUpCard/SignUpCard'
import useAuth from '../../hooks/useAuth'
import { MdOutlineSubscriptions } from 'react-icons/md'
import './_subsPage.scss'

const Subscriptionspage = () => {
    const { user } = useAuth()
    console.log(user)
    if (!user) return (
        <SignUpCard
            icon={<MdOutlineSubscriptions />}
            title="Войдите в аккаунт"
            description="Тогда в этом разделе появятся новые видео с каналов, на которые вы подписаны."
        />
    )
  return (
    <div>Subscriptionspage</div>
  )
}

export default Subscriptionspage