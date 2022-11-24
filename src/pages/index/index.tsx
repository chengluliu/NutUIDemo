import React, { useState } from "react";
import { useDidShow } from "@tarojs/taro";
import { Button, Dialog } from "@nutui/nutui-react-taro";

const Index = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <Dialog
        title="组件调用"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。
      </Dialog>
    </>
  );
};
export default Index;
