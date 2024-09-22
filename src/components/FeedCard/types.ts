export type TSub = {
  id: string,
  name: string,
  image: string
}

export type TPost = {
  id: string,
  avatar: string,
  name: string,
  date: string,
  description: string,
  image: string
}

export type TFeed = {
  subs: TSub[],
  posts: TPost[],
}

export interface IProps {
  post: TPost;
}
