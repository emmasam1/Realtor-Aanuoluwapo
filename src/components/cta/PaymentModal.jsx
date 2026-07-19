"use client";

import {
  Modal,
  Button,
  Typography,
  message,
} from "antd";

import {
  CopyOutlined,
  WhatsAppOutlined,
  BankOutlined,
  DollarOutlined,
  UserOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

export default function PaymentModal({
  open,
  onClose,
}) {
  const accountNumber = "0123456789";
  const accountName = "Jane Doe";
  const bank = "GTBank";
  const amount = "₦10,000";

  const whatsapp =
    "https://wa.me/2348012345678";

  const copy = async (text) => {
    await navigator.clipboard.writeText(text);
    message.success("Copied");
  };

  return (
    <Modal
      open={open}
      footer={null}
      onCancel={onClose}
      centered
      width={480}
    >

      <Title
        level={4}
        style={{
          marginBottom: 5,
        }}
      >
        Complete Your Payment
      </Title>

      <Text type="secondary">

        Make payment using the details below then send
        your receipt on WhatsApp.

      </Text>

      <div className="mt-8 grid grid-cols-2 gap-4">

        <div className="rounded-2xl border border-border bg-card p-5">

          <DollarOutlined className="mb-3 text-xl text-primary" />

          <p className="text-sm text-foreground-muted">

            Amount

          </p>

          <h3 className="mt-2 text-2xl font-black">

            {amount}

          </h3>

        </div>

        <div className="rounded-2xl border border-border bg-card p-5">

          <BankOutlined className="mb-3 text-xl text-primary" />

          <p className="text-sm text-foreground-muted">

            Bank

          </p>

          <h3 className="mt-2 text-xl font-bold">

            {bank}

          </h3>

        </div>

        <div className="rounded-2xl border border-border bg-card p-5">

          <UserOutlined className="mb-3 text-xl text-primary" />

          <p className="text-sm text-foreground-muted">

            Account Name

          </p>

          <h3 className="mt-2 text-lg font-bold">

            {accountName}

          </h3>

        </div>

        <div className="rounded-2xl border border-border bg-card p-5">

          <CreditCardOutlined className="mb-3 text-xl text-primary" />

          <p className="text-sm text-foreground-muted">

            Account Number

          </p>

          <h3 className="mt-2 text-xl font-black tracking-widest">

            {accountNumber}

          </h3>

          <Button
            className="mt-4"
            icon={<CopyOutlined />}
            onClick={() => copy(accountNumber)}
          >
            Copy
          </Button>

        </div>

      </div>

      <Button
        type="primary"
        size="large"
        block
        icon={<WhatsAppOutlined />}
        className="mt-8 h-12"
        href={`${whatsapp}?text=Hello,%20I%20have%20made%20payment%20for%20the%20Realtor%20Training%20Guide.%20Please%20find%20my%20payment%20receipt%20attached.`}
        target="_blank"
      >
        I've Made Payment
      </Button>

      <p className="mt-5 text-center text-sm text-foreground-muted leading-7">

        After your payment has been verified, you'll receive a
        secure one-time download link on WhatsApp. The link
        expires automatically after the guide has been downloaded.

      </p>

    </Modal>
  );
}