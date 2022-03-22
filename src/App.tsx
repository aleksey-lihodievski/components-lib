import React, { MouseEventHandler } from 'react';

import Button from './Button';
import ButtonGroup from './ButtonGroup';

const App: React.FC = () => {
  const onClick: MouseEventHandler = (event) => {
    console.log('click', event.currentTarget);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <ButtonGroup>
          <Button
            onClick={onClick}
            active={true}
            className='custom-button'
            type='button'
            href='http://google.com'
            disabled={false}
          >
            login
          </Button>
          <Button
            onClick={onClick}
            active={false}
            className='custom-button'
            type='button'
            href='http://google.com'
            disabled={false}
          >
            sign up
          </Button>
          <Button
            onClick={onClick}
            active={false}
            className='custom-button'
            type='button'
            href='http://google.com'
            disabled={true}
          >
            disabled
          </Button>
          <Button
            onClick={onClick}
            active={true}
            className='custom-button'
            type='button'
            href='http://google.com'
            disabled={true}
          >
            another disabled
          </Button>
        </ButtonGroup>
      </header>
    </div>
  );
};

export default App;
