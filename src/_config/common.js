
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