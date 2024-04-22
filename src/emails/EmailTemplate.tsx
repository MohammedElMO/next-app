import React from "react";
import {
  Tailwind,
  Button,
  Html,
  Body,
  Preview,
  Container,
  Text,
} from "@react-email/components";

function EmailTemplate() {
  return (
    <Html>
      <Body>
        <Tailwind
          config={{
            themes: {
              extend: {
                colors: {
                  brand: "#007291",
                },
                fontFamily: {
                  robot: ["Roboto", "mono"],

                },
              },
            },
          }}
        >
          <Preview>welcome to the send email</Preview>
          <Container>
            <Text>your have been rigestred successfuly ,next step is </Text>
            <Button
              href="https://example.com"
              className="bg-red-400 font-sans font-robot px-3 py-2 font-medium leading-4  text-white "
            >
              verify email
            </Button>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  );
}

export default EmailTemplate;
