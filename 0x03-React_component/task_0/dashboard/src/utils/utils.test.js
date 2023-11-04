import React from 'react';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


describe('Notifications Component', () => {
  it('renders current year', () => {
    const result = getFullYear();
    const currentYear = new Date().getFullYear();
    expect(result).toEqual(currentYear);
  });

  it('should return the correct string for getFooterCopy', () => {

    const resultTrue = getFooterCopy(true);
    const resultFalse = getFooterCopy(false);
    expect(resultTrue).toEqual('Holberton School');
    expect(resultFalse).toEqual('Holberton School main dashboard');
  });

  it('should return the correct string for getLatestNotification', () => {
    const result = getLatestNotification();
    expect(result).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
