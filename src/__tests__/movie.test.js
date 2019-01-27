import React from 'react';
import Movie from '../movie';
import renderer from 'react-test-renderer';
import data from '../__mocks__/omdb-api-response';

describe('Movie', () => {
  it('renders nothing if no title is passed in', () => {
    const tree = renderer
      .create(<Movie />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a movie item', () => {
    const tree = renderer
      .create(<Movie {...data} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
