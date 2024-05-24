import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";
import s from "./PhotoList.module.css";
import { Photo } from "../../types.ts";

const PhotoList = ({columns,photos}:{ columns:number,photos:Photo[] }) => {
  return(
    <Masonry
      breakpointCols={{ default: columns, 768:2,375:1 }}
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
  )
}
export default PhotoList