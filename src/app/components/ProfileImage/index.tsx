import React from 'react';

export const ICON_IMG_CLASS = 'icon-img';
export const PAGE_IMG_CLASS = 'page-img';

export interface IProps {
  type: 'icon' | 'page';
}

export default function ProfileImage({ type }: IProps) {
  return <img className={`${type}-img`}></img>;
}
