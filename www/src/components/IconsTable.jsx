import React from 'react';
import { Icon } from '~paragon-react'; // eslint-disable-line
import * as IconComponents from '~paragon-icons'; // eslint-disable-line

function IconsTable() {
  return (
    <div>
      {Object.keys(IconComponents).map(iconName => (
        <div className="d-flex mb-3 align-items-center">
          <Icon
            className="mr-3"
            key={iconName}
            src={IconComponents[iconName]}
          />
          <h6 className="mb-0 mr-3 flex-grow-1">{iconName}</h6>
          <code className="bg-light px-2 py-1 rounded">
            <small>
              {`import {${iconName}} from '@edx/paragon/icons';`}
            </small>
          </code>
        </div>
      ))}
    </div>
  );
}

export default IconsTable;
