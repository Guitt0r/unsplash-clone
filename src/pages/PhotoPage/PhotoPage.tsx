import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { unsplashAPI } from "../../api";
import { DetailedPhoto } from "../../types.ts";
import s from './PhotoPage.module.css'
import shareIcon from '../../../public/share.svg'
import infoIcon from '../../../public/info.svg'
import moreIcon from '../../../public/more.svg'
import calendarIcon from '../../../public/calendar.svg'
import cameraIcon from '../../../public/camera.svg'
import heartIcon from '../../../public/heart.svg'
import plusIcon from '../../../public/plus.svg'

const PhotoPage = () => {
  const id = useParams().id as string
  const [photo, setPhoto] = useState<DetailedPhoto | null>(null)
  useEffect(() => {
    unsplashAPI.getPhotoById(id)
      .then(res => setPhoto(res))
  }, []);
  if (!photo) return <>loading...</>//TODO:make loader
  console.log(photo)
  return (
    <>
      <div className={s.header}>
        <div className={s.userInfo}>
          <img src={photo.user.profile_image.medium} width={60} height={60} alt=""/>
          <span>{photo.user.name}</span>
        </div>
        <div className={s.headerButtons}>
          <button className='primaryButton'>
            <img src={heartIcon} width={20} height={20} alt="like"/>
          </button>
          <button className='primaryButton'>
            <img src={plusIcon} width={20} height={20} alt="add to collection"/>
          </button>
        </div>
      </div>
      <hr/>
      <div className={s.photoWrapper}>
        <img src={photo.urls.regular} alt=""/>
      </div>
      <hr/>
      <div className={s.photoInfo}>
        <div className={s.photoNumbers}>
          <div>
            <div className={s.title}>Likes</div>
            <div>{photo.likes}</div>
          </div>
          <div>
            <div className={s.title}>Views</div>
            <div>{photo.views}</div>
          </div>
          <div>
            <div className={s.title}>Downloads</div>
            <div>{photo.downloads}</div>
          </div>
        </div>
        <div className={s.buttons}>
          <button className='primaryButton'>
            <img src={shareIcon} width={20} height={20} alt=""/>
            Share
          </button>
          <button className='primaryButton'>
            <img src={infoIcon} width={20} height={20} alt=""/>
            Info
          </button>
          <button className='primaryButton'>
            <img src={moreIcon} width={20} height={20} alt=""/>
          </button>
        </div>
      </div>
      <div className={s.additionalInfo}>
        <div className={s.additionalInfoItem}>
          <img src={calendarIcon} width={20} height={20} alt=""/>
          Published on {new Date(photo.promoted_at).toDateString()}
        </div>
        <div className={s.additionalInfoItem}>
          <img src={cameraIcon} width={20} height={20} alt=""/>
          {photo.exif.name}
        </div>
      </div>
      <div className={s.tags}>
        {photo.tags.map((tag, i) => (
          <Link to={`/collection/${tag.title}`} key={i}>
            <span className={s.tag}>{tag.title} </span>
          </Link>
        ))}
      </div>
    </>
  )
}
export default PhotoPage;