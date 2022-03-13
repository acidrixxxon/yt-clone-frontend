import React from 'react'
import './_libraryPage.scss'
import { AiOutlineFieldTime } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import VideoItem from '../../components/LibraryVideoItem/VideoItem'
import { useSelector } from 'react-redux'
import Wrapper from '../../components/common/Wrapper/Wrapper'

const Librarypage = () => {
    const { user: { user } } = useSelector(state => state)
    console.log(user)

    const login = ''
    const avatar = ''
  return (
      <Wrapper>
              <div className='library'>
            <div className="library__container">
                <section className="history">
                    <div className="history__top top">
                        <h3 className="section__title history__title">
                            <AiOutlineFieldTime size={26} />
                            <span>История</span>
                        </h3>
                        <Link to="/history" className='link link-blue'>Еще</Link>
                    </div>

                    <div className="history__content content">
                        {[...Array(8)].map(item => {
                            return <VideoItem />
                            })
                        }
                    </div>
                </section>

                <section className="watch-later">
                    <div className="watch-later__top top">
                        <h3 className="section__title history__title">
                            <AiOutlineFieldTime size={26} />
                            <span>Смотреть позже</span>
                        </h3>
                        <Link to="/watchlater" className='link link-blue'>Еще</Link>
                    </div>

                    <div className="watch-later__content content">
                        {[...Array(8)].map( item => {
                            return <VideoItem />
                        })}
                    </div>
                </section>
            </div>

            <div className="library__user">
                <img src={avatar} alt="user avatar" className="library__user--avatar" />

                <h3 className="library__user--username">
                    {login}
                </h3>

                <div className="divider"></div>

                <div className="data data-subs">
                    <span>Подписки</span>
                    <span>142</span>
                </div>

                <div className="divider"></div>

                <div className="data data-downloads">
                    <span>Загрузки</span>
                    <span>0</span>
                </div>

                <div className="divider"></div>

                <div className="data data-likes">
                    <span>Отметки "Нравится"</span>
                    <span>141</span>
                </div>

                <div className="divider"></div>
            </div>
    </div>
      </Wrapper>
  )
}

export default Librarypage