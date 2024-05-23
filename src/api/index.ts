import axios from "axios";
import { Photo } from "../types.ts";

export const instance = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID _86RXT0iNZ474jb43IS6Qwao0tJH615xOtEcd_lIQ6Q`
  }
})

export const unsplashAPI = {
  async getAllPhotos() {
    const res = await instance.get<Photo[]>(`/photos`)
    return res.data
  }
}