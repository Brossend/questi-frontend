import {LngLat} from '@yandex/ymaps3-types/common/types';

export type TNearbyPoints = {
  title: string,
  coordinates: LngLat
}

type TPoints = {
  title: string,
  coordinates: number[]
}

type TAllPoints = {
  title: string,
  coordinates: LngLat,
  active: boolean
}

export interface IRoute {
  id: string,
  image: string,
  title: string,
  description: string,
  rate: number,
  type: number,
  startPoints: TPoints[],
  points: TPoints[],
  allPoints: TAllPoints[],
  duration: number
}
