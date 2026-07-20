"use client";

import { Form, Input, Button, message } from "antd";

const { TextArea } = Input;

export default function ContactForm() {
  const onFinish = (values) => {
    console.log(values);

    message.success(
      "Your message has been sent successfully."
    );
  };

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
    >
      <Form.Item
        label="Full Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Enter your name",
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        label="Email Address"
        name="email"
        rules={[
          {
            required: true,
            type: "email",
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        label="Message"
        name="message"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <TextArea
          rows={6}
        />
      </Form.Item>

      <Button
        htmlType="submit"
        type="primary"
        size="large"
        block
      >
        Send Message
      </Button>
    </Form>
  );
}