import React from 'react'
import './_AddVideoModal.scss'
import { AiOutlineClose,AiOutlineUpload } from 'react-icons/ai'
import axios from 'axios'
import FileService from '../../Services/FileService.js'
import { useSelector,useDispatch } from 'react-redux'
import { getPopularVideos } from '../../redux/actions/videoActions'
import Spinner from './../common/Spinner/Spinner.jsx'

const AddVideoModal = ({ closeAddVideoModalHandler }) => {
    const [ activeStep,setActiveStep ] = React.useState(1)
    const [ title,setTitle ] = React.useState('')
    const [ description,setDescription ] = React.useState('')
    const [ thumbnail,setThumbnail ] = React.useState('')
    const [ file,setFile ] = React.useState(null)
    const [ loading,setLoading ] = React.useState(false)

    const dispatch = useDispatch()

    const { user: { myChannel } } = useSelector(state => state)

    const uploadFileHandler = async () => {
            setLoading(true)

            const formData = new FormData()
            formData.append('file',file)
            formData.append('title',title)
            formData.append('description',description)
            formData.append('channel',myChannel._id)
            formData.append('thumbnail',thumbnail)

            const res = await FileService.uploadFile(formData)
            
            if(res.status == 200) {
                closeAddVideoModalHandler()
                dispatch(getPopularVideos())
                setLoading(false)
            }
            
    }

    const goToNextStep = (e) => {
        e.preventDefault()
        const file = e.target[0].files[0]
        if (file) {
            setFile(file)
            setTitle(file.name.split('.')[0])
            setActiveStep(2) 
        }
    }

    const changeVideoTitle = (e) => {
        if (title.length < 100) {
            setTitle(e.target.value)
        }
    }
    
    const changeVideoDescription = (e) => {
        if (description.length < 100) {
            setDescription(e.target.value)
        }
    }

    const uploadFileToServer = async (file) => {
        try {

            const response = await axios({
                method: "post",
                url: "http://localhost:5001/video/uploadfile",
                data: file,
                headers: { "Content-Type": "multipart/form-data" },
              });
            console.log(response)

        }  catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='addVideo__modal__layout'>
                    {activeStep === 1 && (
                        <div className="addVideo__modal__content tab1">
                            <div className="addVideo__modal__header">
                                <h2 className='addVideo__modal__header--title'>Загрузка видео</h2>
                                <AiOutlineClose className='addVideo__modal__header--closeIcon' onClick={closeAddVideoModalHandler}/>
                            </div>

                            <div className="addVideo__modal__body">
                                <form encType="multipart/form-data" onSubmit={goToNextStep}>
                                    <label htmlFor="upload__file">
                                        <span className='addVideo__modal__body__upload'>
                                            <AiOutlineUpload className='addVideo__modal__body__upload--icon'/>
                                        </span>
                                    </label>

                                    <input type="file" id="upload__file" className='dnone'/>
                                    <button type="submit" className='addVideo__modal__body--btn'>Загрузить видео</button>
                                </form>
                            </div>

                            <div className="addVideo__modal__footer">
                                <p className='addVideo__modal__footer--para'>
                                    Добавляя видео, вы принимаете <span className="addVideo__modal__footer--link">Условия использования</span> и <span className="addVideo__modal__footer--link">правила сообщества</span> YouTube.
                                </p>
                                <p className='addVideo__modal__footer--para'>
                                    Также вы обязуетесь соблюдать авторские права и конфиденциальность данных других пользователей. <span className="addVideo__modal__footer--link">Подробнее…</span>
                                </p>
                            </div>
                        </div>
                    )}

                    {activeStep === 2 && (
                        <div className="addVideo__modal__content tab2">
                            <div className="addVideo__modal__header">
                                <h2 className='addVideo__modal__header--title'>Информация</h2>
                                <AiOutlineClose className='addVideo__modal__header--closeIcon' onClick={closeAddVideoModalHandler}/>
                            </div>

                            <div className="addVideo__modal__body">
                                <div className="addVideo__modal__body__left">
                                    <div className="addVideo__modal__body__textarea">
                                        <h3 className="addVideo__modal__body__textarea--title">
                                            Название (обязательное поле) 
                                        </h3>
                                        <textarea rows="2" onChange={(e) => changeVideoTitle(e)} value={title} className="addVideo__modal__body__textarea--area" placeholder='Добавьте название,которое отражает содержание вашего ролика'>

                                        </textarea>
                                        <span className="addVideo__modal__body__textarea--limit">
                                            {title.length} / 100
                                        </span>
                                    </div>

                                    <div className="addVideo__modal__body__textarea">
                                        <h3 className="addVideo__modal__body__textarea--title">
                                        Описание
                                        </h3>
                                        <textarea rows="10" onChange={(e) => changeVideoDescription(e)} value={description} className="addVideo__modal__body__textarea--area" placeholder='Расскажите,о чем ваше видео'>

                                        </textarea>
                                        <span className="addVideo__modal__body__textarea--limit">
                                            {description.length} / 5000
                                        </span>
                                    </div>
                                </div>

                                <div className="addVideo__modal__body__right">
                                    <h3 className='addVideo__modal__body__right--title'>Обложка</h3>
                                    <input type="text" className="addVideo__modal__body__right--input" placeholder='URL обложки' onChange={(e) => setThumbnail(e.target.value)} />
                                </div>
                            </div>

                            <div className="addVideo__modal__footer">
                                <span>Проверка завершена. Нарушений не найдено.</span>
                                {loading && <Spinner />}
                                <button className={loading ? 'btn btn-disabled' : 'btn btn--blue'} onClick={uploadFileHandler}>Далее</button>
                            </div>
                        </div>
                    )}
            </div>
  )
}

export default AddVideoModal