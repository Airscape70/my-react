import React, { useCallback, useEffect, memo } from "react";

class MyComponent extends React.Component {
  constructor() {
    this.state = {
      x: 0
    }
  }

  componentDidMount() {
    this.setState({
      x: 1
    })
  }

  componentDidUpdate() {

  }

  render() {
    return <div></div>
  }
}

const MyFunc = memo((props) => {
  const [x, setX] = React.useState(0);

  const handleClick = useCallback(() => setX(1), [setX]);

  useEffect(() => {
    // API call
  }, []);

  return <Sub onClick={handleClick}></Sub>
})