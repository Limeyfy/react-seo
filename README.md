# React Better SEO

## Getting started

```terminal
npm i --save react-better-seo

yarn add react-better-seo
```

## Example

```tsx
import './App.css';
import { DefaultHelmet } from 'react-better-seo'

const App = () => {
  return (
    <div className="App">
      <DefaultHelmet title="Hey" subTitle="cool" />
    </div>
  );
}

export default App;
```

Another example

```tsx
import './App.css';
import { DefaultHelmet } from 'react-better-seo'

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
- children?: React.ReactNode;