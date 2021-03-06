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
                                <h2 className='addVideo__modal__header--title'>???????????????? ??????????</h2>
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
                                    <button type="submit" className='addVideo__modal__body--btn'>?????????????????? ??????????</button>
                                </form>
                            </div>

                            <div className="addVideo__modal__footer">
                                <p className='addVideo__modal__footer--para'>
                                    ???????????????? ??????????, ???? ???????????????????? <span className="addVideo__modal__footer--link">?????????????? ??????????????????????????</span> ?? <span className="addVideo__modal__footer--link">?????????????? ????????????????????</span> YouTube.
                                </p>
                                <p className='addVideo__modal__footer--para'>
                                    ?????????? ???? ???????????????????? ?????????????????? ?????????????????? ?????????? ?? ???????????????????????????????????? ???????????? ???????????? ??????????????????????????. <span className="addVideo__modal__footer--link">?????????????????????</span>
                                </p>
                            </div>
                        </div>
                    )}

                    {activeStep === 2 && (
                        <div className="addVideo__modal__content tab2">
                            <div className="addVideo__modal__header">
                                <h2 className='addVideo__modal__header--title'>????????????????????</h2>
                                <AiOutlineClose className='addVideo__modal__header--closeIcon' onClick={closeAddVideoModalHandler}/>
                            </div>

                            <div className="addVideo__modal__body">
                                <div className="addVideo__modal__body__left">
                                    <div className="addVideo__modal__body__textarea">
                                        <h3 className="addVideo__modal__body__textarea--title">
                                            ???????????????? (???????????????????????? ????????) 
                                        </h3>
                                        <textarea rows="2" onChange={(e) => changeVideoTitle(e)} value={title} className="addVideo__modal__body__textarea--area" placeholder='???????????????? ????????????????,?????????????? ???????????????? ???????????????????? ???????????? ????????????'>

                                        </textarea>
                                        <span className="addVideo__modal__body__textarea--limit">
                                            {title.length} / 100
                                        </span>
                                    </div>

                                    <div className="addVideo__modal__body__textarea">
                                        <h3 className="addVideo__modal__body__textarea--title">
                                        ????????????????
                                        </h3>
                                        <textarea rows="10" onChange={(e) => changeVideoDescription(e)} value={description} className="addVideo__modal__body__textarea--area" placeholder='????????????????????,?? ?????? ???????? ??????????'>

                                        </textarea>
                                        <span className="addVideo__modal__body__textarea--limit">
                                            {description.length} / 5000
                                        </span>
                                    </div>
                                </div>

                                <div className="addVideo__modal__body__right">
                                    <h3 className='addVideo__modal__body__right--title'>??????????????</h3>
                                    <input type="text" className="addVideo__modal__body__right--input" placeholder='URL ??????????????' onChange={(e) => setThumbnail(e.target.value)} />
                                </div>
                            </div>

                            <div className="addVideo__modal__footer">
                                <span>???????????????? ??????????????????. ?????????????????? ???? ??????????????.</span>
                                {loading && <Spinner />}
                                <button className={loading ? 'btn btn-disabled' : 'btn btn--blue'} onClick={uploadFileHandler}>??????????</button>
                            </div>
                        </div>
                    )}
            </div>
  )
}

export default AddVideoModal