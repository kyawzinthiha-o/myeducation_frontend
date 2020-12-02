import React from "react";

const contentsbox = ({ name, subject, type }) => {
  return (
    <div className="content-box">
      <div className="img">
        <img
          className="img-img"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEXSy2EAAADp5bBpZTDWz2PZ0mRlYS6blkjf2pHRyl1QTSUnJhKUj0RuazOfmkqook7EvlvNxl+zrVNDQR+zr3m+t1h+ejpIRiGtp1BfXCyKhUDv67ViXichIA82NBl1cTY9OxwUEwkJCQS5tXUcGw3l4KNjWJxlAAAE50lEQVR4nO2d23LiMAyG3Y0NXQiQAAkBWgLt7vu/4ibhUKaNnJNYW0L/ZafI/kZOLMu2on7x1n6tXHfhsdqv35gTrt8C1oSFBwPWhBUga8IKkDHh2YOMCa+AbAlvgHeEf1856fMKeEf4+puR9HhUR6j4SAjpSwjpSwjpSwjpSwjpSwjpSwjpSwjpSwjpSwjpSwjpSwjpSwjpSwjpSwjpSwjpSwjpSwjpSwjpSwjpSwjpSwhv/2cwpIf1tdTVUiVEQr2dIGgz74tY0MRRku3y0aUj21k6TqJINVO2JDTvLxgKexEWeEkYrE4/7R22+Txu8GVbwqkrQm2icGs1ekgzG6TfhCXeqoXdUwBD+kyo1XLU+uk4hlG9cX8JtVpMOhmf5hElQm2ybnylVnXmPSU0yzaP33ctyBDqeNbH+tHUGvOQUC8OvazXutBDQq16ORB4Cj0k1Enf8Knehd4R6nFf2xPQol+EaW/bgAs9I9T2CNSmDWjTI0KtN/1NQy70iVDHfWb5iw61c6FfhDruHqZ9CXShR4RqCCAwF3pFaPq/ZApZ0iO+EOr+08SL5UXqD6GeD7ILP4VDCadIuTadnFqy/DmsNoWh4/Tj7o9QOINAmGPlS1slYw6zxTKJisWxVmVqMZxcI1ibCwcSzoaleG/W82a+yTgxd0ngKjmssurpPT4wm4hDqJdNeNNdbOpyaQXlYmt3oReEqmHBOw1jy2SgErtxDwj1zsr3kQJpwtvvG8w7J9TRyQa4Wg5swwPCkQ0wb7fBZLPvmtD+mum9WXXXgHNCSzz6PnSEVg04JrS58JSgvMgcE5oAJkQBdE4Yw4AYQ1Q5J7TMhf32i2uacOxDMJxBCpdcE8LvmYMlUOvYhlNCA25RID2EyjVhBA3SAA3QLSE8SBuC7U6NOCWE0k85mN/t0YhLQgMkL3CCmYtcEuoI2CocIbrw4Zkoa45oAQxSvBfpYMLGbOIms2Uyw3rAY4wI+PCMsG2BBy2cckwXOiWEjKIOUreE9T/5QB2kTgmj+p9Yc/SkCHVW/5MUdZA6JQT2m7AWhh4QApOFPUnPgRAzZHNMCGQwcF+lPhLiutBHQsyw209C/j5k9Bzyf5fynw/5xzTs41L+a4snWB8aIOPNZ40PnVHwKU/DP9fGP1/KP+ct+xZNjbPfe+K/f6hi7nvAT7CPz/8sBv/zNM9wJor9ubYnOJuoE5iQx/lS+xlh28qkdQPOCdmf8+Z/Vr/pvsWR/n2LxjszOfU7M4r/vac2d9dS4nfX2tw/3Li5f4h2h7RNMYXTIfi6Q5oss93/uEPK/x5wV9G7y41G2DRlNIjAffyiBWto0yQCNRUU/7oYz1DbhH19mnIWH+BFCjWGlH053CASdaJKca/1pZ6gXhv/mnuKf93Esk/Ma1+WneJev7RsL+Fdg7bsl1nyriNc9qxzLeiUVC3oqm+6Qz3vFb163lXvTDRu48jTLANz434TniFD++IYqa6+628j7IBvI6QLpG8j8P++Bf9vlBCWENKXENKXENKXENKXENKXENKXENKXENKXENKXENKXENKXENKXENKXENKXENKXENKXENKXENKXENKXENKXENLXsxJqRjLzn4T7zzEjzdPgO+F+/TbipOA7YQEYMNWFkC/gmZCxB8+ErAErQtaABSFvDxaE3AEDxR0w+AcG3Orq04G7gwAAAABJRU5ErkJggg=="
          alt=""
        />
      </div>
      <div className="line"></div>
      <div className="content-text">
        <h4>Name :{name}</h4>
        <h4>Type : {type} </h4>

        <h4>Suject : {subject} </h4>
      </div>
    </div>
  );
};

export default contentsbox;
