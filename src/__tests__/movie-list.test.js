import React from 'react';
import MovieList from '../movie-list';
import renderer from 'react-test-renderer';
import data from '../__mocks__/omdb-api-response';

describe('MovieList', () => {
  it('renders only a container if no movies passed in', () => {
    const tree = renderer
      .create(<MovieList movies={[]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a movie item', () => {
    const tree = renderer
      .create(<MovieList movies={[data]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders multiple movie items', () => {
    const secondItem = {
      ...data,
      imdbID: 'tt0848229'
    };
    const tree = renderer
      .create(<MovieList movies={[data, secondItem]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
