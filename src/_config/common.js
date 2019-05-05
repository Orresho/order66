
//export const CURRENT_ENV = 'prod';
// export const CURRENT_ENV = 'dev';
export const CURRENT_ENV = 'local'; // temp

/**
 * Options for destination countries 
 */
export const DestinationCountries = [
  {
    label: 'Sweden',
    value: 'sweden'
  },
  {
    label: 'China',
    value: 'china'
  },
  {
    label: 'Brazil',
    value: 'brazil'
  },
  {
    label: 'Australia',
    value: 'australia'
  },
];

// Boxinator web api
export const boxinatorBackend = {
  host: CURRENT_ENV === 'prod' ?
    'some-prod-host' : CURRENT_ENV === 'dev' ?
      'some-dev-host' : 'http://localhost:8080'
}

export const contentful = {
  host: 'https://cdn.contentful.com',
  space_id: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  access_token: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  environment: 'master',
}