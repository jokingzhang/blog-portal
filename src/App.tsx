import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app-content">
        <section className="nes-container with-title t-wrapper">
          <h3 className="title">Personal information</h3> 
          <section className="message-list">
            <section className="message-left">
              <i className="nes-squirtle avatar-img"></i>
              <div className="nes-balloon from-left avatar-content">
                <p>张兜兜，前端打字员，现居北京</p>
              </div>
            </section>
          </section>
        </section>
        <section className="nes-container with-title t-wrapper">
          <h3 className="title">Contact & Social</h3>
          <ul className="nes-list is-disc">
            <li>
              <i className="nes-icon github is-small"></i>  
              &nbsp;
              Github: 
              <a href="https://github.com/jokingzhang" rel="github" target="_blank"> jokingzhang </a>
            </li>
            <li>
              掘金:
              <a href="https://juejin.im/user/59534d5bf265da6c4602bb8d" rel="github" target="_blank"> joking_zhang </a></li>
            <li>
              segmentfault:
              <a href="https://segmentfault.com/u/joking_zhang" rel="segmentfault" target="_blank"> joking_zhang </a></li>
            <li>Mail: 496691544@qq.com</li>
            <li>WeChat: joking_zhang</li>
          </ul>
        </section>
        <section className="nes-container with-title t-wrapper">
          <h3 className="title">Demos</h3> 

          <div className="nes-container with-title">
            <p className="title">dantd</p>
            <p>
              基于 antd 组件进行二次封装的业务组件
              <a href="/dantd" rel="segmentfault" target="_blank"> portal </a>
            </p>
          </div>
        </section>
      </div>
      <div className="app-footer">
        <div className="nes-container is-rounded is-dark">
          <p>Joking Zhang's Blog ©2020</p>
          <p>Power by 
            <a href="https://nostalgic-css.github.io/NES.css/" rel="NES.css" target="_blank"> NES.css </a>
            &
            <a href="https://create-react-app.dev/" rel="create-react-app" target="_blank"> Create React App </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
