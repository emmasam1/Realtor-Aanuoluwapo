"use client";

import {
  Modal,
  Button,
  Typography,
  message,
  Divider,
} from "antd";

import {
  CopyOutlined,
  WhatsAppOutlined,
  BankOutlined,
  DollarOutlined,
  UserOutlined,
  CreditCardOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

export default function PaymentModal({ open, onClose }) {
  const accountNumber = "0123456789";
  const accountName = "Jane Doe";
  const bank = "GTBank";
  const amount = "₦10,000";

  const whatsapp = "https://wa.me/2348012345678";

  const copy = async (text) => {
    await navigator.clipboard.writeText(text);
    message.success("Account number copied");
  };

  return (
    <Modal
      open={open}
      footer={null}
      onCancel={onClose}
      centered
      width={430}
    >
      <Title
        level={4}
        style={{
          marginBottom: 4,
        }}
      >
        Complete Your Payment
      </Title>

      <Text type="secondary">
        Transfer the guide fee using the account details below, then send
        your payment receipt via WhatsApp for verification.
      </Text>

      <Divider />

      <div className="space-y-3">

        {/* Amount */}

        <div className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">

            <DollarOutlined className="text-primary text-lg" />

          </div>

          <div>

            <p className="text-xs text-foreground-muted">
              Amount
            </p>

            <h3 className="text-lg font-bold">
              {amount}
            </h3>

          </div>

        </div>

        {/* Bank */}

        <div className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">

            <BankOutlined className="text-primary text-lg" />

          </div>

          <div>

            <p className="text-xs text-foreground-muted">
              Bank
            </p>

            <h3 className="font-semibold">
              {bank}
            </h3>

          </div>

        </div>

        {/* Account Name */}

        <div className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">

            <UserOutlined className="text-primary text-lg" />

          </div>

          <div>

            <p className="text-xs text-foreground-muted">
              Account Name
            </p>

            <h3 className="font-semibold">
              {accountName}
            </h3>

          </div>

        </div>

        {/* Account Number */}

        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-4">

          <div className="flex items-center justify-between gap-4">

            <div>

              <div className="flex items-center gap-2">

                <CreditCardOutlined className="text-primary" />

                <span className="text-xs text-foreground-muted">
                  Account Number
                </span>

              </div>

              <h2 className="mt-2 text-2xl font-black tracking-[4px]">

                {accountNumber}

              </h2>

            </div>

            <Button
              type="primary"
              icon={<CopyOutlined />}
              onClick={() => copy(accountNumber)}
            >
              Copy
            </Button>

          </div>

        </div>

      </div>

      <Button
        type="primary"
        block
        size="large"
        className="mt-6 h-11"
        icon={<WhatsAppOutlined />}
        href={`${whatsapp}?text=Hello,%20I%20have%20made%20payment%20for%20the%20Realtor%20Training%20Guide.%20Please%20find%20my%20payment%20receipt%20attached.`}
        target="_blank"
      >
        I've Made Payment
      </Button>

      <div className="mt-5 flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-3">

        <SafetyCertificateOutlined className="mt-1 text-primary" />

        <p className="text-xs leading-6 text-foreground-muted">

          After your payment has been verified, you'll receive a
          <strong> secure one-time download link </strong>
          via WhatsApp. The link becomes invalid automatically after the guide
          has been downloaded successfully.

        </p>

      </div>

    </Modal>
  );
}