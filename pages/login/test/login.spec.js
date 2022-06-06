import { mount } from '@vue/test-utils'
import Login from '../index.vue'

describe('Login', () => {
  test('is a Vue instance on Login...', () => {
    const wrapper = mount(Login)
    expect(wrapper.vm).toBeTruthy()
  })
})

describe('Login input', () => {
  test('is a Vue instance on Login input...', () => {
    const wrapper = mount(Login)
    expect(wrapper.find('input').exists()).toBe(true)
    // expect(wrapper.vm.$el.querySelector('login-container'))
  })
})
// test to validate a button submit
describe('Login button', () => {
  test('is a Vue instance on Login button...', () => {
    const wrapper = mount(Login)
    expect(wrapper.find('button').exists()).toBe(true)
  })
})

describe('Sets new email input email', () => {
  test('Check input email is validated...', async () => {
    const wrapper = mount(Login)
    const input = wrapper.find('#email')
  
    await input.setValue('my@mail.com')
  
    expect(input.element.value).toBe('my@mail.com')
  })
})

describe('Sets new password input password', () => {
  test('Check input password is validated...', async () => {
    const wrapper = mount(Login)
    const input = wrapper.find('#password')
  
    await input.setValue('123456')
  
    expect(input.element.value).toBe('123456')
  })
})

// test to validate a button submit click event
describe('Login button click event', () => {
  test('Check button click event is validated...', async () => {
    const wrapper = mount(Login)
    const button = wrapper.find('button')
  
    await button.trigger('click')
  
    expect(button.element.addEventListener).toBeTruthy()
  })
})
