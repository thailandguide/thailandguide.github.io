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
      id: 'general-guide/overview',
      label: 'Про Тайланд',
    },
    {
      type: 'doc',
      id: 'general-guide/flights',
      label: 'Перелёты',
    },
    {
      type: 'doc',
      id: 'general-guide/visa',
      label: 'Визы', 
    },
    {
      type: 'doc',
      id: 'general-guide/simcards',
      label: 'Связь',
    },
    {
      type: 'doc',
      id: 'general-guide/housing',
      label: 'Жильё',
    },
    {
      type: 'doc',
      id: 'general-guide/currency',
      label: 'Валюта',
    },
    {
      type: 'doc',
      id: 'general-guide/transport',
      label: 'Транспорт',
    },
    {
      type: 'doc',
      id: 'general-guide/driving-license',
      label: 'Водительские права',
    },
    {
      type: 'doc',
      id: 'general-guide/apps',
      label: 'Приложения',
    },
    {
      type: 'doc',
      id: 'general-guide/animals',
      label: 'Опасные животные',
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
      id: 'general-guide/work',
      label: 'Работа в Тайланде',
    },
    {
      type: 'doc',
      id: 'general-guide/taxes',
      label: 'Налоги в Тайланде',
    },
    {
      type: 'doc',
      id: 'general-guide/excursions',
      label: 'Экскурсии',
    },
  ],
  bangkokSidebar: [
    {
      type: 'category',
      label: 'Важное',
      items: [
        {
          type: 'doc',
          id: 'bangkok/housing',
          label: 'Жильё',
        },
        {
          type: 'doc',
          id: 'bangkok/visa',
          label: 'Визы',
        },
        {
          type: 'doc',
          id: 'bangkok/documents',
          label: 'Прочие документы',
        },
        {
          type: 'doc',
          id: 'bangkok/banks',
          label: 'Банки и валюты',
        },
        {
          type: 'doc',
          id: 'bangkok/car',
          label: 'Своё авто',
        },
        {
          type: 'doc',
          id: 'bangkok/insurance',
          label: 'Страховки',
        },
        {
          type: 'doc',
          id: 'bangkok/services',
          label: 'Деловые услуги',
        },
      ],
    },
    {
      type: 'category',
      label: 'Полезное',
      items: [
        {
          type: 'doc',
          id: 'bangkok/overview',
          label: 'Введение',
        },
        {
          type: 'doc',
          id: 'bangkok/food',
          label: 'Питание',
        },
        {
          type: 'doc',
          id: 'bangkok/products',
          label: 'Товары',
        },
        {
          type: 'doc',
          id: 'bangkok/kids',
          label: 'Для детей',
        },
        {
          type: 'doc',
          id: 'bangkok/animals',
          label: 'Для животных',
        },
        {
          type: 'doc',
          id: 'bangkok/medicine',
          label: 'Медицина',
        },
        {
          type: 'doc',
          id: 'bangkok/public-transport',
          label: 'Общественный транспорт',
        },
      ],
    },
    {
      type: 'category',
      label: 'Интересное',
      items: [
        {
          type: 'doc',
          id: 'bangkok/events',
          label: 'Мероприятия',
        },
        {
          type: 'doc',
          id: 'bangkok/cafe',
          label: 'Заведения',
        },
        {
          type: 'doc',
          id: 'bangkok/cannabis',
          label: '4-20',
        },
        {
          type: 'doc',
          id: 'bangkok/beaches',
          label: 'Пляжи',
        },
        {
          type: 'doc',
          id: 'bangkok/excursions',
          label: 'Экскурсии',
        },
        {
          type: 'doc',
          id: 'bangkok/rent',
          label: 'Туристическая аренда',
        },
        {
          type: 'doc',
          id: 'bangkok/free-time',
          label: 'Локации для досуга',
        },
      ],
    },
  ],
  phuketSidebar: [
    {
      type: 'category',
      label: 'Важное',
      items: [
        {
          type: 'doc',
          id: 'phuket/housing',
          label: 'Жильё',
        },
        {
          type: 'doc',
          id: 'phuket/visa',
          label: 'Визы',
        },
        {
          type: 'doc',
          id: 'phuket/documents',
          label: 'Прочие документы',
        },
        {
          type: 'doc',
          id: 'phuket/banks',
          label: 'Банки и валюты',
        },
        {
          type: 'doc',
          id: 'phuket/car',
          label: 'Своё авто',
        },
        {
          type: 'doc',
          id: 'phuket/insurance',
          label: 'Страховки',
        },
        {
          type: 'doc',
          id: 'phuket/services',
          label: 'Деловые услуги',
        },
      ],
    },
    {
      type: 'category',
      label: 'Полезное',
      items: [
        {
          type: 'doc',
          id: 'phuket/overview',
          label: 'Введение',
        },
        {
          type: 'doc',
          id: 'phuket/food',
          label: 'Питание',
        },
        {
          type: 'doc',
          id: 'phuket/products',
          label: 'Товары',
        },
        {
          type: 'doc',
          id: 'phuket/kids',
          label: 'Для детей',
        },
        {
          type: 'doc',
          id: 'phuket/animals',
          label: 'Для животных',
        },
        {
          type: 'doc',
          id: 'phuket/medicine',
          label: 'Медицина',
        },
        {
          type: 'doc',
          id: 'phuket/public-transport',
          label: 'Общественный транспорт',
        },
      ],
    },
    {
      type: 'category',
      label: 'Интересное',
      items: [
        {
          type: 'doc',
          id: 'bangkok/events',
          label: 'Мероприятия',
        },
        {
          type: 'doc',
          id: 'bangkok/cafe',
          label: 'Заведения',
        },
        {
          type: 'doc',
          id: 'bangkok/cannabis',
          label: '4-20',
        },
        {
          type: 'doc',
          id: 'bangkok/beaches',
          label: 'Пляжи',
        },
        {
          type: 'doc',
          id: 'bangkok/excursions',
          label: 'Экскурсии',
        },
        {
          type: 'doc',
          id: 'bangkok/rent',
          label: 'Туристическая аренда',
        },
        {
          type: 'doc',
          id: 'bangkok/free-time',
          label: 'Локации для досуга',
        },
      ],
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
