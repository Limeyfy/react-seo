# React Better SEO
Maintaining good seo in react is not easy in itself. You can always use react-helmet to help you but understanding all the meta tags and so on can be hard. Therefore I made a npm package to help with easily maintaining good seo.

The package is based on https://www.npmjs.com/package/react-helmet.

## Getting started

```terminal
npm i --save @limeyfy/react-seo
// or
yarn add @limeyfy/react-seo
```

### Example

```jsx
import './App.css';
import { DefaultHelmet } from '@limeyfy/react-seo'

const App = () => {
  return (
    <div className="App">
      <DefaultHelmet title="Hey" subTitle="cool" />
    </div>
  );
}

export default App;
```

### Test SEO

```jsx
import './App.css';
import React, { useEffect } from 'react'
import { DefaultHelmet, CheckSeo } from '@limeyfy/react-seo'

const App = () => {

  // Call checkSeo in useEffect
  useEffect(() => {
    CheckSeo();
  }, [])

  return (
    <div className="App">
      <DefaultHelmet
        title="Limeyfy"
        subTitle="App"
      >
        <meta name='og:country-name' content='NORWAY'>
      </DefaultHelmet>
    </div>
  );
}

export default App;
```

### Another example

```jsx
import './App.css';
import { DefaultHelmet } from '@limeyfy/react-seo'

const App = () => {
  return (
    <div className="App">
      <DefaultHelmet
        title="Limeyfy"
        subTitle="App"
      >
        <meta name='og:country-name' content='NORWAY'>
      </DefaultHelmet>
    </div>
  );
}

export default App;
```

### Params

- title?: <code>string</code>;
- subTitle?: <code>string</code>;
- title?: <code>string</code>;
- subTitle?: <code>string</code>;
- titleDivider?: <code>string</code>;
- keywords?: <code>string</code>;
- description?: <code>string</code>;
- subject?: <code>string</code>;
- copyright?: <code>string</code>;
- language?: <code>string</code>;
- robots?: <code>string</code>;
- revised?: <code>string</code>;
- topic?: <code>string</code>;
- summary?: <code>string</code>;
- Classification?: <code>string</code>;
- author?: <code>string</code>;
- replyTo?: <code>string</code>;
- owner?: <code>string</code>;
- url?: <code>string</code>;
- identifierURL?: <code>string</code>;
- image?: <code>string</code>;
- favIcon?: <code>string</code>;
- children?: <code>React.ReactNode</code>;
