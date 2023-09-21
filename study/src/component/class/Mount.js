// https://jsonplaceholder.typicode.com/users
import React, { Component } from 'react';

class Mount extends Component {
  state = {
    users: [],
  }

  componentDidMount = () => {
     async function getDatas() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const datas = await response.json();
      console.log('리랜더링');
      return datas;
    }

    getDatas().then((datas) => this.setState({users: datas}));
  }

  render() {
    const {users} = this.state;

    // async function getDatas() {
    //   const response = await fetch("https://jsonplaceholder.typicode.com/users");
    //   const datas = await response.json();
    //   console.log('리랜더링');
    //   return datas;
    // }

    // getDatas().then((datas) => this.setState({users: datas}));

    // const onClickToLoad = () => {
    //   async function getDatas() {
    //     const response = await fetch("https://jsonplaceholder.typicode.com/users");
    //     const datas = await response.json();
    //     return datas;
    //   }

    //   getDatas().then((datas) => this.setState({users: datas}));
    // }

    return (
      <div>
        {users.map((user, i) => (
          <p key={i}>{user.name}</p>
        ))}
        {/* <button onClick={onClickToLoad}>불러오기</button> */}
      </div>
    );
  }
}

export default Mount;