import { action, makeObservable, observable, runInAction } from "mobx";

export interface IImages {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export class ImagesStoreImpl {
  public imagesList: IImages[] = [];

  constructor() {
    makeObservable(this, {
      imagesList: observable,
      getImages: action,
    });
  }

  // Action
  public getImages() {
    this.fetchImages().then((res: IImages[]) => {
      runInAction(() => {
        this.imagesList = res;
      });
    });
  }

  private async fetchImages(): Promise<IImages[]> {
    const data = await fetch("https://jsonplaceholder.typicode.com/photos");
    return data.json();
  }
}

export const ImagesStore = new ImagesStoreImpl();
