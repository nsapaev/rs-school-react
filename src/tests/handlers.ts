import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://swapi.dev/api/people/', async () => {
    return HttpResponse.json({
      count: 1,
      results: [
        {
          name: 'Luke Skywalker',
          height: '172',
          mass: '77',
          hair_color: 'blond',
          skin_color: 'fair',
          eye_color: 'blue',
          birth_year: '19BBY',
          gender: 'male',
        },
      ],
    });
  }),
];
