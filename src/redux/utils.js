/**
 * Helper functions to simplify network requests
 */

import axios from 'axios';
import { boxinatorBackend } from '../_config/common';

function NetworkException(data) {
  console.log('wtf err', data)
}

/**
 * 
 * @param {String} endpoint Specify api endpoint
 * @param {Object} options E.g "Method" such as POST/GET
 */
export const fetchJSON = (endpoint, options = {}) => {
  return axios({
    url: `${boxinatorBackend.host}${endpoint}`,
    ...options
  }).catch(error => {
    try {
      // Could perhaps display a fallback UI or log to an error logging service
      var errorJson = JSON.parse(error);
      throw new NetworkException(errorJson);
    } catch (err) {
      throw new NetworkException(error);
    }
  })
}

/** 
 * function for doing post requests
*/
export const post = (endpoint, data) => (
  fetchJSON(endpoint, {
    method: 'POST',
    data
  })
)

/** 
 * function for doing get requests
*/
export const get = endpoint => fetchJSON(endpoint);
