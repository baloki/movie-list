import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import data from '../__mocks__/omdb-api-response';
import AddTitle from '../add-title';

Enzyme.configure({ adapter: new Adapter() });

describe('AddTitle', () => {
  beforeAll(() => {
    fetch.mockResponse(() => data);
  });
  // it('fires the parent event when the submit button is clicked', () => {
  //   const mockCallBack = jest.fn();
  //
  //   const component = shallow((<ApiKey submitMethod={mockCallBack} />));
  //   component.find('button').simulate('click');
  //   expect(mockCallBack.mock.calls.length).toEqual(1);
  // });

  it('renders correctly initially', () => {
    const mockCallBack = jest.fn();
    const mockStateUpdate = jest.fn();

    const tree = renderer
      .create(
        <AddTitle
          addMovie={mockCallBack}
          updateParentState={mockStateUpdate}
          apiKey="abc123"
          currentSearchResult={{}}
          open={true}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('it renders a button on a successfuly search', () => {
  //   const mockCallBack = jest.fn();
  //   const mockStateUpdate = jest.fn();
  //
  //   const tree = mount((
  //       <Search
  //         addMovie={mockCallBack}
  //         updateParentState={mockStateUpdate}
  //         apiKey="abc123"
  //         currentSearchResult={{}}
  //       />
  //     ));
  //   const searchField = tree.find('input').at(1);
  //   searchField.instance().value("Avengers");
  //   searchField.simulate("change");
  //   expect(tree.toJson()).toMatchSnapshot();
  // });
});
