import React, { useEffect, useState } from "react";

const Mount = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("마운트");
    async function getDatas() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const datas = await response.json();
      return datas;
    }

    getDatas().then(setUsers);
  }, [])

  return (
    <div>
      {users.map((user, i) => (
        <p key={i}>{user.name}</p>
      ))}
    </div>
  );
};

export default Mount;
