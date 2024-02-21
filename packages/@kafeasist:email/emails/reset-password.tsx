import * as React from "react";
import { Container } from "@react-email/container";
import { Html } from "@react-email/html";
import { Img } from "@react-email/img";
import { Preview } from "@react-email/preview";
import { Text } from "@react-email/text";

const baseUrl = process.env.URL || "https://kafeasist.com";

export const ResetPasswordEmail = () => (
  <Html>
    <Preview>kafeasist şifren başarıyla değiştirildi!</Preview>
    <Container style={{ ...container, ...main }}>
      <Img
        src={`${baseUrl}/logo/logo_light.svg`}
        width="70"
        height="70"
        alt="kafeasist Logo"
        style={logo}
      />
      <Text style={paragraph}>Merhaba,</Text>
      <Text style={paragraph}>
        kafeasist hesabının şifresini başarıyla değiştirdin. Eğer bu işlemi
        senin yapmadığını düşünüyorsan, lütfen bize bildir.
      </Text>
      <Text style={paragraph}>
        Saygılarımızla,
        <br />
        kafeasist ekibi.
      </Text>
    </Container>
  </Html>
);

const main = {
  padding: "3rem",
  borderRadius: "12px",
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};
