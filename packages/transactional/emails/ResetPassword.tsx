import * as React from "react";
import {
  Body,
  Button,
  Container,
  Font,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

import { getBaseUrl } from "../utils/get-base-url";

interface ResetPasswordProps {
  firstName: string;
  url: string;
}

const baseUrl = getBaseUrl();

export const ResetPassword = ({ firstName, url }: ResetPasswordProps) => (
  <Html>
    <Head>
      <meta name="x-apple-disable-message-reformatting" />
      <Font
        fontFamily="DM Sans"
        fallbackFontFamily="sans-serif"
        webFont={{
          url: "https://fonts.gstatic.com/s/dmsans/v15/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2",
          format: "woff2",
        }}
      />
    </Head>
    <Tailwind>
      <Body className="mx-auto my-auto bg-white px-2 font-sans text-black">
        <Preview>
          kafeasist hesabınızın parolasını sıfırlamak için aşağıdaki butona
          tıklayın veya bağlantıyı tarayıcınıza yapıştırın.
        </Preview>
        <Container className="mx-auto my-12 max-w-[300px]">
          <Section className="mt-10">
            <Img
              src={`${baseUrl}/static/logo.svg`}
              width="105"
              height="81"
              alt="kafeasist logo"
              className="mx-auto my-0"
            />
          </Section>
          <Text>Merhaba {firstName}</Text>
          <Text className="mt-4">
            kafeasist hesabınızın parolasını sıfırlamak için aşağıdaki butona
            tıklayın veya bağlantıyı tarayıcınıza yapıştırın.
          </Text>
          <Link href={url}>
            <Text className="mt-2 break-all text-sm font-medium text-[#0041C3]">
              {url}
            </Text>
          </Link>
          <Section className="my-8 text-center">
            <Button
              className="w-full rounded-md border border-black bg-[#980000] py-3 text-center text-sm text-white"
              href={url}
            >
              Parolanızı sıfırlayın
            </Button>
          </Section>
          <Hr className="mx-0 my-6 w-full border border-solid border-[#DBDBDB]" />
          <Text className="mt-4 text-sm text-[#86868B]">
            Eğer bu e-postayı alıyorsanız ancak kafeasist parolanızı sıfırlama
            isteği göndermediyseniz ve hesabınızın güvenliği hakkında
            endişeleriniz varsa, lütfen bu e-postaya yanıt verip bize bildirin.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

ResetPassword.PreviewProps = {
  firstName: "John",
  url: "https://kafeasist.com/api/auth/reset?token=123456",
} as ResetPasswordProps;

export default ResetPassword;
