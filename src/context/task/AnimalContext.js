import { createContext, useRef, useState } from "react";

// export const FontSizeContext = createContext({fontSize: "2rem"});

// 컨텍스트 영역을 만든 뒤 초기화
const AnimalContext = createContext({
  state: {name:"사슴"},
  action: {setName: () => {}}
});


///////////////////////////////////////////////////////////

// state를 생성하기 위해서 Provider를 선언
// children을 전달받는 이유는 Consumer를 사용하기 위함이다.
const AnimalNameProvider = ({children}) => {
  const [name, setName] = useState(["사슴","강아지","고양이"]);
  const inputRef = useRef()
  const value = {
    state: {name},
    action: {setName},
    ref: {inputRef}
  }

  return (
    // Consumer를 사용하기 위해서는 Provider로 감싸야 하고,
    // Consumer에서 사용할 데이터를 value에 설정해야 한다.
    // 이를 FontSizeProvider 컴포넌트에서 대신 수행하도록 한다.
    <AnimalContext.Provider value={value}>
      {children}
    </AnimalContext.Provider>
  );
};

// FontSizeContext.Consumer 대신 FontSizeConsumer로 사용하기 위해 선언한다.
const AnimalNameConsumer = AnimalContext.Consumer;

export {AnimalNameProvider, AnimalNameConsumer};