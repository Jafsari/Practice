import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Button adds text after click', () => {
    //Render the App component
    const wrapper = shallow(<App />);
    //check to see if the div's text is empty
    expect(wrapper.find('.empty').text()).toEqual('')
    //Select the button
    wrapper.find('.button').simulate('click');
    // after the click event, I expect the new text of the app
    expect(wrapper.find('.text').text()).toEqual('The shortest distance from idea to execution. Automate your development process quickly, safely, and at scale.');
  });
