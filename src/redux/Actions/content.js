import constants from '../Constants/content';
import axios from 'axios';
import { contentful } from '../../_config/common';
import queryString from 'query-string';

const fetchContent = ({ ...otherParams }) => {
  const { host, space_id, environment } = contentful;

  // Paramameters used to specify what to fetch from contentful
  const queryParams = {
    access_token: contentful.access_token,
    ...otherParams
  }

  const query = queryString.stringify(queryParams);

  const url = `${host}/spaces/${space_id}/environments/${environment}/entries?${query}`;
  return axios.get(url);
}

// FETCHING Blog posts
const fetchBlogPostsStart = () => {
  return {
    type: constants.FETCH_BLOG_POSTS_STARTED,
  }
};
const fetchBlogPostsComplete = (payload) => {
  return {
    type: constants.FETCH_BLOG_POSTS_COMPLETED,
    payload
  }
};
const fetchBlogPostsFailure = () => {
  return {
    type: constants.FETCH_BLOG_POSTS_FAILED
  }
};

export const fetchBlogPosts = () => {
  const queryParams = {
    select: 'sys.createdAt,fields',
    content_type: 'blogPost',
    order: '-sys.createdAt',
    limit: 200
  }

  return dispatch => {
    dispatch(fetchBlogPostsStart())
    return fetchContent(queryParams)
      .then(res => dispatch(fetchBlogPostsComplete(res)))
      .catch(() => dispatch(fetchBlogPostsFailure()))
  }
}