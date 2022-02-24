import { observer } from "mobx-react";
import React from "react";
import { IImages, ImagesStoreImpl } from "./ImagesStore";

interface IImagesGallery {
  imagesStore: ImagesStoreImpl;
}
const ImagesGallery: React.FC<IImagesGallery> = observer(({ imagesStore }) => {
  let [imagesList, setImagesList] = React.useState<IImages[]>([]);

  React.useEffect(() => {
    imagesStore.getImages();
  }, [imagesStore]);

  React.useEffect(() => {
    const imageData = imagesStore.imagesList;
    setImagesList(imageData);
  }, [imagesStore.imagesList]);

  if (imagesList.length === 0) {
    return <div>Fetching data...........</div>;
  }

  return (
    <>
      <div className="d-flex flex-row flex-wrap justify-content-between align-items-center mt-5 p-2">
        {imagesList.map((image) => {
          return (
            <div key={image.id} className="card m-2" style={{ width: "18rem" }}>
              <img
                src={image.thumbnailUrl}
                className="card-img-top img-thumbnail"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text text-dark" title={image.title}>
                  {image.title.length > 30
                    ? `${image.title.slice(0, 30)}...`
                    : image.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
});

export default ImagesGallery;
