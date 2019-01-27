import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import ApiKey from '../api-key';

Enzyme.configure({ adapter: new Adapter() });

describe('ApiKey', () => {
  it('fires the parent event when the submit button is clicked', () => {
    const mockCallBack = jest.fn();

    const component = shallow((<ApiKey submitMethod={mockCallBack} />));
    component.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('renders correctly', () => {
    const mockCallBack = jest.fn();

    const tree = renderer
      .create(<ApiKey submitMethod={mockCallBack} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
