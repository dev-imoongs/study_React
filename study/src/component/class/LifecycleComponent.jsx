import React, { Component } from 'react';

// 함수형 컴포넌트가 클래스형 컴포넌트보다 선언하기 편하다.
// 클래스형 컴포넌트는 함수형 컴포넌트보다 메모리를 더 많이 사용한다.
// 프로젝트 빌드 후 배포할 때, 함수 컴포넌트를 사용하는 것이 파일 크기가 더 작다.
// 하지만 React의 생명 주기(lifecycle)를 이해하기 위해서는 배워야 하며,
// 실무에서 클래스 컴포넌트를 함수형 컴포넌트로 변경하는 작업이 진행되거니
// 다양한 React 문서를 참고할 때 클래스 컴포넌트로 작성되어 있을 수 있다.
class LifecycleComponent extends Component {

  state = {
    number: 0,
    color: null
  }

  colorRef = null;

  constructor(props) {
    super(props);
    console.log(props);
  }

  onClickToIncrease = () => {
    this.setState({
      number: this.state.number + 1
    })
  };

  // props 값을 state 값과 동기화
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps", nextProps, prevState);

    if(nextProps.color !== prevState.color){
      // state 반영
      return {color: nextProps.color}
    }
    return null;
  }

  // 마운트 직후
  componentDidMount() {
    console.log("componentDidMount");
  }

  // 다음 라이프사이클 메소드로 이동할 지, 멈출 지를 결정한다.
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    return nextState.number % 5 !== 0;
  }

  // 컴포넌트 업데이트 직전 실행
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate", prevProps, prevState);
    if(prevProps.color !== this.props.color){
      return this.colorRef.style.backgroundColor;
    }
    return null;
  }

  // 컴포넌트 업데이트 후 실행
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("componentDidUpdate", prevProps, prevState, snapshot);
    if(snapshot){
      console.log(`업데이트 직전 색상: ${snapshot}`);
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickToIncrease}>더하기</button>
        <div ref={(element) => (this.colorRef = element)} style={{width: "100px", height: "100px", backgroundColor: this.state.color, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <h1>
            {this.state.number}
          </h1>
        </div>
      </div>
    );
  }
}

export default LifecycleComponent;