import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import App from '../App';

Enzyme.configure({ adapter: new Adapter() });


describe('<APP />', () => {
  describe('TEST RENDER COMPONENT', () => {
    test('renders the component', () => {
      const wrapper = mount(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      );

      expect(wrapper.exists()).toBe(true);
    });
  });
});
