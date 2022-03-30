import { observer } from "mobx-react";
import React from "react";
import SkeletonElement from "../skeleton/SkeletonElement";
import SkeletonWrapper from "../skeleton/SkeletonWrapper";
import { IImages, ImagesStoreImpl } from "./ImagesStore";

interface IImagesGallery {
  imagesStore: ImagesStoreImpl;
}

const ImageCardShimmer: React.FC = () => {
  return (
    <div
      key={Math.random()}
      className="card m-2"
      style={{ width: "18rem", height: "379px" }}
    >
      <div className="card-img-top img-thumbnail" style={{ height: "286px" }}>
        <SkeletonElement type="card"></SkeletonElement>
      </div>
      <div className="card-body">
        <p className="card-text text-dark">
          <SkeletonElement type="text">Load..</SkeletonElement>
          <SkeletonElement type="text"></SkeletonElement>
          <SkeletonElement type="text"></SkeletonElement>
          <SkeletonElement type="text"></SkeletonElement>
        </p>
      </div>
    </div>
  );
};

const ImageCard: React.FC<{ image: IImages }> = ({ image }) => {
  return (
    <div key={image.id} className="card m-2" style={{ width: "18rem" }}>
      <div
        className="m-1"
        style={{ height: "286px" }}
        data-skeletontype="card"
      >
         <img 
          src={image.thumbnailUrl} 
          alt="..."  
          className="card-img-top img-thumbnail"  
          
        />  
      </div>
  
      <div className="card-body">
        <p
          className="card-text text-dark"
          title={image.title}
          data-skeletontype="text"
        >
          {image.title.length > 30
            ? `${image.title.slice(0, 30)}...`
            : image.title}
        </p>
      </div>
    </div>
  );
};

const ImagesGallery: React.FC<IImagesGallery> = observer(({ imagesStore }) => {
  let [imagesList, setImagesList] = React.useState<IImages[]>([]);
  const loadingList = [1, 2, 3, 4, 5, 6, 7, 8];

  React.useEffect(() => {
    setTimeout(() => imagesStore.getImages(), 2000);
  }, [imagesStore]);

  React.useEffect(() => {
    const imageData = imagesStore.imagesList.slice(0, 8);
    setImagesList(imageData);
  }, [imagesStore.imagesList]);


  return (
    <>
      <div className="d-flex flex-row flex-wrap justify-content-between align-items-center mt-5 p-2">
        {!!imagesList.length &&
          imagesList.map((image) => {
            return <ImageCard image={image} />;
          })}

        {!imagesList.length &&
          loadingList.map((elem) => {
            //return <ImageCardShimmer />;
            const img = {
              id: Math.random(),
              thumbnailUrl: "",
              title: "",
            } as IImages;
            return (
              <SkeletonWrapper>
                <ImageCard key={img.id} image={img}></ImageCard>
              </SkeletonWrapper>
            );
          })
          }
      </div>
    </>
  );
});

export default ImagesGallery;
