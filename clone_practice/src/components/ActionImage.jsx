import React from 'react';

const ActionImage = ({image}) => {
return (
  <div class="action-image-article">
    <div class="image_single">
      <img
        src={image}
        alt="샛별님이 올리신 행동이미지입니다."
        class="authen_image"
      />
      <div class="authen-feed-like">
        <div class="authen-feed-like-main">
          <div class="authen-feed-like-selections">
            <button class="authen-feed-like-selection" >
              <div data-animation="BGSLIDE" class="authen-feed-like-icon"></div>
              <span class="authen-feed-like-count-label">5</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="write-info-wrap">
      <em color="#333" class="writer-wrap">
        <span class="writer-nickname">작성자 아이디</span>샛별
      </em>
      <span color="gray60" class="sc-8aeb359-0 hFOIQn sc-5dc55ca7-0 sc-516de41-3 qPkKe fBbmHT">
        <span class="writer-nickname">작성 일자</span>
        <span>3주일 전</span>
      </span>
    </div>
  </div>
);
};

export default ActionImage;