# React Better SEO

## Getting started

```terminal
npm i --save react-better-seo

yarn add react-better-seo
```

## Example

```javascript
import './App.css';
import { DefaultHelmet } from 'react-better-seo'

function App() {
  return (
    <div className="App">
      <DefaultHelmet title="Hey" subTitle="cool" />
    </div>
  );
}

export default App;
```

- **Title?**: string;
- **SubTitle?**: string;
- **Description?**: string;
- **MetaImage?**: string;
- **ThemeColor?**: string;
- **FavIcon?**: string;
- **AppleFavIcon?**: string;
- **TitleDivider?**: string;
- **children?**: React.ReactNode;