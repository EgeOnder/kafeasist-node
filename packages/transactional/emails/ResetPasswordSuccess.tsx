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

const baseUrl = getBaseUrl();

export const ResetPasswordSuccess = () => (
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
          kafeasist hesabınızın parolanız başarıyla değiştirildi. Artık
          dilediğiniz zaman kafeasist'e giriş yapabilirsiniz. 🎉
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
          <Text>
            kafeasist hesabınızın parolanız başarıyla değiştirildi. Artık
            dilediğiniz zaman kafeasist'e giriş yapabilirsiniz. 🎉
          </Text>
          <Section className="my-8 text-center">
            <Button
              className="w-full rounded-md border border-black bg-[#980000] py-3 text-center text-sm text-white"
              href={`${baseUrl}/panel`}
            >
              Giriş yapın
            </Button>
          </Section>
          <Hr className="mx-0 my-6 w-full border border-solid border-[#DBDBDB]" />
          <Text className="mt-4 text-sm text-[#86868B]">
            Eğer bu e-postayı alıyorsanız ancak kafeasist parolanızı
            değiştirmediyseniz ve hesabınızın güvenliği hakkında endişeleriniz
            varsa, lütfen bu e-postaya yanıt verip bize bildirin.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default ResetPasswordSuccess;
