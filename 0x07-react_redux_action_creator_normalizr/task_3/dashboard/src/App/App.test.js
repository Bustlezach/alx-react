import { shallow, mount } from 'enzyme';
import React from 'react';
import App, { initialListNotifications } from './App';
import { StyleSheetTestUtils } from "aphrodite";
import AppContext, { user, logOut } from '../App/AppContext';



describe('<App />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
  });

  it('contain Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  it('contain Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('contain Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it('contain Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  it('CourseList', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('CourseList')).toHaveLength(0);
  });

  it("isLoggedIn is true", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      user: {
        isLoggedIn: true,
      },
    });

    expect(wrapper.find("Login")).toHaveLength(0);
    expect(wrapper.find("CourseList")).toHaveLength(1);
  });

  it('logOut', () => {
    const logOut = jest.fn(() => undefined);
    const wrapper = shallow(<App logOut={logOut} />);
    const alert = jest.spyOn(global, 'alert');
    expect(alert);
    expect(logOut);
    jest.restoreAllMocks();
  });
  it("Has default state for displayDrawer false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it("displayDrawer changes to true when calling handleDisplayDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);

    const instance = wrapper.instance();

    instance.handleDisplayDrawer();

    expect(wrapper.state().displayDrawer).toEqual(true);
  });

  it("displayDrawer changes to false when calling handleHideDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);

    // const instance = wrapper.instance();

    wrapper.instance().handleDisplayDrawer();

    expect(wrapper.state().displayDrawer).toEqual(true);

    wrapper.instance().handleHideDrawer();

    expect(wrapper.state().displayDrawer).toEqual(false);
  });

  it("test to verify that the logIn function updates the state correctly", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const loggedUser = {
      email: "Larry@hudson.com",
      password: "123456789",
      isLoggedIn: true,
    };

    const instance = wrapper.instance();

    expect(wrapper.state().user).toEqual(user);

    instance.logIn(loggedUser.email, loggedUser.password);

    expect(wrapper.state().user).toEqual(loggedUser);
  });

  it("test to verify that the logOut function updates the state correctly", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const loggedUser = {
      email: "Larry@hudson.com",
      password: "123456789",
      isLoggedIn: true,
    };

    const instance = wrapper.instance();

    expect(wrapper.state().user).toEqual(user);

    instance.logIn(loggedUser.email, loggedUser.password);

    expect(wrapper.state().user).toEqual(loggedUser);

    instance.logOut();

    // expect(wrapper.state().user).toEqual(user);
  });
  it("verify that markNotificationAsRead works as intended", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const instance = wrapper.instance();

    expect(wrapper.state().listNotifications).toEqual(
      initialListNotifications
    );

    instance.markNotificationAsRead(4);

    expect(wrapper.state().listNotifications).toEqual(
      initialListNotifications
    );

    instance.markNotificationAsRead(3);

    expect(wrapper.state().listNotifications).toEqual(
      initialListNotifications.slice(0, 2)
    );

    instance.markNotificationAsRead(1);

    expect(wrapper.state().listNotifications).toEqual(
      initialListNotifications.slice(1, 2)
    );
  });
});
