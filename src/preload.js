import { fetchBoxes } from './redux/Actions/app';
import { fetchBlogPosts } from './redux/Actions/content';

export default (store) => {
  // store.dispatch(fetchBoxes())
  store.dispatch(fetchBlogPosts())
  // 1. async fetch all blogposts from contentful with axios
  // 2. dispatch response as an action storing all information about the blogposts to the store.

  // dispatch all
}