import React from 'react';
import ChildAnimalContainer from './ChildAnimalContainer';
import { AnimalNameProvider } from './AnimalContext';
import { AnimalProvider } from './AnimalContext2';

// Context에 저장된 동물 세 마리를 버튼으로 출력
// 추가, 삭제 버튼을 클릭하면 Context에 선언해놓은 추가, 삭제 함수를 사용한다.
// 추가는 input, 삭제는 버튼을 클릭하면 삭제

const AnimalContainer = () => {
  return (
    <div>
    <AnimalProvider>
      <ChildAnimalContainer />
    </AnimalProvider>
    </div>
  );
};

export default AnimalContainer;