import React from 'react';

const ProductSelectContainer = () => {
  return (
  <dl className="container">
    <dt className="container-title">상품 선택</dt>
    <dd className="item-wrap">
      <div className="item-container">
        <div className="item">
          <div className="item-select-box">상품을 선택해주세요</div>
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon MuiSelect-iconOutlined css-1636szt"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path d="M7 10l5 5 5-5z"></path>
          </svg>
        </div>
        <div className="item-detail">
          <div className="item-option">
            <div className="option-name">
              <span>[부르스터스] 바닐라 4개</span>
              <button>
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMTAuOTEgMTAuOTEgMCAwIiBpZD0iMDMxNHo5c3Z0YSIvPgogICAgICAgIDxwYXRoIGQ9Ik0wIDEwLjkxIDEwLjkxIDAiIGlkPSJ6cjgxbTJkYXZiIi8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi41NDUgNi41NDUpIj4KICAgICAgICAgICAgPHVzZSBzdHJva2U9IiM2NjYiIHN0cm9rZS13aWR0aD0iLjU0NSIgeGxpbms6aHJlZj0iIzAzMTR6OXN2dGEiLz4KICAgICAgICAgICAgPHVzZSBzdHJva2U9IiM5OTkiIHN0cm9rZS13aWR0aD0iMS4wOTEiIHhsaW5rOmhyZWY9IiMwMzE0ejlzdnRhIi8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYuNTQ1IDYuNTQ1KSI+CiAgICAgICAgICAgIDx1c2Ugc3Ryb2tlPSIjNjY2IiBzdHJva2Utd2lkdGg9Ii41NDUiIHhsaW5rOmhyZWY9IiN6cjgxbTJkYXZiIi8+CiAgICAgICAgICAgIDx1c2Ugc3Ryb2tlPSIjOTk5IiBzdHJva2Utd2lkdGg9IjEuMDkxIiB4bGluazpocmVmPSIjenI4MW0yZGF2YiIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==" alt=""/>
              </button>
            </div>
            <div className="option">
              <div className="option-count">
                <button></button>
                <div>1</div>
                <button></button>
              </div>
              <div className="option-price">
                <span>6,650원</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dd>
  </dl>
  );
};

export default ProductSelectContainer;