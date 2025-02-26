import React from 'react'
import './SinglePage.scss';
import Slider from '../../Components/7_Slider/Slider';
import { singlePostData, userData } from '../../Data/dummyData';

const SinglePage = () => {
  return (
    <div className='singlePage'>
      <div className="singlePage_left_details">
        <div className="wrapper">
          <Slider images = {singlePostData.images}/>
          <div className="singlePage_left_details_info">
            <div className="top">
              <div className="top_postInfo">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">
                  ${singlePostData.price}
                </div>
              </div>
              <div className="top_userInfo">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              {singlePostData.description}
            </div>
          </div>
        </div>

      </div>
      <div className="singlePage_right_features">
        <div className="wrapper"></div>

      </div>
    </div>
  )
}

export default SinglePage
