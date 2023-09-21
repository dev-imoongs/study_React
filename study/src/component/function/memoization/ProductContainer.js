import React, { useCallback, useMemo, useState } from "react";
import Amount from "./Amount";

const ProductContainer = () => {
  console.log("👵 부모(Product) 랜더링");

  const containerStyle = {
    width: "300px",
    height: "300px",
    margin: "20px auto",
  };

  const productStyle = { border: "1px solid lightgray", padding: "20px" };

  const divStyle = {
    border: "1px solid skyblue",
    height: "30px",
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "20px",
    padding: "20px",
  };
  const pStyle = { lineHeight: "0" };

  const [like, setLike] = useState(0);
  const [amount, setAmount] = useState(1);
  const [coupon, setCoupon] = useState(0);
  // const props = useMemo(() => {return { amount: amount, coupon: coupon }}, [amount, coupon]);

  // useMemo는 값에 대한 연산 제어를 위해 사용!
  const amountMemo = useMemo(() => {
    console.log("amount 연산!");
    return amount;
  }, [amount]);
  const couponMemo = useMemo(() => {
    console.log("coupon 연산!");
    return coupon;
  }, [coupon]);
  const props = { amount: amountMemo, coupon: couponMemo };

  // useCallback은 실행할 문장 또는 변화를 주는 기능 제어를 위해 사용!
  // const onClickToAddAmount = () => {
  //   setAmount(amount + 1);
  // };
  const onClickToAddAmountCallback = useCallback(() => {
    console.log("수량 증가!");
    return setAmount(amount + 1);
  }, [amount]);

  // const onClickToSubtractAmount = () => {
  //   setAmount(amount - 1);
  // };

  const onClickToSubtractAmountCallback = useCallback(() => {
    console.log("수량 감소!");
    return setAmount(amount - 1);
  }, [amount]);

  // const onClickToAddCoupon = () => {
  //   setCoupon(coupon + 1);
  // };

  const onClickToAddCouponCallback = useCallback(() => {
    console.log("쿠폰 증가!");
    return setCoupon(coupon + 1);
  }, [coupon]);

  // const onClickToSubtractCoupon = () => {
  //   setCoupon(coupon - 1);
  // };

  const onClickToSubtractCouponCallback = useCallback(() => {
    console.log("쿠폰 감소!");
    return setCoupon(coupon - 1);
  }, [coupon]);

  return (
    <div style={containerStyle}>
      <div style={productStyle}>
        <p>[책] 배워서 바로 써먹는 리액트</p>
        <button onClick={() => setLike(like + 1)}>좋아요 {like}</button>
        <Amount
          props={props}
          divStyle={divStyle}
          pStyle={pStyle}
          onClickToAddAmount={onClickToAddAmountCallback}
          onClickToSubtractAmount={onClickToSubtractAmountCallback}
          onClickToAddCoupon={onClickToAddCouponCallback}
          onClickToSubtractCoupon={onClickToSubtractCouponCallback}
        />
      </div>
    </div>
  );
};

export default ProductContainer;
