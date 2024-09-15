type TPoints = {
  title: string,
  coordinates: number[]
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
  duration: number
}
