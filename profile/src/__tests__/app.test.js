// import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'



// describe('With React Testing Library', () => {
//   const initialState = {output:10}
//   const mockStore = configureStore()
//   let store,wrapper

//   it('Shows "Hello world!"', () => {
//     store = mockStore(initialState)
//     const { getByText } = render(<Provider store={store}><App /></Provider>)

//     expect(getByText('akash')).not.toBeNull()
//   })
// })


it('renders without crashing', () => {
    let store,wrapper
    const mockStore = configureStore()
    const div = document.createElement('div');
    const initialState = {output:10}
    store = mockStore(initialState)
    ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  });