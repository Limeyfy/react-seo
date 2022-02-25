# NL-UI / Notlimey UI

Is a library for ui and functional components for react and or typescript

# Getting started

```terminal
npm i --save react-better-seo

yarn add react-better-seo
```

## Example

```javascript
import './App.css';
import { DefaultHelmet } from 'nl-ui'

function App() {
  return (
    <div className="App">
      <DefaultHelmet Title="Hey" SubTitle="cool" />
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