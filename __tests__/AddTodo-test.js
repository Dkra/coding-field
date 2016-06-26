jest.unmock('../app/App')

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils'
import App from '../app/App'

describe('App', () => {

  it('empty input after add todo', () => {
    const input = TestUtils.renderIntoDocument(
      <App />
    )

    const inputNode = ReactDOM.findDOMNode(input)

    expect(inputNode.value).toEqual('')

    TestUtils.Simulate.submit(
      TestUtils.findRenderedDOMComponentWithTag(input, 'input')
    )

    expect(inputNode).toEqual('')

  })

})
