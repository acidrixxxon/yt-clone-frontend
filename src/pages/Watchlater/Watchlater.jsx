import React from 'react'
import Wrapper from '../../components/common/Wrapper/Wrapper'
import './_Watchlater.scss'
import { MdOutlineSort } from 'react-icons/md'
import { BsTrash } from 'react-icons/bs'
import { useDispatch,useSelector }  from 'react-redux'
import { Link } from 'react-router-dom'
import { getWatchLater, removeVideoWatchLater } from '../../redux/actions/userActions'
import Spinner from './../../components/common/Spinner/Spinner.jsx'
import Submenu from '../../components/Submenu/Submenu'

const Watchlater = () => {
    const dispatch = useDispatch()

    const { user: { watchlater,loading }} = useSelector(state => state)
    
    React.useEffect(() => {
        dispatch(getWatchLater())
    },[dispatch])

    if (loading) return <Spinner />
  return (
      <Wrapper id="watch-later">
          <div className="watchlater">
            <div className="watchlater__headline">
                <h4 className="watchlater__headline--title">
                    Смотреть позже
                    <span className='watchlater__headline--subtext'>
                        {watchlater.length === 0 ? 'У вас пока нет видео в плейлисте Смотреть позже' : `${watchlater.length} видеo`}
                    </span>
                </h4>
                {watchlater.length > 0 && 
                    (<button className='watchlater__sort--btn sort-btn'>
                        <MdOutlineSort className='watchlater__sort--btnIcon' />
                        Сортировать
                    </button>)}
            </div>

            <div className="watchlater__video">
                <ul className="watchlater__video-list">
                    {watchlater.map(video => {
                        return (
                            <li className='watchlater__video-list__item' key={video._id}>
                                <Link to={`/video/${video._id}`}>
                                    <div className="watchlater__video-list__item__image">
                                        <img src={video.thumbnail} alt="video-thumbnail" className='watchlater__video-list__item--img'/>
                                        <span className="watchlater__video-list__item--duration">{video.duration}</span>
                                    </div>
                                    <div className="watchlater__video-list__item__metadata">
                                        <h4 className="watchlater__video-list__item__metadata--title">
                                            {video.title}
                                        </h4>
                                    </div>
                                </Link>
                                <Submenu>
                                    <li className='sub-menu__list__item' onClick={() => dispatch(removeVideoWatchLater(video._id))}>
                                        <BsTrash className='sub-menu__list__item--icon'/>
                                        Удалить из плейлиста 'Смотреть позже'
                                    </li>
                                </Submenu>
                            </li>
                        )
                    })}
                </ul>
            </div>
          </div>
      </Wrapper>
  )
}

export default Watchlater