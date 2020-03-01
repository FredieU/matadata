import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ProfileImage, { IProps, ICON_IMG_CLASS, PAGE_IMG_CLASS } from '.';

let wrapper: ShallowWrapper;

const props: IProps = {
  type: 'icon',
};

const setup = (newProps = {}) => {
  wrapper = shallow(<ProfileImage {...props} {...newProps} />);
};

describe('ProfileImage', () => {
  describe('Icon image', () => {
    it('should set the icon image class', () => {
      setup();
      const imgClasses = wrapper.find('img').props()['className'];
      expect(imgClasses!.includes(ICON_IMG_CLASS)).toBe(true);
    });
  });

  describe('Page image', () => {
    it('should set the page image class', () => {
      setup({ type: 'page' });

      const imgClasses = wrapper.find('img').props()['className'];
      expect(imgClasses!.includes(PAGE_IMG_CLASS)).toBe(true);
    });
  });
});
