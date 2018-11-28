import React from "react";
import CSSModule from "react-css-modules";
import { Form, DatePicker, Select } from "antd";

import styles from "./index.less";

import MatchContext from "@/context/Match";

const FormItem = Form.Item;
const { RangePicker } = DatePicker;
const Option = Select.Option;

const Capture: React.FunctionComponent = () => {
  return (
    <div styleName="main">
      <div styleName="filter">
        <Form layout="inline">
          <FormItem label="选择时间">
            <RangePicker />
          </FormItem>
          <FormItem label="选择卡口">
            <Select defaultValue="lucy" style={{ width: 200 }}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </FormItem>
        </Form>
      </div>
      <div styleName="list">
        <MatchContext.Consumer>
          {(value) => <div>{JSON.stringify(value)}</div>}
        </MatchContext.Consumer>
      </div>
    </div>
  );
};

export default CSSModule(styles)(Capture);
