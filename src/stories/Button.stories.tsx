import { Button } from "../components/Buttons";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <button type="button">Yay</button>;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
  color: "primary",
};
