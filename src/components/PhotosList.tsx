import { useEffect, useRef, useState } from "react";
import { Photo } from "../types.ts";
import { unsplashAPI } from "../api";
import Masonry from "react-masonry-css";
import s from './Photos.module.css'
import { Link } from "react-router-dom";
import columns_3 from '../../public/3columns.svg'
import columns_5 from '../../public/5columns.png'
import search from '../../public/search.svg'

const PhotosList = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [photos, setPhotos] = useState<Photo[]>([])
  const [columns, setColumns] = useState<number>(3)

  useEffect(() => {
    unsplashAPI.getAllPhotos()
      .then(res => {
        setPhotos(res)
      })
  }, [])
  console.log(photos)
  return (
    <>
      <div className={s.nav}>
        <div className={s.inputGroup}>
          <input ref={inputRef} type="search" placeholder="Search for pictures"/>
          <img onClick={() => inputRef.current?.focus()} src={search} alt="Search" width={50} height={50}/>
        </div>
        <div className={s.viewButtons}>
          <button
            onClick={() => setColumns(3)}
            className={`${columns === 3 && s.changeViewButtonActive} ${s.changeViewButton}`}
          >
            <img src={columns_3} width={50} height={50} alt=''/>
          </button>
          <button
            onClick={() => setColumns(5)}
            className={`${columns === 5 && s.changeViewButtonActive} ${s.changeViewButton}`}
          >
            <img src={columns_5} width={50} height={50} alt=""/>
          </button>
        </div>
      </div>
      <Masonry
        breakpointCols={columns}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {photos.map(photo => (
          <div key={photo.id}>
            <Link to={`/photo/${photo.id}`}>
              <div className={s.photoWrapper}>
                <div className={s.mask}/>
                <img className={s.photo} src={photo.urls.regular} alt={photo.alt_description}/>
              </div>
            </Link>
          </div>
        ))}
      </Masonry>
    </>
  )
}
export default PhotosList;