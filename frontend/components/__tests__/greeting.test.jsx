import React from 'react'
import Greeting from '../greeting/greeting'
import renderer from 'react-test-renderer'

test('Greeting renders', () => {
  const component = renderer.create(
    <Greeting />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
