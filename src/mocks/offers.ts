import { TPreviewOffers, TDetailOffers } from '../types/offer';

export const previewOffers: TPreviewOffers = [
  {
    'id': 'f523f3e1-df8c-49b2-9f8a-0fd2b8d4cb6e',
    'title': 'Tile House',
    'type': 'apartment',
    'price': 498,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.4
  },
  {
    'id': '962cb559-ee47-4b24-82d7-33622b1a21be',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'room',
    'price': 188,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 4.4
  },
  {
    'id': '10f6512f-dd63-494a-85eb-a27ad26abec8',
    'title': 'Canal View Prinsengracht',
    'type': 'room',
    'price': 146,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 1.8
  },
  {
    'id': '268bdfcb-0389-4ac6-bc2d-7d70bf0375d9',
    'title': 'Wood and stone place',
    'type': 'hotel',
    'price': 409,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 3.4
  },
  {
    'id': 'dcb35623-b95a-4f7a-8fe6-7d5dbcd54b1e',
    'title': 'Canal View Prinsengracht',
    'type': 'house',
    'price': 576,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.950361,
      'longitude': 6.961974,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 2.8
  },
  {
    'id': 'd99592e1-1524-4067-9517-4ee3a4b25188',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'hotel',
    'price': 260,
    'previewImage': 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.932361,
      'longitude': 6.937974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 5
  }
];

export const detailOffers: TDetailOffers = [
  {
    'id': 'f523f3e1-df8c-49b2-9f8a-0fd2b8d4cb6e',
    'title': 'Tile House',
    'type': 'apartment',
    'price': 498,
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.868610000000004,
      'longitude': 2.342499,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 3.4,
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'bedrooms': 3,
    'goods': [
      'Heating'
    ],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
      'isPro': false
    },
    'images': [
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg'
    ],
    'maxAdults': 4
  },
  {
    'id': '962cb559-ee47-4b24-82d7-33622b1a21be',
    'title': 'Penthouse, 4-5 rooms + 5 balconies',
    'type': 'room',
    'price': 188,
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.858610000000006,
      'longitude': 2.330499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 4.4,
    'description': '2A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'bedrooms': 5,
    'goods': [
      'Heating',
      'Washing machine',
      'Kitchen',
      'Fridge'
    ],
    'host': {
      'name': 'Oliver Conner2',
      'avatarUrl': 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
      'isPro': true
    },
    'images': [
      'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg'
    ],
    'maxAdults': 6
  },
  {
    'id': '10f6512f-dd63-494a-85eb-a27ad26abec8',
    'title': 'Canal View Prinsengracht',
    'type': 'room',
    'price': 146,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.834610000000005,
      'longitude': 2.335499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 1.8,
    'description': '3A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'bedrooms': 3,
    'goods': [
      'Heating'
    ],
    'host': {
      'name': '3Oliver Conner',
      'avatarUrl': 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
      'isPro': false
    },
    'images': [
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg'
    ],
    'maxAdults': 4
  },
  {
    'id': '268bdfcb-0389-4ac6-bc2d-7d70bf0375d9',
    'title': 'Wood and stone place',
    'type': 'hotel',
    'price': 409,
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 48.85761,
      'longitude': 2.358499,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 3.4,
    'description': '4A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'bedrooms': 3,
    'goods': [
      'Heating'
    ],
    'host': {
      'name': '4Oliver Conner',
      'avatarUrl': 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
      'isPro': true
    },
    'images': [
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/8.jpg'
    ],
    'maxAdults': 4
  },
  {
    'id': 'dcb35623-b95a-4f7a-8fe6-7d5dbcd54b1e',
    'title': 'Canal View Prinsengracht',
    'type': 'house',
    'price': 576,
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.950361,
      'longitude': 6.961974,
      'zoom': 16
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 2.8,
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'bedrooms': 3,
    'goods': [
      'Heating'
    ],
    'host': {
      'name': 'Oliver Conner',
      'avatarUrl': 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
      'isPro': false
    },
    'images': [
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg'
    ],
    'maxAdults': 4
  },
  {
    'id': 'd99592e1-1524-4067-9517-4ee3a4b25188',
    'title': 'Beautiful & luxurious apartment at great location',
    'type': 'hotel',
    'price': 260,
    'city': {
      'name': 'Cologne',
      'location': {
        'latitude': 50.938361,
        'longitude': 6.959974,
        'zoom': 13
      }
    },
    'location': {
      'latitude': 50.932361,
      'longitude': 6.937974,
      'zoom': 16
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 5,
    'description': '5A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'bedrooms': 3,
    'goods': [
      'Heating'
    ],
    'host': {
      'name': '5Oliver Conner',
      'avatarUrl': 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
      'isPro': true
    },
    'images': [
      'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg'
    ],
    'maxAdults': 4
  }
];
