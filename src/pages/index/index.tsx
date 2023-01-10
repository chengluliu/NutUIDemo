import React, { useState } from "react";
import { useDidShow } from "@tarojs/taro";
import { Badge, Avatar } from "@nutui/nutui-react-taro";
import "./index.scss";
const Index = () => {
  return (
    <div className="main">
      <Badge value={8} color="#3E8AA0">
        <Avatar icon="my" shape="square" />
      </Badge>
    </div>
  );
};
export default Index;
