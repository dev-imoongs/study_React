import React, { useContext, useRef } from 'react';
import { AnimalContext } from './AnimalContext2';

// Context에 저장된 동물 세 마리를 출력
// 추가, 삭제 버튼을 클릭하면 Context에 선언해놓은 추가, 삭제 함수를 사용한다.

const ChildAnimalContainer = () => {
  const {state, action, ref} = useContext(AnimalContext);
  return (
        <>
          <div>
            {state.animals.map((animal,i)=><button key={i} onClick={()=>action.remove(i)} >{animal}</button>)}
          </div>
          <input type='text' ref={ref.inputRef2}/>
          <button onClick={()=>action.insert(ref.inputRef2.current.value)}>추가</button>
        </>
  );
};

export default ChildAnimalContainer;