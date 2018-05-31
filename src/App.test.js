import React from 'react';
import ReactDOM from 'react-dom';
import App, { Title } from './App';
import TestRenderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('check App component type', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);
  const result = renderer.getRenderOutput();
  expect(result.type).toBe('div');
});

it('check App component title type', () => {
  const testRenderer = TestRenderer.create(<App />);
  const testInstance = testRenderer.root;

  expect(typeof testInstance.findByType(Title).props.title).toBe('string');
});
