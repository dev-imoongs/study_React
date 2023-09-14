import { createContext, useRef, useState } from "react";

const AnimalContext = createContext({
  state: { animals: [] },
  action: { insert: () => {}, remove: () => {} },
});

const AnimalProvider = ({children}) => {
  const [animals, setAnimals] = useState(["사자", "호랑이", "곰"]);
  const inputRef2 = useRef()

  const insert = (animal) => {
    setAnimals(animals.concat(animal));
  };
  const remove = (index) => {
    setAnimals(animals.filter((animal, i) => i !== index));
  };

  const value = {
    state: { animals: animals },
    action: { insert: insert, remove: remove },
    ref: { inputRef2: inputRef2 }
  };

  return (
    <AnimalContext.Provider value={value}>
      {children}
    </AnimalContext.Provider>
  );
};

const AnimalConsumer = AnimalContext.Consumer;

export {AnimalProvider, AnimalContext};