import { useEffect, useState } from "react";
import { unsplashAPI } from "../../api";
import { useParams } from "react-router-dom";
import { Photo } from "../../types.ts";
import PhotoList from "../../components/PhotoList/PhotoList.tsx";
import { useInView } from "react-intersection-observer";

const CollectionPage = ({ columns }: { columns: number }) => {
  const { ref, inView } = useInView()
  const id = useParams().id as string
  const [photos, setPhotos] = useState<Photo[]>([])
  const [page, setPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)

  useEffect(() => {
    unsplashAPI.searchPhotos(id)
      .then(res => {
        setPhotos(res.results)
        setTotalPages(res.total_pages)
      })
  }, []);

  useEffect(() => {
    if (inView && page < totalPages) {
      unsplashAPI.searchPhotos(id, page)
        .then(res => setPhotos(prevState => [...prevState, ...res.results]))
        .catch(() => {
        })
        .finally(() => setPage(prevState => prevState + 1))
    }
  }, [inView]);
  return (
    <>
      <h1 style={{textTransform:'capitalize'}}>{id}</h1>
      <PhotoList columns={columns} photos={photos}/>
      <div ref={ref}/>

    </>
  )
}
export default CollectionPage