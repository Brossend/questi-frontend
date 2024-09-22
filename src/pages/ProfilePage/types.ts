import { TPost } from 'components/FeedCard/types';

export interface IProfile {
  id: string,
  name: string,
  avatar: string,
  quests: number,
  subscriptions: number,
  subscribers: number,
  posts: TPost[]
}
