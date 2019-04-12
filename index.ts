import axios, {AxiosResponse} from 'axios';
import {from, of} from "rxjs/index";
import {concatAll, filter, first, groupBy, map, mergeMap, pluck, toArray} from "rxjs/internal/operators";


interface contact {
  id: string,
  name: string,
  address: string,
  gender: string,
  phone?: {
    mobile: string,
    home: string,
    office: string
  }
}

const dummyData: contact[] = [
  {
    id: 'Hax0r1',
    name: 'Hax0r',
    address: 'Seoul gangnam',
    gender: 'female',
  },
  {
    id: 'Gasd2',
    name: 'Kim',
    address: 'Seoul gangnam',
    gender: 'female',
  },
  {
    id: 'Gsad23asd',
    name: 'Woo',
    address: 'Seoul myeongdong',
    gender: 'female',
  },
  {
    id: 'Hw23',
    name: 'Kim',
    address: 'dongdaemun',
    gender: 'female',
  },
  {
    id: 'ASDC123',
    name: 'Lee',
    address: 'Seoul myeongdong',
    gender: 'female',
  },
];

const contacts$ = (gender: string) => {
  return from(axios.get('https://api.androidhive.info/contacts/')).pipe(
    map((response: AxiosResponse) => [
      ...response.data.contacts,
      ...dummyData
    ] as contact[]),
  );
};

contacts$('female').subscribe((contact: any) => {
  console.log('contact', contact);
});

