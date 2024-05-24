import axios from "axios";
import { DetailedPhoto, Photo } from "../types.ts";

export const instance = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID _86RXT0iNZ474jb43IS6Qwao0tJH615xOtEcd_lIQ6Q`
  }
})

export const unsplashAPI = {
  async getAllPhotos(page?: number) {
    const res = await instance.get<Photo[]>(`/photos?page=${page}`);
    return res.data
  },
  async getPhotoById(id: string) {
    const res = await instance.get<DetailedPhoto>(`/photos/${id}`);
    return res.data
  },
  async searchPhotos(query: string, page?: number) {
    const res = await instance.get<{
      total: number,
      total_pages: number,
      results: Photo[]
    }>(`/search/photos?query=${query}&page=${page}`);
    return res.data
  },
  async searchCollections(query: string, page?: number) {
    const res = await instance.get<{
      total: number,
      total_pages: number,
      results: Photo[]
    }>(`/search/collections/?query=${query}&page=${page}`)
    return res.data
  }
}