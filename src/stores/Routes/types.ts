import {LngLat} from '@yandex/ymaps3-types/common/types';

export type TNearbyPoints = {
  title: string,
  coordinates: LngLat
}

type TPoints = {
  title: string,
  coordinates: number[]
}

export type TQuestion = {
  text: string,
  points: number
}

type TAllPoints = {
  id: string,
  title: string,
  image: string,
  coordinates: LngLat,
  description: string,
  question: string,
  answers: TQuestion[]
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
