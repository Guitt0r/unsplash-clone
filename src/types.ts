export type Photo = {
  id: string
  alt_description: string
  alternative_slugs: {
    [key: string]: string
  }
  asset_type: string
  blur_hash: string
  breadcrumbs: []
  color: string
  created_at: string
  current_user_collections: []
  description: string
  height: number
  width: number
  liked_by_user: boolean
  likes: number
  links: {
    download: string
    download_location: string
    html: string
    self: string
  }
  promoted_at: string
  slug: string
  sponsorship: null
  topic_submissions: {}
  updated_at: string
  urls: {
    full: string
    raw: string
    regular: string
    small: string
    small_s3: string
    thumb: string
  }
  user: User
}

export type User = {
  accepted_tos: boolean
  bio: string
  first_name: string
  for_hire: boolean
  id: string
  instagram_username: string
  last_name: string
  links: {
    followers: string
    following: string
    html: string
    likes: string
    photos: string
    portfolio: string
    self: string
  }
  location: string
  name: string
  portfolio_url: string
  profile_image: {
    large: string
    medium: string
    small: string
  }
  social: {
    instagram_username: string
    paypal_email: string
    portfolio_url: string
    twitter_username: string
  }
  total_collections: number
  total_illustrations: number
  total_likes: number
  total_photos: number
  total_promoted_illustrations: number
  total_promoted_photos: number
  twitter_username: null
  updated_at: string
  username: string
}

export type DetailedPhoto = Photo & {
  exif: {
    name: string
  },
  tags: [
    {
      type: string,
      title: string
    }
  ],
  likes: number,
  views: number,
  downloads: number
}
