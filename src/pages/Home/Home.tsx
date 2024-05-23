import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Masonry from "react-masonry-css";
import s from './Home.module.css'
import search from '../../../public/search.svg'
import columns_3 from '../../../public/3columns.svg'
import columns_5 from '../../../public/5columns.png'
import { Photo } from "../../types.ts";
import { unsplashAPI } from "../../api";

const Home = () => {

  const { ref, inView } = useInView()

  const inputRef = useRef<HTMLInputElement>(null)
  const [photos, setPhotos] = useState<Photo[]>([])
  const [page, setPage] = useState<number>(1)
  const [columns, setColumns] = useState<number>(3)

  useEffect(() => {
    unsplashAPI.getAllPhotos(page)
      .then(res => {
        setPhotos(res)
      })
  }, [])
  // useEffect(() => {
  //   if (inView) {
  //     unsplashAPI.getAllPhotos(page + 1)
  //       .then(res => setPhotos(prevState => [...prevState, ...res]))
  //       .catch(() => {
  //       })
  //       .finally(() => setPage(prevState => prevState + 1))
  //   }
  // }, [inView]);
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
                <div className={s.mask}>
                  <div className={s.userInfo}>
                    <img src={photo.user.profile_image.medium} width={40} height={40} alt=""/>
                    <span>{photo.user.name}</span>
                  </div>
                </div>
                <img className={s.photo} src={photo.urls.regular} alt={photo.alt_description}/>
              </div>
            </Link>
          </div>
        ))}
      </Masonry>
      <div ref={ref}/>
    </>
  )
}
export default Home;