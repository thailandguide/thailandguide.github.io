/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  generalSidebar: [
    {
      type: 'doc',
      id: 'general-guide/Overview',
      label: 'Общая информация',
    },
    {
      type: 'doc',
      id: 'general-guide/visa',
      label: 'Визы', 
    },
    {
      type: 'doc',
      id: 'general-guide/insurance',
      label: 'Страховки',
    },
    {
      type: 'doc',
      id: 'general-guide/banks',
      label: 'Банки',
    },
    {
      type: 'doc',
      id: 'general-guide/medicine',
      label: 'Медицина',
    },
    {
      type: 'doc',
      id: 'general-guide/transport',
      label: 'Транспорт',
    },
    {
      type: 'doc',
      id: 'general-guide/flights',
      label: 'Перелёты',
    },
    {
      type: 'doc',
      id: 'general-guide/simcards',
      label: 'Сим-карты',
    },
    {
      type: 'doc',
      id: 'general-guide/apps',
      label: 'Приложения',
    },
  ],
  bangkokSidebar: [
    {
      type: 'doc',
      id: 'Bangkok/Overview',
      label: 'Общая информация',
    },
    {
      type: 'doc',
      id: 'Bangkok/Transport',
      label: 'Транспорт',
    },
    {
      type: 'doc',
      id: 'Bangkok/food',
      label: 'Еда',
    },
    {
      type: 'doc',
      id: 'Bangkok/Bars',
      label: 'Бары',
    },
    {
      type: 'doc',
      id: 'Bangkok/Landmarks',
      label: 'Стоит посмотреть',
    },
    {
      type: 'doc',
      id: 'Bangkok/Coworkings',
      label: 'Коворкинги',
    },
    {
      type: 'doc',
      id: 'Bangkok/Housing',
      label: 'Жильё',
    },
  ],
  phuketSidebar: [
    {
      type: 'doc',
      id: 'Phuket/Overview',
      label: 'Общая информация',
    },
    {
      type: 'doc',
      id: 'Phuket/Transport',
      label: 'Транспорт',
    },
    {
      type: 'doc',
      id: 'Phuket/food',
      label: 'Еда',
    },
    {
      type: 'doc',
      id: 'Phuket/Events',
      label: 'События',
    },
    {
      type: 'doc',
      id: 'Phuket/Bars',
      label: 'Бары',
    },
    {
      type: 'doc',
      id: 'Phuket/Coworkings',
      label: 'Коворкинги',
    },
    {
      type: 'doc',
      id: 'Phuket/Housing',
      label: 'Жильё',
    },
  ],
  samuiSidebar: [
    {
      type: 'doc',
      id: 'Samui/Overview',
      label: 'Общая информация',
    },
    {
      type: 'doc',
      id: 'Samui/Transport',
      label: 'Транспорт',
    },
    {
      type: 'doc',
      id: 'Samui/food',
      label: 'Еда',
    },
    {
      type: 'doc',
      id: 'Samui/Bars',
      label: 'Бары',
    },
    {
      type: 'doc',
      id: 'Samui/Beaches',
      label: 'Пляжи',
    },
    {
      type: 'doc',
      id: 'Samui/Coworkings',
      label: 'Коворкинги',
    },
    {
      type: 'doc',
      id: 'Samui/Housing',
      label: 'Жильё',
    },
  ],
  phanganSidebar: [
    {
      type: 'doc',
      id: 'Phangan/Overview',
      label: 'Общая информация',
    },
    {
      type: 'doc',
      id: 'Phangan/Transport',
      label: 'Транспорт',
    },
    {
      type: 'doc',
      id: 'Phangan/food',
      label: 'Еда',
    },
    {
      type: 'doc',
      id: 'Phangan/Events',
      label: 'События',
    },
    {
      type: 'doc',
      id: 'Phangan/Beaches',
      label: 'Пляжи',
    },
    {
      type: 'doc',
      id: 'Phangan/Landmarks',
      label: 'Стоит посмотреть',
    },
    {
      type: 'doc',
      id: 'Phangan/Water',
      label: 'Водные активности',
    },
    {
      type: 'doc',
      id: 'Phangan/Massage',
      label: 'Массаж',
    },
    {
      type: 'doc',
      id: 'Phangan/Housing',
      label: 'Жильё',
    },
  ],
  chiangmaiSidebar: [
    {
      type: 'doc',
      id: 'Chiangmai/Overview',
      label: 'Общая информация',
    },
    {
      type: 'doc',
      id: 'Chiangmai/Transport',
      label: 'Транспорт',
    },
    {
      type: 'doc',
      id: 'Chiangmai/food',
      label: 'Еда',
    },
    {
      type: 'doc',
      id: 'Chiangmai/Events',
      label: 'События',
    },
    {
      type: 'doc',
      id: 'Chiangmai/Bars',
      label: 'Бары',
    },
    {
      type: 'doc',
      id: 'Chiangmai/Coworkings',
      label: 'Коворкинги',
    },
    {
      type: 'doc',
      id: 'Chiangmai/Housing',
      label: 'Жильё',
    },
  ],
  
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [
  //   'General-Thailand-Guide',
  //   {
  //     type: 'category',
  //     label: 'Cities',
  //     items: ['Chiangmai', 'Samui', 'Phangan', 'Phuket', 'Pattaya', 'Bangkok'],
  //   },
  //   'Экстренная-помощь',
  // ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
