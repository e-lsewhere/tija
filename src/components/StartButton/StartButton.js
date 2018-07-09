import React from 'react';
import { Button } from 'mdbreact';
import './StartButton.css';

const StartButton = () => {
  return(
    <div className='container'>
      <div className='row'>
        <div className='col d-flex justify-content-center'>
          <Button id='start_task' color="elegant">Start Task</Button>
        </div>
      </div>
    </div>
  );
}

export default StartButton;
