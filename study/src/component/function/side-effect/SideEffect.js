import React, { useEffect, useState } from 'react';

const SideEffect = () => {
  const [color, setColor] = useState("black");
  const [name, setName] = useState("");
  const onClickToChangeColor = () => {
    setColor("red");
  };

  const onClickToChangeName = () => {
    setName("한동석");
  };

  useEffect(() => {
    console.log("마운트");
  }, [name]);

  return (
    <div>
      <h1 style={{color: color}}>안녕하세요! {name}😍</h1>
      <button onClick={onClickToChangeColor}>변경!</button>
      <button onClick={onClickToChangeName}>이름은?</button>
    </div>
  );
};

export default SideEffect;