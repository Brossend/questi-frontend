interface IBar {
  name: string,
  icon: string,
  link: string
}

export const BAR_TABS: IBar[] = [
  {
    name: 'Главная',
    icon: 'o_home',
    link: '/'
  },
  {
    name: 'Лента',
    icon: 'o_people',
    link: '/feed'
  },
  {
    name: 'Квесты рядом',
    icon: 'o_location_on',
    link: '/quests'
  },
  {
    name: 'Профиль',
    icon: 'o_account_circle',
    link: '/profile'
  }
];
