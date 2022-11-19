# Cryptorecurse - Explore the World of Cryptocurrency
### A JAMstack app.
![image](https://user-images.githubusercontent.com/61587290/171366689-e8e3ef72-ebe0-427e-a6c6-782d6eda068b.png)

![image](https://user-images.githubusercontent.com/61587290/171366867-2ca2c179-828b-4edb-908c-496f87bdbb3f.png)

### Prerequesites
 
 React and multiple APIs powered by https://rapidapi.com.

 ### Tools Used
 - Ant-d for styling
 - Rapid APIs
  ***Coin Ranking API***
  ***Bing News API***
 - Chart.js
 - React.js
 - Redux.js
 ### Run locally
 - clone the repo 
 - add .env file to add your api keys from rapid
 
 
### `npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm install`

Install the dependencies in the local node_modules folder.

In global mode (ie, with -g or --global appended to the command), it installs the current package context (ie, the current working directory) as a global package.

## todo

- [x] fix ui
- [ ] Add login

**NB**

***App.js***

- `react-router-dom` version 6,  replaced `Switch` with the `Routes` component.If you are using  `react-router-dom` version 5 replace `Routes` with `Switch` in app.js
- Note that you now also pass your component as the children prop instead of using element

**example**
- Your `app.js` should look like this

```js
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';
  <div className="main">
<div className="app">
        <div className="navbar">
        <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright @2022
          <Link to="/">
            Cryptorecurse.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;
```
- if you want to use Switch, install react-router-dom version 5. 

`npm install react-router-dom@5`

Happy coding!
