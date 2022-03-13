import React from 'react'
import SignUpCard from '../../components/SignUpCard/SignUpCard'
import { Link } from 'react-router-dom'
import './_historypage.scss'
import { BsTrash } from 'react-icons/bs'
import { AiOutlineVideoCamera,AiOutlineClose } from 'react-icons/ai'
import Wrapper from '../../components/common/Wrapper/Wrapper'
import { useSelector,useDispatch } from 'react-redux'
import { getHistory,removeFromHistory } from '../../redux/actions/historyActions'
import Spinner from './../../components/common/Spinner/Spinner.jsx'


const Historypage = () => {
    const { history: { history: { history },error,loading },user: { user } } = useSelector( state => state)
    console.log(history)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getHistory())
    },[])


    if (!user) return (
        <Wrapper>
            <SignUpCard
                icon={<AiOutlineVideoCamera />}
                title="История поиска и просмотра недоступна"
                description="Чтобы посмотреть историю просмотра, войдите в аккаунт."    
            />
        </Wrapper>
    )

    if (loading) return <Spinner />
  return (
    <Wrapper>
        <div className="history">
            <div className="history__headline headline">
                <h4 className="history___headline--title">История просмотра</h4>
                {history?.length !== 0 && 
                    <button className='history__headline--btn'>
                        <BsTrash className='history__headline--btnIcon'/>
                        <span>
                            <span>Очистить</span>
                            <span>историю</span>
                            <span>просмотра</span>
                        </span>
                    </button>
                }
            </div>

            <div className="history__content">
                {history?.length === 0 && <p>Вы еще не просмотрели ни одного видео!</p>}
                <ul className="history__video-list">
                    {history?.map(item => {
                        return (
                            <li className="history__video-list__item" key={item._id}>
                                <Link to={`/video/${item._id}`}>
                                    <img src={item.thumbnail} alt="videoalt" className='history__video-list__item--img'/>
                                </Link>

                                <div className="history__video-list__item__metadata">
                                        <Link to={`/video/${item._id}`}>
                                            <h4 className="history__video-list__item__metadata__title">{item.title}</h4>
                                        </Link>

                                        <p className="history__video-list__item__sub-meta">
                                            <span className="history__video-list__item__sub-meta__author">
                                                <Link to={`/channel/${item.channel._id}`}>
                                                    {item.channel.name}
                                                </Link>
                                            </span>

                                            <span className="history__video-list__item__sub-meta__divider">
                                                •
                                            </span>

                                            <span className="history__video-list__item__sub-meta__views">
                                                {item.views} просмотров
                                            </span>
                                        </p>

                                        <p className="history__video-list__item__description">
                                            {item.description}
                                        </p>
                                </div>

                                <span className="history__video-list__item__remove">
                                    <AiOutlineClose className="history__video-list__item__removeIcon" onClick={() => dispatch(removeFromHistory(item._id))}/>

                                    <span className="history__video-list__item__removeAlt">Удалить из истории просмотра</span>
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </Wrapper>
  )
}

export default Historypage