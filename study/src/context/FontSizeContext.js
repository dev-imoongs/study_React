import { createContext, useState } from "react";

// export const FontSizeContext = createContext({fontSize: "2rem"});

// 컨텍스트 영역을 만든 뒤 초기화
const FontSizeContext = createContext({
  state: {fontSize: "2rem"},
  action: {setFontSize: () => {}}
});

// state를 생성하기 위해서 Provider를 선언
// children을 전달받는 이유는 Consumer를 사용하기 위함이다.
const FontSizeProvider = ({children}) => {
  const [fontSize, setFontSize] = useState("2rem");
  const value = {
    state: {fontSize},
    action: {setFontSize}
  }

  return (
    // Consumer를 사용하기 위해서는 Provider로 감싸야 하고,
    // Consumer에서 사용할 데이터를 value에 설정해야 한다.
    // 이를 FontSizeProvider 컴포넌트에서 대신 수행하도록 한다.
    <FontSizeContext.Provider value={value}>
      {children}
    </FontSizeContext.Provider>
  );
};

// FontSizeContext.Consumer 대신 FontSizeConsumer로 사용하기 위해 선언한다.
const FontSizeConsumer = FontSizeContext.Consumer;

export {FontSizeProvider, FontSizeConsumer};