import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Photo } from "../../types.ts";
import { unsplashAPI } from "../../api";
import PhotoList from "../../components/PhotoList/PhotoList.tsx";

const Home = ({columns}:{columns:number}) => {

  const { ref, inView } = useInView()

  const [photos, setPhotos] = useState<Photo[]>([])
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    unsplashAPI.getAllPhotos(page)
      .then(res => {
        setPhotos(res)
      })
  }, [])
  useEffect(() => {
    if (inView) {
      unsplashAPI.getAllPhotos(page + 1)
        .then(res => setPhotos(prevState => [...prevState, ...res]))
        .catch(() => {
        })
        .finally(() => setPage(prevState => prevState + 1))
    }
  }, [inView]);
  console.log(photos)
  return (
    <>
      <PhotoList columns={columns} photos={photos}/>
      <div ref={ref}/>
    </>
  )
}
export default Home;