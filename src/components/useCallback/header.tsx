import React, { memo } from 'react';

type headerType = {
    name: string;
    type: string;
}

const Header = (prop:headerType) => {
    console.log(prop.type);

  return <div>
      {prop.name}
  </div>;
};

export default memo(Header);