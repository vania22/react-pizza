import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaLoader = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={457}
    viewBox="0 0 280 457"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="46" y="95" rx="3" ry="3" width="88" height="6" />
    <rect x="51" y="91" rx="3" ry="3" width="52" height="6" />
    <circle cx="130" cy="130" r="130" />
    <rect x="0" y="271" rx="4" ry="4" width="277" height="31" />
    <rect x="0" y="315" rx="4" ry="4" width="281" height="61" />
    <rect x="0" y="394" rx="4" ry="4" width="102" height="38" />
    <rect x="178" y="394" rx="4" ry="4" width="102" height="38" />
    <rect x="242" y="416" rx="0" ry="0" width="0" height="2" />
  </ContentLoader>
);

export default PizzaLoader;
