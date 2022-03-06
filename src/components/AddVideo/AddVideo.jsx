import React from 'react'
import './_AddVideo.scss'
import { BiVideoPlus } from 'react-icons/bi'
import { RiVideoLine } from 'react-icons/ri'
import { MdStream } from 'react-icons/md'
import AddVideoModal from '../AddVideoModal/AddVideoModal'

const AddVideo = () => {
    const [ showModal ,setShowModal ] = React.useState(false)
    const [ showSubmenu,setSubmenu ] = React.useState(false)

    const submenuToggleHandler = () => setSubmenu(state => !state)
    const addVideoModalHandler = () => {
        submenuToggleHandler()
        setShowModal(state => !state)
    }
    const closeAddVideoModalHandler = () => {
        setShowModal(false)
        setSubmenu(false)
    }   

    return (
        <>
            <BiVideoPlus className='addVideo__icon' onClick={submenuToggleHandler} />

            {showSubmenu &&  (<div className='submenu'>
                <button className='submenu__item' onClick={addVideoModalHandler}>
                    <RiVideoLine className='submenu__item--icon' />
                    <span className='submenu__item--text'>Добавить видео</span>
                </button>
                <button className='submenu__item'>
                    <MdStream className='submenu__item--icon' />
                    <span className='submenu__item--text'>Начать трансляцию</span>
                </button>
            </div>)}

            {showModal && <AddVideoModal closeAddVideoModalHandler={closeAddVideoModalHandler} />}
        </>
    )
}

export default AddVideo