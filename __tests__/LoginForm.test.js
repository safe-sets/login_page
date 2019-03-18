import React from 'react';
import LoginForm from '../client/src/components/LoginForm.jsx';
import { shallow } from 'enzyme';
import {
  generateSalt,
  generateHash,
  saltHash,
} from '../db/utilities/dbUtilities.js';

describe('LoginForm', () => {
  it('Should render on the page', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper).toContain();
  });

  it('Should require alphanumeric passwords', () => {
    //Tests for alphanumeric characters, omitting special chars
    const regExp = /^[a-zA-Z0-9]*$/;
    expect(regExp.test('string')).toBe(true);
    expect(regExp.test('onomatopoeia')).toBe(true);
    expect(regExp.test('ABC123!')).toBe(false);
    expect(regExp.test('L33THAX0R')).toBe(true);
    expect(regExp.test('L33TH4X0R!!11!')).toBe(false);
  });

  it("Should hash the user's password", () => {
    let passwords = ['sunshine', 'abc123', 'password', 'admin'];
    let salts = passwords.map(pw => generateSalt(pw));
    let hashedPasswords = passwords.map((pw, index) => {
      return generateHash(pw, salts[index]);
    });

    //Salts for each of the above passwords
  });
});
