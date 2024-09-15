import { IRoute } from 'stores/Routes/types';

export const ROUTES: IRoute[] = [
  {
    id: '1',
    image: 'https://omch.ru/files/file/11/3.JPG',
    title: 'Прогулка по центру 1',
    description: 'Если у вас есть свободные 30 минут в центре Омска, приглашаем вас на приятную прогулку по самым разным местам города.',
    rate: 5,
    type: 1,
    startPoints: [
      {
        title: 'ост. Площадь Ленина',
        coordinates: [51.21, 67.32]
      },
      {
        title: 'ост. Театральная площадь',
        coordinates: [20.34, 12.838]
      }
    ],
    points: [
      {
        title: 'Музыкальный театр',
        coordinates: [20.34, 12.838]
      },
      {
        title: 'Аллея олимписких игр',
        coordinates: [20.34, 12.838]
      },
      {
        title: 'Юбилейный мост',
        coordinates: [20.34, 12.838]
      },
      {
        title: 'Скульптура Городовому',
        coordinates: [20.34, 12.838]
      },
      {
        title: 'Скульптура Любочки',
        coordinates: [20.34, 12.838]
      },
      {
        title: 'Семейный ресторан "Где же кролик"',
        coordinates: [20.34, 12.838]
      }
    ],
    duration: 30
  }
];
