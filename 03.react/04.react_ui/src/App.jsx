import React from 'react';

import { Button, Carousel } from 'antd';

// import 'antd/dist/antd.css';
import './App.css';

export default function App() {
  return (
    <div>
      <Button type='primary'>按钮</Button>

      <Carousel autoplay>
        <div style={{ width: 200, height: 200, backgroundColor: 'pink' }}>
          111
        </div>
        <div style={{ width: 200, height: 200, backgroundColor: '#F90' }}>
          222
        </div>
        <div style={{ width: 200, height: 200, backgroundColor: '#BFA' }}>
          333
        </div>
        <div style={{ width: 200, height: 200, backgroundColor: 'deeppink' }}>
          444
        </div>
      </Carousel>
    </div>
  );
}
