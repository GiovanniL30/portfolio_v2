import { useState } from "react";
import { TextToken } from "../../text/TextTokens";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { useSendEmailMessage } from "../../../_api/message.api";
import type { ContactFormData } from "../../../@types/contact";

const initialState: ContactFormData = {
  from: "",
  name: "",
  message: "",
};

const Contact = () => {
  const [contactFormData, setContactFormData] =
    useState<ContactFormData>(initialState);
  const sendMutation = useSendEmailMessage();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setContactFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    sendMutation.mutate(contactFormData, {
      onSuccess: () => {
        setContactFormData(initialState);
      },
      onError: () => {},
    });
  };

  return (
    <div className="w-full flex flex-col items-center mx-auto justify-center mt-10">
      <form onSubmit={handleSubmit} className="bg-surface p-5 w-full max-w-200">
        <p className="text-xl font-semibold mb-2">Contact</p>

        <div className="w-full flex flex-col gap-5 mt-5">
          <div className="flex flex-col gap-2">
            <TextToken variant="variable">
              "name" <TextToken variant="operator">: </TextToken>
            </TextToken>
            <Input
              required
              name="name"
              value={contactFormData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              disabled={sendMutation.isPending}
            />
          </div>

          <div className="flex flex-col gap-2">
            <TextToken variant="variable">
              "email" <TextToken variant="operator">: </TextToken>
            </TextToken>
            <Input
              required
              type="email"
              name="from"
              value={contactFormData.from}
              onChange={handleInputChange}
              placeholder="youremail@gmail.com"
              disabled={sendMutation.isPending}
            />
          </div>

          <div className="flex flex-col gap-2">
            <TextToken variant="variable">
              "message" <TextToken variant="operator">: </TextToken>
            </TextToken>
            <Input
              required
              as="textarea"
              name="message"
              value={contactFormData.message}
              onChange={handleInputChange}
              placeholder="Type your message here..."
              disabled={sendMutation.isPending}
            />
          </div>

          {/* Status messages */}
          {sendMutation.error && (
            <p className="text-xs font-mono text-red-400">
              {sendMutation.error.message}
            </p>
          )}
          {sendMutation.isSuccess && (
            <p className="text-xs font-mono text-green-400">
              ✓ Message sent successfully
            </p>
          )}

          <div className="flex justify-end">
            <Button type="submit" disabled={sendMutation.isPending}>
              {sendMutation.isPending ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
