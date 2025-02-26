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

interface MagicLinkProps {
  url: string;
}

const baseUrl = getBaseUrl();

export const MagicLink = ({ url }: MagicLinkProps) => (
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
      <Body className="mx-auto my-auto bg-[#FFFBF8] px-2 font-sans text-black">
        <Preview>
          kafeasist hesabınıza giriş yapmak için lütfen aşağıdaki butona
          tıklayın veya bağlantıyı kopyalayıp tarayıcınıza yapıştırın:
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
            kafeasist hesabınıza giriş yapmak için lütfen aşağıdaki butona
            tıklayın veya bağlantıyı kopyalayıp tarayıcınıza yapıştırın:
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
              Giriş yap
            </Button>
          </Section>
          <Hr className="mx-0 my-6 w-full border border-solid border-[#DBDBDB]" />
          <Text className="mt-4 text-sm text-[#86868B]">
            Eğer bu e-postayı alıyorsanız ancak kafeasist hesabınız yoksa,
            lütfen bu mesajı dikkate almayın.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

MagicLink.PreviewProps = {
  url: "https://kafeasist.com/api/auth/verify?token=123456",
} as MagicLinkProps;

export default MagicLink;
