export function selectBook(book) {
  // selectBook is an actionCreation it needs to return an action.
  // an object iwht a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
