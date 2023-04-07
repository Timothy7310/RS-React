import React from 'react';
import CardModal from '../../src/components/Card/CardModal';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Card } from '../../src/types/types';

const testMovie = {
  fees: {
    world: {
      value: 286801374,
      currency: '$',
    },
    usa: {
      value: 136801374,
      currency: '$',
    },
  },
  status: null,
  externalId: {
    kpHD: '42e511a460839b298d96effd8de60c68',
    imdb: 'tt0120689',
    tmdb: 497,
  },
  rating: {
    kp: 9.072,
    imdb: 8.6,
    filmCritics: 6.8,
    russianFilmCritics: 0,
    await: 0,
  },
  votes: {
    kp: 878798,
    imdb: 1323699,
    filmCritics: 136,
    russianFilmCritics: 1,
    await: 0,
  },
  backdrop: {
    url: 'https://avatars.mds.yandex.net/get-ott/224348/2a00000169e39ef77f588ccdfe574dae8227/orig',
    previewUrl:
      'https://avatars.mds.yandex.net/get-ott/224348/2a00000169e39ef77f588ccdfe574dae8227/x1000',
  },
  movieLength: 189,
  images: {
    postersCount: 46,
    backdropsCount: 15,
    framesCount: 62,
  },
  productionCompanies: [
    {
      name: 'Castle Rock Entertainment',
      url: 'https://www.themoviedb.org/t/p/original/7znWcbDd4PcJzJUlJxYqAlPPykp.png',
      previewUrl: 'https://www.themoviedb.org/t/p/w500/7znWcbDd4PcJzJUlJxYqAlPPykp.png',
    },
    {
      name: 'Darkwoods Productions',
      url: 'https://www.themoviedb.org/t/p/original/bli7HkPOXOEWsDwDK0W7XXfeUU2.png',
      previewUrl: 'https://www.themoviedb.org/t/p/w500/bli7HkPOXOEWsDwDK0W7XXfeUU2.png',
    },
    {
      name: 'Warner Bros. Pictures',
      url: 'https://www.themoviedb.org/t/p/original/ky0xOc5OrhzkZ1N6KyUxacfQsCk.png',
      previewUrl: 'https://www.themoviedb.org/t/p/w500/ky0xOc5OrhzkZ1N6KyUxacfQsCk.png',
    },
    {
      name: 'Universal Pictures',
      url: 'https://www.themoviedb.org/t/p/original/8lvHyhjr8oUKOOy2dKXoALWKdp0.png',
      previewUrl: 'https://www.themoviedb.org/t/p/w500/8lvHyhjr8oUKOOy2dKXoALWKdp0.png',
    },
  ],
  spokenLanguages: [
    {
      name: 'Français',
      nameEn: 'French',
    },
    {
      name: 'English',
      nameEn: 'English',
    },
  ],
  id: 435,
  type: 'movie',
  name: 'Зеленая миля',
  description:
    'Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.',
  distributors: {
    distributor: 'West',
    distributorRelease: 'West Video',
  },
  premiere: {
    country: 'США',
    world: '1999-12-06T00:00:00.000Z',
    russia: '2000-04-18T00:00:00.000Z',
    cinema: '2000-04-18T00:00:00.000Z',
    dvd: '2012-11-26T00:00:00.000Z',
  },
  slogan: 'Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них',
  year: 1999,
  budget: {
    value: 60000000,
    currency: '$',
  },
  poster: {
    url: 'https://st.kp.yandex.net/images/film_big/435.jpg',
    previewUrl: 'https://st.kp.yandex.net/images/film_iphone/iphone360_435.jpg',
  },
  facts: [
    {
      value:
        'Фильм снят по мотивам романа <a href="/name/24263/" class="all">Стивена Кинга</a> &laquo;Зеленая миля&raquo; (The Green Mile, 1996).',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'События картины развиваются в 1935 году (в книге – в 1932). Данное изменение было вызвано желанием использовать в фильме кадры из «<a href="/film/8325/" class="all">Цилиндра</a>» (1935).',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        '<a href="/name/12759/" class="all">Дэвид Морс</a> ниже <a href="/name/677/" class="all">Майкла Кларка Дункана</a> всего на один дюйм. В ходе съемок было применено несколько различных способов, дабы создать иллюзию того, что Джон Коффи был невероятным гигантом.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'Исполнитель роли Эдуарда Делакруа, <a href="/name/8989/" class="all">Майкл Джитер</a>, к моменту съемок картины уже имел опыт совместных съемок с «одаренными» мышами. Этим фильмом стала лента 1997 года – «<a href="/film/6898/" class="all">Мышиная охота</a>».',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'По первоначальной задумке, <a href="/name/9144/" class="all">Том Хэнкс</a> должен был исполнить и роль постаревшего Пола Эджкомба. После пары-тройки экспериментов гримеров было решено, что должным образом загримировать Тома не удастся, и тогда на эту маленькую роль был выбран <a href="/name/24265/" class="all">Даббс Грир</a>.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'Модель электрического стула, задействованная в ходе съемок картины, была сконструирована по оригинальным чертежам допотопного электрического стула, известного под названием «Old Sparky». <a href="/name/24263/" class="all">Стивен Кинг</a> попытался понять, что испытывают приговоренные к смертной казни, и попросил привязать себя к стулу. По его словам, ощущения были не из самых приятных.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'Одной из главных проблем кастинга стал поиск кандидатуры на роль Джона Коффи. И тогда <a href="/name/110/" class="all">Брюс Уиллис</a> посоветовал продюсерам обратить внимание на <a href="/name/677/" class="all">Майкла Кларка Дункана</a>, вместе с которым именитый актер принимал участие в съемках «<a href="/film/2941/" class="all">Армагеддона</a>».',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'Актеру <a href="/name/12761/" class="all">Дагу Хатчинсону</a>, исполнившему роль Перси, достались самые скрипучие ботинки, которые он когда-либо видел и слышал. Даг посчитал это обстоятельство приятным подарком судьбы – столь скрипучая обувь прекрасно дополняла омерзительный характер его персонажа.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'Инициалы Джона Коффи (J. C.), как писал сам <a href="/name/24263/" class="all">Кинг</a>, соответствуют инициалам Иисуса Христа (англ. Jesus Christ).',
      type: 'FACT',
      spoiler: false,
    },
    {
      value: 'Съёмки проходили в США, в штатах Северная Каролина и Теннесси.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'В фильме снялись сразу тридцать мышей, которые играют Мистера Джинглса. Все мыши были названы в честь актёров и членов съёмочной группы.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'На момент съемок фильма актер <a href="/name/12761/" class="all">Даг Хатчисон</a> был старше своего персонажа (Пэрси Уэтмор) на 18 лет, а <a href="/name/21496/" class="all">Сэм Рокуэлл</a> (Дикий Билл Уортон) на 12 лет.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'В одном из эпизодов фильма можно увидеть, что на тюремном грузовике написано название штата, где находится тюрьма — Луизиана, в другом, когда Пол пришел в кабинет начальника тюрьмы, можно заметить на стене висящую карту штата.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'В то время, как мышонок ползёт по Зелёной миле, Перси Уэтмор, причёсывая волосы, насвистывает мелодию народной американской песни «Виселица» (Gallows Pole).',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'Сцена, где Делакруа читает журнал Weird Tales, является отсылкой к <a href="/name/83626/" class="all">Г. Ф. Лавкрафту</a>, творческим наследником и большим поклонником которого является <a href="/name/24263/" class="all">Стивен Кинг</a>. Именно в 1930-е вышли самые значимые произведения Лавкрафта, которые печатались в этом журнале.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        'Роль Пола Эджкомба изначально предлагали <a href="/name/6479/" class="all">Джону Траволте</a>, но тот отклонил предложение.',
      type: 'FACT',
      spoiler: false,
    },
    {
      value:
        '<a href="/name/24263/" class="all">Стивен Кинг</a> до самого конца написания книги не мог определиться, как закончится история для Джона Коффи — останется он жив или нет.',
      type: 'FACT',
      spoiler: true,
    },
    {
      value:
        '<a href="/name/677/" class="all">Дункан</a> очень смущался из-за того, что ему нужно схватить <a href="/name/9144/" class="all">Хэнкса</a> за пах, когда Коффи «лечит» Эджкомбу инфекцию. Чтобы преодолеть смущение Дункана, Хэнкс положил в штаны пустую бутылку.',
      type: 'FACT',
      spoiler: true,
    },
    {
      value:
        'Фильм, который Коффи смотрит перед казнью и который через много лет подталкивает Пола рассказать Элейн его историю, — классическая музыкальная комедия «<a href="/film/8325/" class="all">Цилиндр</a>» (1935).',
      type: 'FACT',
      spoiler: true,
    },
    {
      value:
        'Для того чтобы придать картине соответствующее настроение, все тюремные охранники были одеты в униформу, хотя в 1935 году в тюрьмах такого правила еще не существовало.',
      type: 'BLOOPER',
      spoiler: false,
    },
    {
      value:
        'На самом деле в штате Луизиана электрический стул стал способом казни лишь в 1941 году. В год, значащийся временем действия фильма — 1935 (в книге — 1932), осужденных преступников казнили путем повешения.',
      type: 'BLOOPER',
      spoiler: false,
    },
  ],
  genres: [
    {
      name: 'драма',
    },
    {
      name: 'фэнтези',
    },
    {
      name: 'криминал',
    },
  ],
  countries: [
    {
      name: 'США',
    },
  ],
  videos: {
    trailers: [
      {
        url: 'https://www.youtube.com/embed/Bg7epsq0OIQ',
        name: 'Official Trailer',
        site: 'youtube',
        type: 'TRAILER',
      },
      {
        url: 'https://www.youtube.com/embed/TODt_q-_4C4',
        name: 'Зеленая миля (1999) — русский трейлер',
        site: 'youtube',
        type: 'TRAILER',
      },
    ],
    teasers: [],
  },
  seasonsInfo: [],
  persons: [
    {
      id: 9144,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_9144.jpg',
      name: 'Том Хэнкс',
      enName: 'Tom Hanks',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 12759,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_12759.jpg',
      name: 'Дэвид Морс',
      enName: 'David Morse',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 22527,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_22527.jpg',
      name: 'Бонни Хант',
      enName: 'Bonnie Hunt',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 677,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_677.jpg',
      name: 'Майкл Кларк Дункан',
      enName: 'Michael Clarke Duncan',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 20664,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_20664.jpg',
      name: 'Джеймс Кромуэлл',
      enName: 'James Cromwell',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 8989,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_8989.jpg',
      name: 'Майкл Джитер',
      enName: 'Michael Jeter',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 1130,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1130.jpg',
      name: 'Грэм Грин',
      enName: 'Graham Greene',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 12761,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_12761.jpg',
      name: 'Даг Хатчисон',
      enName: 'Doug Hutchison',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 21496,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_21496.jpg',
      name: 'Сэм Рокуэлл',
      enName: 'Sam Rockwell',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 7370,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_7370.jpg',
      name: 'Барри Пеппер',
      enName: 'Barry Pepper',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 24264,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24264.jpg',
      name: 'Джеффри ДеМанн',
      enName: 'Jeffrey DeMunn',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 3420,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_3420.jpg',
      name: 'Патриша Кларксон',
      enName: 'Patricia Clarkson',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 22209,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_22209.jpg',
      name: 'Гарри Дин Стэнтон',
      enName: 'Harry Dean Stanton',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 24265,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24265.jpg',
      name: 'Даббс Грир',
      enName: 'Dabbs Greer',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 24266,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24266.jpg',
      name: 'Ив Брент',
      enName: 'Eve Brent',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 24267,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24267.jpg',
      name: 'Уильям Сэдлер',
      enName: 'William Sadler',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 24268,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24268.jpg',
      name: 'Мак Майлз',
      enName: 'Mack Miles',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 24269,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24269.jpg',
      name: 'Рай Таско',
      enName: 'Rai Tasco',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 24270,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24270.jpg',
      name: 'Эдри Уорнер',
      enName: 'Edrie Warner',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 10082,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_10082.jpg',
      name: 'Паула Малкомсон',
      enName: 'Paula Malcomson',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 24271,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24271.jpg',
      name: 'Кристофер Джоэль Айвз',
      enName: 'Christopher Joel Ives',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 24272,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24272.jpg',
      name: 'Эванн Драклер',
      enName: 'Evanne Drucker',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 24273,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24273.jpg',
      name: 'Бэйли Драклер',
      enName: 'Bailey Drucker',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 24274,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24274.jpg',
      name: 'Брайан Либби',
      enName: 'Brian Libby',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 13487,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_13487.jpg',
      name: 'Брент Бриско',
      enName: 'Brent Briscoe',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 24275,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24275.jpg',
      name: 'Билл МакКинни',
      enName: 'Bill McKinney',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 3100,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_3100.jpg',
      name: 'Гэри Синиз',
      enName: 'Gary Sinise',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 24276,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24276.jpg',
      name: 'Рэйчел Сингер',
      enName: 'Rachel Singer',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 24277,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24277.jpg',
      name: 'Скотти Левенуорф',
      enName: 'Scotty Leavenworth',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 24278,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24278.jpg',
      name: 'Кэтлин Левенуорф',
      enName: 'Katelyn Leavenworth',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 15235,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_15235.jpg',
      name: 'Билл Грэттон',
      enName: 'Bill Gratton',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 24279,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24279.jpg',
      name: 'Ди Крокстон',
      enName: 'Dee Croxton',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 660035,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_660035.jpg',
      name: 'Ребекка Клингер',
      enName: 'Rebecca Klingler',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 24280,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24280.jpg',
      name: 'Гари Имхофф',
      enName: 'Gary Imhoff',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 20718,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_20718.jpg',
      name: 'Ван Эпперсон',
      enName: 'Van Epperson',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 24281,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24281.jpg',
      name: 'Дэвид Э. Браунинг',
      enName: 'David E. Browning',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 154895,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_154895.jpg',
      name: 'Фред Астер',
      enName: 'Fred Astaire',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 724791,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_724791.jpg',
      name: 'Томми Барнс',
      enName: 'Tommy Barnes',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 1967572,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1967572.jpg',
      name: 'Билл Крэддок',
      enName: 'Bill Craddock',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 1586213,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1586213.jpg',
      name: 'Кристофер Гринвуд',
      enName: 'Christopher Greenwood',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 1451292,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1451292.jpg',
      name: 'Уэс Холл',
      enName: 'Rev. Wes Hall',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 967709,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_967709.jpg',
      name: 'Дэниэл Д. Харрис',
      enName: 'Daniel D. Harris',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 356,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_356.jpg',
      name: 'Фил Хоун',
      enName: 'Phil Hawn',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 1451,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1451.jpg',
      name: 'Джуди Херрера',
      enName: 'Jude Herrera',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 736956,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_736956.jpg',
      name: 'Тед Холлис',
      enName: 'Ted Hollis',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 379898,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_379898.jpg',
      name: 'Дон Лэнгли',
      enName: 'Don Langley',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 751695,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_751695.jpg',
      name: 'Роберт Мэлоун',
      enName: 'Robert Malone',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 4321465,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_4321465.jpg',
      name: 'Арнольд Монти',
      enName: 'Arnold Montey',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 154905,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_154905.jpg',
      name: 'Джинджер Роджерс',
      enName: 'Ginger Rogers',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 152828,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_152828.jpg',
      name: 'Гарт Шоу',
      enName: 'Garth Shaw',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 677263,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_677263.jpg',
      name: 'Тим Смит',
      enName: 'Tim Smith',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 591747,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_591747.jpg',
      name: 'Той Спирс',
      enName: 'Toy Spears',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 3889715,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_3889715.jpg',
      name: 'Джаред Стовэлл',
      enName: 'Jared Stovall',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 1670063,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1670063.jpg',
      name: 'Дора Тейт',
      enName: 'Dora Tate',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 1670066,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1670066.jpg',
      name: 'Сэмюэл Тейт',
      enName: 'Samual Tate',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 3483,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_3483.jpg',
      name: 'Тодд Томпсон',
      enName: 'Todd Thompson',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 24282,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24282.jpg',
      name: 'Джеймс Маршалл Волчок',
      enName: 'James Marshall Wolchok',
      profession: 'актеры',
      enProfession: 'actor',
    },
    {
      id: 608629,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_608629.jpg',
      name: 'Томас Ньюман',
      enName: 'Thomas Newman',
      profession: 'композиторы',
      enProfession: 'composer',
    },
    {
      id: 137866,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_137866.jpg',
      name: 'Теренс Марш',
      enName: 'Terence Marsh',
      profession: 'художники',
      enProfession: 'designer',
    },
    {
      id: 1999763,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1999763.jpg',
      name: 'Уильям Крус',
      enName: 'William Cruse',
      profession: 'художники',
      enProfession: 'designer',
    },
    {
      id: 1107287,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1107287.jpg',
      name: 'Керин Вагнер',
      enName: 'Karyn Wagner',
      profession: 'художники',
      enProfession: 'designer',
    },
    {
      id: 1997462,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1997462.jpg',
      name: 'Майкл Сейртон',
      enName: 'Michael Seirton',
      profession: 'художники',
      enProfession: 'designer',
    },
    {
      id: 24262,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24262.jpg',
      name: 'Фрэнк Дарабонт',
      enName: 'Frank Darabont',
      profession: 'режиссеры',
      enProfession: 'director',
    },
    {
      id: 1986116,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1986116.jpg',
      name: 'Ричард Фрэнсис-Брюс',
      enName: 'Richard Francis-Bruce',
      profession: 'монтажеры',
      enProfession: 'editor',
    },
    {
      id: 609246,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_609246.jpg',
      name: 'Дэвид Тэттерсолл',
      enName: 'David Tattersall',
      profession: 'операторы',
      enProfession: 'operator',
    },
    {
      id: 24262,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24262.jpg',
      name: 'Фрэнк Дарабонт',
      enName: 'Frank Darabont',
      profession: 'продюсеры',
      enProfession: 'producer',
    },
    {
      id: 24283,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24283.jpg',
      name: 'Дэвид Валдес',
      enName: 'David Valdes',
      profession: 'продюсеры',
      enProfession: 'producer',
    },
    {
      id: 1616407,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1616407.jpg',
      name: 'Всеволод Кузнецов',
      enName: null,
      profession: 'актеры дубляжа',
      enProfession: 'voice_actor',
    },
    {
      id: 261729,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_261729.jpg',
      name: 'Владимир Антоник',
      enName: null,
      profession: 'актеры дубляжа',
      enProfession: 'voice_actor',
    },
    {
      id: 269650,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_269650.jpg',
      name: 'Любовь Германова',
      enName: null,
      profession: 'актеры дубляжа',
      enProfession: 'voice_actor',
    },
    {
      id: 231569,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_231569.jpg',
      name: 'Валентин Голубенко',
      enName: null,
      profession: 'актеры дубляжа',
      enProfession: 'voice_actor',
    },
    {
      id: 36411,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_36411.jpg',
      name: 'Александр Белявский',
      enName: null,
      profession: 'актеры дубляжа',
      enProfession: 'voice_actor',
    },
    {
      id: 298213,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_298213.jpg',
      name: 'Дмитрий Полонский',
      enName: null,
      profession: 'актеры дубляжа',
      enProfession: 'voice_actor',
    },
    {
      id: 1656504,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1656504.jpg',
      name: 'Александр Коврижных',
      enName: null,
      profession: 'актеры дубляжа',
      enProfession: 'voice_actor',
    },
    {
      id: 224608,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_224608.jpg',
      name: 'Борис Шувалов',
      enName: null,
      profession: 'актеры дубляжа',
      enProfession: 'voice_actor',
    },
    {
      id: 277027,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_277027.jpg',
      name: 'Андрей Градов',
      enName: null,
      profession: 'актеры дубляжа',
      enProfession: 'voice_actor',
    },
    {
      id: 1646298,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1646298.jpg',
      name: 'Олег Вирозуб',
      enName: null,
      profession: 'актеры дубляжа',
      enProfession: 'voice_actor',
    },
    {
      id: 280829,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_280829.jpg',
      name: 'Юрий Маляров',
      enName: null,
      profession: 'актеры дубляжа',
      enProfession: 'voice_actor',
    },
    {
      id: 1649885,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1649885.jpg',
      name: 'Лариса Некипелова',
      enName: null,
      profession: 'актеры дубляжа',
      enProfession: 'voice_actor',
    },
    {
      id: 1604859,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1604859.jpg',
      name: 'Борис Токарев',
      enName: null,
      profession: 'актеры дубляжа',
      enProfession: 'voice_actor',
    },
    {
      id: 245767,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_245767.jpg',
      name: 'Всеволод Абдулов',
      enName: null,
      profession: 'актеры дубляжа',
      enProfession: 'voice_actor',
    },
    {
      id: 1159780,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1159780.jpg',
      name: 'Александр Груздев',
      enName: null,
      profession: 'актеры дубляжа',
      enProfession: 'voice_actor',
    },
    {
      id: 1492686,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1492686.jpg',
      name: 'Андрей Ярославцев',
      enName: null,
      profession: 'актеры дубляжа',
      enProfession: 'voice_actor',
    },
    {
      id: 257034,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_257034.jpg',
      name: 'Валерий Сторожик',
      enName: null,
      profession: 'актеры дубляжа',
      enProfession: 'voice_actor',
    },
    {
      id: 281059,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_281059.jpg',
      name: 'Александр Рыжков',
      enName: null,
      profession: 'актеры дубляжа',
      enProfession: 'voice_actor',
    },
    {
      id: 24262,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24262.jpg',
      name: 'Фрэнк Дарабонт',
      enName: 'Frank Darabont',
      profession: 'редакторы',
      enProfession: 'writer',
    },
    {
      id: 24263,
      photo: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_24263.jpg',
      name: 'Стивен Кинг',
      enName: 'Stephen King',
      profession: 'редакторы',
      enProfession: 'writer',
    },
  ],
  lists: [],
  typeNumber: 1,
  alternativeName: 'The Green Mile',
  enName: null,
  names: [
    {
      name: 'Зеленая миля',
    },
    {
      name: 'The Green Mile',
    },
    {
      name: 'Roheline miil',
      language: 'EE',
      type: null,
    },
    {
      name: "Stephen King's The Green Mile",
      language: 'US',
      type: 'complete title',
    },
    {
      name: 'Gurîn Mairu',
      language: 'JP',
      type: null,
    },
    {
      name: 'To prasino mili',
      language: 'GR',
      type: null,
    },
    {
      name: 'un milagro inesperado: la milla verde',
      language: 'MX',
      type: null,
    },
    {
      name: '綠里奇蹟',
      language: 'HK',
      type: null,
    },
    {
      name: 'Зелена миља',
      language: 'RS',
      type: null,
    },
    {
      name: 'Yeşil Yol',
      language: 'TR',
      type: null,
    },
  ],
  updatedAt: '2023-04-06T16:55:55.157Z',
  ratingMpaa: 'r',
  shortDescription:
    'В тюрьме для смертников появляется заключенный с божественным даром. Мистическая драма по роману Стивена Кинга',
  technology: {
    hasImax: false,
    has3D: false,
  },
  ticketsOnSale: false,
  imagesInfo: {
    framesCount: 0,
  },
  sequelsAndPrequels: [],
  similarMovies: [
    {
      id: 326,
      name: 'Побег из Шоушенка',
      enName: null,
      alternativeName: 'The Shawshank Redemption',
      type: 'movie',
      poster: {
        url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/orig',
        previewUrl:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/x1000',
      },
    },
    {
      id: 448,
      name: 'Форрест Гамп',
      enName: null,
      alternativeName: 'Forrest Gump',
      type: 'movie',
      poster: {
        url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/3560b757-9b95-45ec-af8c-623972370f9d/orig',
        previewUrl:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/3560b757-9b95-45ec-af8c-623972370f9d/x1000',
      },
    },
    {
      id: 723,
      name: 'Планета Ка-Пэкс',
      enName: null,
      alternativeName: 'K-PAX',
      type: 'movie',
      poster: {
        url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/83aeba81-a956-4e70-b19d-40a4db1284d9/orig',
        previewUrl:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/83aeba81-a956-4e70-b19d-40a4db1284d9/x1000',
      },
    },
    {
      id: 738,
      name: 'Жизнь Дэвида Гейла',
      enName: null,
      alternativeName: 'The Life of David Gale',
      type: 'movie',
      poster: {
        url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4483445/09a852e0-394e-457e-b637-880cadc38dd2/orig',
        previewUrl:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/4483445/09a852e0-394e-457e-b637-880cadc38dd2/x1000',
      },
    },
    {
      id: 279880,
      name: 'Подмена',
      enName: null,
      alternativeName: 'Changeling',
      type: 'movie',
      poster: {
        url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/295dc81a-a86f-4246-872c-6b5bc75c74f0/orig',
        previewUrl:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/295dc81a-a86f-4246-872c-6b5bc75c74f0/x1000',
      },
    },
    {
      id: 357,
      name: 'Убить пересмешника',
      enName: null,
      alternativeName: 'To Kill a Mockingbird',
      type: 'movie',
      poster: {
        url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/46b80991-7b6f-484b-b6dd-8cd2cd6ccbe9/orig',
        previewUrl:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/46b80991-7b6f-484b-b6dd-8cd2cd6ccbe9/x1000',
      },
    },
    {
      id: 273302,
      name: 'Мгла',
      enName: null,
      alternativeName: 'The Mist',
      type: 'movie',
      poster: {
        url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/e365ec59-b8ba-4d2c-b068-0c472832a47e/orig',
        previewUrl:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/e365ec59-b8ba-4d2c-b068-0c472832a47e/x1000',
      },
    },
    {
      id: 2271,
      name: 'Пудра',
      enName: null,
      alternativeName: 'Powder',
      type: 'movie',
      poster: {
        url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/feb20b68-6f88-433c-a6b2-44f30304ff66/orig',
        previewUrl:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/feb20b68-6f88-433c-a6b2-44f30304ff66/x1000',
      },
    },
    {
      id: 646,
      name: 'Танцующая в темноте',
      enName: null,
      alternativeName: 'Dancer in the Dark',
      type: 'movie',
      poster: {
        url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/355a7fde-66df-42e4-9360-ee8400221203/orig',
        previewUrl:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/355a7fde-66df-42e4-9360-ee8400221203/x1000',
      },
    },
    {
      id: 7363,
      name: 'Мертвец идет',
      enName: null,
      alternativeName: 'Dead Man Walking',
      type: 'movie',
      poster: {
        url: 'https://avatars.mds.yandex.net/get-kinopoisk-image/4486454/7fcb3641-786c-4f27-9471-429caca81c81/orig',
        previewUrl:
          'https://avatars.mds.yandex.net/get-kinopoisk-image/4486454/7fcb3641-786c-4f27-9471-429caca81c81/x1000',
      },
    },
  ],
  ageRating: 16,
  logo: {
    url: 'https://avatars.mds.yandex.net/get-ott/239697/2a0000016f12f1eb8870b609ee94313774b2/orig',
  },
  watchability: {
    items: [
      {
        name: 'Okko',
        logo: {
          url: 'https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig',
        },
        url: 'https://okko.tv/movie/the-green-mile?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed',
      },
      {
        name: 'Иви',
        logo: {
          url: 'https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig',
        },
        url: 'https://www.ivi.ru/watch/90283?utm_source=yandex&utm_medium=wizard',
      },
      {
        name: 'PREMIER',
        logo: {
          url: 'https://avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig',
        },
        url: 'https://premier.one/show/16086?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed',
      },
      {
        name: 'Wink',
        logo: {
          url: 'https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig',
        },
        url: 'https://wink.ru/media_items/54962552?utm_source=yandex&utm_medium=koldunschick&utm_content=name',
      },
      {
        name: 'viju',
        logo: {
          url: 'https://avatars.mds.yandex.net/get-ott/224348/8b10c84b-e1bb-4493-9bc4-6ee56554403a/orig',
        },
        url: 'https://viju.ru/filmy/zelenaya-milya?utm_campaign=yandex_content_integration&utm_medium=affiliate&utm_source=yandex',
      },
      {
        name: 'Смотрёшка',
        logo: {
          url: 'https://avatars.mds.yandex.net/get-ott/236744/c88e652e-2eb1-472d-b636-a266364dbf58/orig',
        },
        url: 'https://smotreshka.tv/vod/vipplay/619c836bbb003f90030b40bd?utm_source=yandex_search&utm_campaign=yandex_feed&utm_term=viju&utm_content=Viju',
      },
      {
        name: 'НТВ-ПЛЮС Онлайн ТВ',
        logo: {
          url: 'https://avatars.mds.yandex.net/get-ott/223007/c6b9b3d8-3258-4394-9cae-c86fdb56a0c6/orig',
        },
        url: 'https://ntvplus.tv/watch/23303-zelenaya-milya?utm_source=kinopoisk',
      },
      {
        name: '24ТВ',
        logo: {
          url: 'https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig',
        },
        url: 'https://24h.tv/contents/1999-the-green-mile-546324607066440278',
      },
    ],
  },
  top10: null,
  top250: 1,
};

describe('CardModal component', () => {
  it('render', () => {
    render(
      <CardModal
        movie={testMovie as unknown as Card}
        closeModal={(isOpen) => console.log(isOpen)}
      />
    );

    expect(screen.getByText('The Green Mile'));
  });
});
