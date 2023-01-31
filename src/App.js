import './App.css';
import React, { useState } from 'react';
import "./Components/CounterSemanticUI.css"
import { Segment, Grid, Button } from 'semantic-ui-react';
const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Segment textAlign='center' style={{ width: '100%'}}>
      <Grid verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column>
            <h1>Counter: {count}</h1>
            <Button color='green' onClick={handleIncrement}>
              Increment
            </Button>
            <Button
              color='red'
              onClick={handleDecrement}
              disabled={count === 0}
            >
              Decrement
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div style={{margin:70}}> 
      <label textAlign="center"> Assignment Done By Priyanshu Ranjan - 12016486</label>
      </div>

    </Segment>
    
    
  );
};

export default Counter;
