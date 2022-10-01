import React from 'react';
import './home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <div>
          <div className='link1'>
            <Link to='/task1'>Task 1</Link>
          </div>
          <div className='link2'>
            <Link to='/task2'>Task 2</Link>
          </div>
        </div>

        <div className='git'>
          <a href='https://github.com/gyalche/assigned-word/tree/master'>
            Git hub whole task in a single repo
          </a>
          <a href='https://github.com/gyalche/assigned-word/tree/master/frontend/src/pages/Task1'>
            Task 1 Git
          </a>
          <a href='https://github.com/gyalche/assigned-word/tree/master/frontend/src/pages/Task2'>
            Task 2 Git
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
