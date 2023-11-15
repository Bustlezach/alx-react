import { shallow, mount } from "enzyme";
import React from "react";
import Footer from "./Footer";
import AppContext from "../App/AppContext";
import { user, logOut } from "../App/AppContext";



const wrapper = shallow(<Footer />);
describe('Footer components', () => {
  it('renders without crashing', () => {
    const result = wrapper.find('.App-footer').exists();
    expect(result).toBe(true);
  });
  it('renders the text “Copyright”', () => {
    const result = wrapper.find('.App-footer p').text();
    expect(result).toContain('Copyright');
  });
  it("verify that the link is not displayed when the user is logged out within the context", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("div.footer a")).toHaveLength(0);
  });

  it("verify that the link is displayed when the user is logged in within the context", () => {
    const wrapper = mount(
      <AppContext.Provider value={{...user, isLoggedin: true}}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find("div.footer a")).toHaveLength(1);
    expect(wrapper.find("div.footer a").text()).toEqual("Contact us");
  });
});