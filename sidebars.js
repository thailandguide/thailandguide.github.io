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
      type: 'category',
      label: 'Визы',
      items: [
        {
          type: 'doc',
          id: 'general-guide/visa-intro',
          label: 'Введение',
        },
        {
          type: 'doc',
          id: 'general-guide/visa-stamp',
          label: 'Штамп по прибытию',
        },
        {
          type: 'doc',
          id: 'general-guide/visa-tr',
          label: 'Туристическая виза',
        },
        {
          type: 'doc',
          id: 'general-guide/visa-ed',
          label: 'Студенческая виза',
        },
        {
          type: 'doc',
          id: 'general-guide/visa-b',
          label: 'Бизнес виза',
        },
        {
          type: 'doc',
          id: 'general-guide/visa-ltr',
          label: 'Длительные визы',
        },
      ],
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
      type: 'category',
      label: 'Работа в Таиланде',
      items: [
        {
          type: 'doc',
          id: 'general-guide/work-permit',
          label: 'Всё о Work Permit',
        },
        {
          type: 'doc',
          id: 'general-guide/forbidden-jobs',
          label: 'Запрещённые профессии',
        },
      ],
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
          type: 'category',
          label: 'Визы',
          items: [
            {
              type: 'doc',
              id: 'Bangkok/visa-office',
              label: 'Введение',
            },
            {
              type: 'doc',
              id: 'Bangkok/visa-companies',
              label: 'Введение',
            },
            {
              type: 'doc',
              id: 'Bangkok/visa-schools',
              label: 'Введение',
            },
          ],
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
          type: 'category',
          label: 'Визы',
          items: [
            {
              type: 'doc',
              id: 'Phuket/visa-office',
              label: 'Введение',
            },
            {
              type: 'doc',
              id: 'Phuket/visa-companies',
              label: 'Введение',
            },
            {
              type: 'doc',
              id: 'Phuket/visa-schools',
              label: 'Введение',
            },
          ],
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
      type: 'category',
      label: 'Важное',
      items: [
        {
          type: 'doc',
          id: 'Samui/Housing',
          label: 'Жильё',
        },
        {
          type: 'category',
          label: 'Визы',
          items: [
            {
              type: 'doc',
              id: 'Samui/visa-office',
              label: 'Введение',
            },
            {
              type: 'doc',
              id: 'Samui/visa-companies',
              label: 'Введение',
            },
            {
              type: 'doc',
              id: 'Samui/visa-schools',
              label: 'Введение',
            },
          ],
        },
        {
          type: 'doc',
          id: 'Samui/documents',
          label: 'Прочие документы',
        },
        {
          type: 'doc',
          id: 'Samui/banks',
          label: 'Банки и валюты',
        },
        {
          type: 'doc',
          id: 'Samui/car',
          label: 'Своё авто',
        },
        {
          type: 'doc',
          id: 'Samui/insurance',
          label: 'Страховки',
        },
        {
          type: 'doc',
          id: 'Samui/services',
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
          id: 'Samui/Overview',
          label: 'Введение',
        },
        {
          type: 'doc',
          id: 'Samui/food',
          label: 'Питание',
        },
        {
          type: 'doc',
          id: 'Samui/products',
          label: 'Товары',
        },
        {
          type: 'doc',
          id: 'Samui/kids',
          label: 'Для детей',
        },
        {
          type: 'doc',
          id: 'Samui/animals',
          label: 'Для животных',
        },
        {
          type: 'doc',
          id: 'Samui/medicine',
          label: 'Медицина',
        },
        {
          type: 'doc',
          id: 'Samui/public-transport',
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
          id: 'Samui/events',
          label: 'Мероприятия',
        },
        {
          type: 'doc',
          id: 'Samui/cafe',
          label: 'Заведения',
        },
        {
          type: 'doc',
          id: 'Samui/cannabis',
          label: '4-20',
        },
        {
          type: 'doc',
          id: 'Samui/Beaches',
          label: 'Пляжи',
        },
        {
          type: 'doc',
          id: 'Samui/excursions',
          label: 'Экскурсии',
        },
        {
          type: 'doc',
          id: 'Samui/rent',
          label: 'Туристическая аренда',
        },
        {
          type: 'doc',
          id: 'Samui/free-time',
          label: 'Локации для досуга',
        },
      ],
    },
  ],
  phanganSidebar: [
    {
      type: 'category',
      label: 'Важное',
      items: [
        {
          type: 'doc',
          id: 'Phangan/Housing',
          label: 'Жильё',
        },
        {
          type: 'category',
          label: 'Визы',
          items: [
            {
              type: 'doc',
              id: 'Phangan/visa-office',
              label: 'Введение',
            },
            {
              type: 'doc',
              id: 'Phangan/visa-companies',
              label: 'Введение',
            },
            {
              type: 'doc',
              id: 'Phangan/visa-schools',
              label: 'Введение',
            },
          ],
        },
        {
          type: 'doc',
          id: 'Phangan/documents',
          label: 'Прочие документы',
        },
        {
          type: 'doc',
          id: 'Phangan/banks',
          label: 'Банки и валюты',
        },
        {
          type: 'doc',
          id: 'Phangan/car',
          label: 'Своё авто',
        },
        {
          type: 'doc',
          id: 'Phangan/insurance',
          label: 'Страховки',
        },
        {
          type: 'doc',
          id: 'Phangan/services',
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
          id: 'Phangan/Overview',
          label: 'Введение',
        },
        {
          type: 'doc',
          id: 'Phangan/food',
          label: 'Питание',
        },
        {
          type: 'doc',
          id: 'Phangan/products',
          label: 'Товары',
        },
        {
          type: 'doc',
          id: 'Phangan/kids',
          label: 'Для детей',
        },
        {
          type: 'doc',
          id: 'Phangan/animals',
          label: 'Для животных',
        },
        {
          type: 'doc',
          id: 'Phangan/medicine',
          label: 'Медицина',
        },
        {
          type: 'doc',
          id: 'Phangan/public-transport',
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
          id: 'Phangan/Events',
          label: 'Мероприятия',
        },
        {
          type: 'doc',
          id: 'Phangan/cafe',
          label: 'Заведения',
        },
        {
          type: 'doc',
          id: 'Phangan/cannabis',
          label: '4-20',
        },
        {
          type: 'doc',
          id: 'Phangan/Beaches',
          label: 'Пляжи',
        },
        {
          type: 'doc',
          id: 'Phangan/excursions',
          label: 'Экскурсии',
        },
        {
          type: 'doc',
          id: 'Phangan/rent',
          label: 'Туристическая аренда',
        },
        {
          type: 'doc',
          id: 'Phangan/free-time',
          label: 'Локации для досуга',
        },
      ],
    },
  ],
  chiangmaiSidebar: [
    {
      type: 'category',
      label: 'Важное',
      items: [
        {
          type: 'doc',
          id: 'Chiangmai/Housing',
          label: 'Жильё',
        },
        {
          type: 'category',
          label: 'Визы',
          items: [
            {
              type: 'doc',
              id: 'Chiangmai/visa-office',
              label: 'Введение',
            },
            {
              type: 'doc',
              id: 'Chiangmai/visa-companies',
              label: 'Введение',
            },
            {
              type: 'doc',
              id: 'Chiangmai/visa-schools',
              label: 'Введение',
            },
          ],
        },
        {
          type: 'doc',
          id: 'Chiangmai/documents',
          label: 'Прочие документы',
        },
        {
          type: 'doc',
          id: 'Chiangmai/banks',
          label: 'Банки и валюты',
        },
        {
          type: 'doc',
          id: 'Chiangmai/car',
          label: 'Своё авто',
        },
        {
          type: 'doc',
          id: 'Chiangmai/insurance',
          label: 'Страховки',
        },
        {
          type: 'doc',
          id: 'Chiangmai/services',
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
          id: 'Chiangmai/Overview',
          label: 'Введение',
        },
        {
          type: 'doc',
          id: 'Chiangmai/food',
          label: 'Питание',
        },
        {
          type: 'doc',
          id: 'Chiangmai/products',
          label: 'Товары',
        },
        {
          type: 'doc',
          id: 'Chiangmai/kids',
          label: 'Для детей',
        },
        {
          type: 'doc',
          id: 'Chiangmai/animals',
          label: 'Для животных',
        },
        {
          type: 'doc',
          id: 'Chiangmai/medicine',
          label: 'Медицина',
        },
        {
          type: 'doc',
          id: 'Chiangmai/public-transport',
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
          id: 'Chiangmai/Events',
          label: 'Мероприятия',
        },
        {
          type: 'doc',
          id: 'Chiangmai/cafe',
          label: 'Заведения',
        },
        {
          type: 'doc',
          id: 'Chiangmai/cannabis',
          label: '4-20',
        },
        {
          type: 'doc',
          id: 'Chiangmai/beaches',
          label: 'Пляжи',
        },
        {
          type: 'doc',
          id: 'Chiangmai/excursions',
          label: 'Экскурсии',
        },
        {
          type: 'doc',
          id: 'Chiangmai/rent',
          label: 'Туристическая аренда',
        },
        {
          type: 'doc',
          id: 'Chiangmai/free-time',
          label: 'Локации для досуга',
        },
      ],
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
