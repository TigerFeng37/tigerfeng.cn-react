/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CustomCursor from 'custom-cursor-react';
import { jsx, ThemeProvider } from 'theme-ui';
import 'custom-cursor-react/dist/index.css';
import theme from './theme.js';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CustomCursor
      targets={['a', 'button', 'svg']}
      customClass='custom-cursor'
      opacity={1}
      targetScale={2}
      fill='rgba(0,0,0,0)'
      dimensions={10}
      smoothness={{
        movement: .425,
        scale: .4,
        opacity: .05,
      }}
      targetOpacity={0.250}
      >
    </CustomCursor>
    </ThemeProvider>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
