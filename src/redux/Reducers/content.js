import constants from '../Constants/content'

const initalState = {
  blogPosts: [],
  isLoading: false,
  error: null
}

export default (state = initalState, action) => {
  switch (action.type) {
    case constants.FETCH_BLOG_POSTS_STARTED:
      return {
        ...state,
        isLoading: true
      }
    case constants.FETCH_BLOG_POSTS_COMPLETED:
      const blogPosts = action.payload.data.items;
      return {
        ...state,
        isLoading: false,
        blogPosts: [...state.blogPosts, ...blogPosts]
      }
    case constants.FETCH_BLOG_POSTS_FAILED:
      return {
        ...state,
        error: null
      }
    default:
      return state
  }
}