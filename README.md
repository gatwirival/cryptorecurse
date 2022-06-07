# Cryptorecurse - Explore the World of Cryptocurrency

![image](https://user-images.githubusercontent.com/61587290/171366689-e8e3ef72-ebe0-427e-a6c6-782d6eda068b.png)

![image](https://user-images.githubusercontent.com/61587290/171366867-2ca2c179-828b-4edb-908c-496f87bdbb3f.png)

### Prerequesites
 
 React and multiple APIs powered by https://rapidapi.com.
 
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

- `react-router-dom` version 6,  replaced `Switch` with the `Routes` component.If you are using  `react-router-dom` version 6 replace `Switch` with `Routes` in app.js
- Note that you now also pass your component as the element prop instead of using children.

**example**

```js
import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import { layout, Typography, Space, Divider } from 'antd';

import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';
@@ -12,26 +12,17 @@ const App = () => (
    </div>
    <div className="main">
      <Layout>
        <div className='routes'>

              <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/exchanges" element={<Exchanges />}/>
                  <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                  <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                  <Route path="/news" element={<News />} />                                   
              </Routes>
         </div>
      </Layout>
   ```
- if you want to use Switch like me then install react-router-dom version 5. Switch is replaced in react-router-dom version 6.

`npm install react-router-dom@5`

Happy coding!
