import React from 'react';
import './styles.css';

interface IProps {
  bgColour: 'light' | 'dark';
  layout: 'horizontal' | 'vertical';
  size: 'small' | 'large';
}

export default function LinkedInBadge({ bgColour, layout, size }: IProps) {
  return (
    <div
      className="LI-profile-badge"
      data-locale="en_US"
      data-size={size}
      data-theme={bgColour}
      data-type={layout}
      data-vanity="fredieunabia"
      data-version="v1"
    >
      <a
        className="LI-simple-link"
        href="https://uk.linkedin.com/in/fredieunabia?trk=profile-badge"
      >
        Fredie Unabia
      </a>
    </div>
  );
}
