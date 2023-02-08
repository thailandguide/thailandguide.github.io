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
      label: 'Про Таиланд',
    },
    {
      type: 'category',
      label: 'Перелёты',
      items: [
        {
          type: 'doc',
          id: 'general-guide/flights-intro',
          label: 'Введение',
        },
        {
          type: 'doc',
          id: 'general-guide/flights-thai',
          label: 'Перелёт в Тайланд',
        },
        {
          type: 'doc',
          id: 'general-guide/flights-countries',
          label: 'Особенности перелёта через другие страны',
        },
        {
          type: 'doc',
          id: 'general-guide/flights-after',
          label: 'Что делать по прилёту',
        },
      ],
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
      label: 'Страховка',
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
      label: 'Работа в Таиланде',
    },
    {
      type: 'doc',
      id: 'general-guide/taxes',
      label: 'Налоги в Таиланде',
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
          id: 'Bangkok/Housing',
          label: 'Жильё',
        },
        {
          type: 'doc',
          id: 'Bangkok/visa',
          label: 'Визы',
        },
        {
          type: 'doc',
          id: 'Bangkok/documents',
          label: 'Прочие документы',
        },
        {
          type: 'doc',
          id: 'Bangkok/banks',
          label: 'Банки и валюты',
        },
        {
          type: 'doc',
          id: 'Bangkok/car',
          label: 'Своё авто',
        },
        {
          type: 'doc',
          id: 'Bangkok/insurance',
          label: 'Страховки',
        },
        {
          type: 'doc',
          id: 'Bangkok/services',
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
          id: 'Bangkok/Overview',
          label: 'Введение',
        },
        {
          type: 'doc',
          id: 'Bangkok/food',
          label: 'Питание',
        },
        {
          type: 'doc',
          id: 'Bangkok/products',
          label: 'Товары',
        },
        {
          type: 'doc',
          id: 'Bangkok/kids',
          label: 'Для детей',
        },
        {
          type: 'doc',
          id: 'Bangkok/animals',
          label: 'Для животных',
        },
        {
          type: 'doc',
          id: 'Bangkok/medicine',
          label: 'Медицина',
        },
        {
          type: 'doc',
          id: 'Bangkok/public-transport',
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
          id: 'Bangkok/events',
          label: 'Мероприятия',
        },
        {
          type: 'doc',
          id: 'Bangkok/cafe',
          label: 'Заведения',
        },
        {
          type: 'doc',
          id: 'Bangkok/cannabis',
          label: '4-20',
        },
        {
          type: 'doc',
          id: 'Bangkok/beaches',
          label: 'Пляжи',
        },
        {
          type: 'doc',
          id: 'Bangkok/excursions',
          label: 'Экскурсии',
        },
        {
          type: 'doc',
          id: 'Bangkok/rent',
          label: 'Туристическая аренда',
        },
        {
          type: 'doc',
          id: 'Bangkok/free-time',
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
          id: 'Phuket/Housing',
          label: 'Жильё',
        },
        {
          type: 'doc',
          id: 'Phuket/visa',
          label: 'Визы',
        },
        {
          type: 'doc',
          id: 'Phuket/documents',
          label: 'Прочие документы',
        },
        {
          type: 'doc',
          id: 'Phuket/banks',
          label: 'Банки и валюты',
        },
        {
          type: 'doc',
          id: 'Phuket/car',
          label: 'Своё авто',
        },
        {
          type: 'doc',
          id: 'Phuket/insurance',
          label: 'Страховки',
        },
        {
          type: 'doc',
          id: 'Phuket/services',
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
          id: 'Phuket/Overview',
          label: 'Введение',
        },
        {
          type: 'doc',
          id: 'Phuket/food',
          label: 'Питание',
        },
        {
          type: 'doc',
          id: 'Phuket/products',
          label: 'Товары',
        },
        {
          type: 'doc',
          id: 'Phuket/kids',
          label: 'Для детей',
        },
        {
          type: 'doc',
          id: 'Phuket/animals',
          label: 'Для животных',
        },
        {
          type: 'doc',
          id: 'Phuket/medicine',
          label: 'Медицина',
        },
        {
          type: 'doc',
          id: 'Phuket/public-transport',
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
          id: 'Phuket/Events',
          label: 'Мероприятия',
        },
        {
          type: 'doc',
          id: 'Phuket/cafe',
          label: 'Заведения',
        },
        {
          type: 'doc',
          id: 'Phuket/cannabis',
          label: '4-20',
        },
        {
          type: 'doc',
          id: 'Phuket/beaches',
          label: 'Пляжи',
        },
        {
          type: 'doc',
          id: 'Phuket/excursions',
          label: 'Экскурсии',
        },
        {
          type: 'doc',
          id: 'Phuket/rent',
          label: 'Туристическая аренда',
        },
        {
          type: 'doc',
          id: 'Phuket/free-time',
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
