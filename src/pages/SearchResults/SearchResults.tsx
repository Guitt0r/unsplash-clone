import { useEffect, useState } from "react";
import { unsplashAPI } from "../../api";
import { useParams } from "react-router-dom";
import { Photo } from "../../types.ts";
import { useInView } from "react-intersection-observer";
import PhotoList from "../../components/PhotoList/PhotoList.tsx";

const SearchResults = ({ columns }: { columns: number }) => {
  const { ref, inView } = useInView()

  const id = useParams().id as string
  const [searchResults, setSearchResults] = useState<Photo[]>([])
  const [page, setPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)

  useEffect(() => {
    unsplashAPI.searchPhotos(id)
      .then(res => {
        setSearchResults(res.results)
        setTotalPages(res.total_pages)
      })
  }, [id]);

  useEffect(() => {
    if (inView && page < totalPages) {
      unsplashAPI.searchPhotos(id, page + 1)
        .then(res => setSearchResults(prevState => [...prevState, ...res.results]))
        .catch(() => {
        })
        .finally(() => setPage(prevState => prevState + 1))
    }
  }, [inView]);

  return (
    <>
      <h1>{id}</h1>
      {!!searchResults.length
        ? <PhotoList columns={columns} photos={searchResults}/>
        : <h1 style={{ textAlign: "center" }}>There is no photos based on your search:((</h1>
      }
      <div ref={ref}/>

    </>
  )
}
export default SearchResults;