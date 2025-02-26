import * as React from "react";
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

import { getBaseUrl } from "../utils/get-base-url";

const baseUrl = getBaseUrl();

const features = [
  {
    title: "🤖 Yapay Zekâ Destekli Analizler",
    description:
      "kafeasist, restoranınızın verilerini analiz eder, geliştirilebilecek alanları belirler ve işletmenizin sorunlarına çözümler sunar.",
  },
  {
    title: "📊 Detaylı Raporlar",
    description:
      "kafeasist, restoranınızın performansını detaylı bir şekilde analiz eder ve size raporlar sunar. Böylece, işletmenizin durumu hakkında daha iyi bilgi sahibi olursunuz.",
  },
  {
    title: "🚀 Web Tabanlı!",
    description:
      "Diğer restoran yönetim yazılımlarının aksine, kafeasist tamamen web tabanlıdır ve entegre bir mobil uygulamaya sahiptir. Böylece verilerinize dilediğiniz yerden erişebilirsiniz.",
  },
  {
    title: "🔒 Güvenli ve Şeffaf",
    description:
      "Kullanıcılarımızın verileri bizim için çok değerli. Bu yüzden, verilerinizin güvenliği ve gizliliği konusunda en üst seviyede önlemler alıyoruz.",
  },
  {
    title: "📈 Sürekli Güncel",
    description:
      "kafeasist, sürekli olarak güncellenir ve yeni özellikler eklenir. Böylece, işletmenizi daha iyi yönetmek için her zaman en iyi araçlara sahip olursunuz.",
  },
];

export const Welcome = () => (
  <Html>
    <Head>
      <meta name="x-apple-disable-message-reformatting" />
    </Head>
    <Tailwind>
      <Body className="mx-auto my-auto bg-white px-2 font-sans text-black">
        <Preview>kafeasist&apos;e hoş geldiniz!</Preview>
        <Container className="mx-auto my-10 max-w-[465px]">
          <Section className="mt-10">
            <Img
              src={`${baseUrl}/static/logo.svg`}
              width="105"
              height="81"
              alt="kafeasist logo"
              className="mx-auto my-0"
            />
          </Section>
          <Text className="text-lg">
            Hesabınız başarıyla doğrulandı ve artık kafeasist&apos;i kullanmaya
            başlayabilirsiniz! 🎉
          </Text>
          <Hr className="mx-0 my-6 w-full border border-solid border-[#eaeaea]" />
          <Section className="my-6">
            {features.map((feature, index) => (
              <Section className="my-6">
                <Row>
                  <Column className="align-baseline">
                    <table className="text-center">
                      <td
                        align="center"
                        className="h-[40px] w-[40px] rounded-full bg-indigo-200 p-0"
                      >
                        <Text className="m-0 font-semibold text-indigo-600">
                          {index + 1}
                        </Text>
                      </td>
                    </table>
                  </Column>
                  <Column className="w-[88%]">
                    <Text className="m-0 text-[20px] font-semibold leading-[28px] text-gray-900">
                      {feature.title}
                    </Text>
                    <Text className="m-0 mt-2 text-[16px] leading-[24px] text-gray-600">
                      {feature.description}
                    </Text>
                  </Column>
                </Row>
              </Section>
            ))}
          </Section>
          <Hr className="mx-0 my-6 w-full border border-solid border-[#eaeaea]" />
          <Text className="mt-4 text-lg">
            Hemen kafeasist&apos;i kullanmaya başlamak için aşağıdaki butona
            tıklayın.
          </Text>
          <Section className="my-8 text-center">
            <Button
              className="w-full bg-black py-3 text-center font-semibold text-white"
              href={baseUrl + "/panel"}
            >
              Hemen Başla
            </Button>
          </Section>
          <Hr className="mx-0 my-6 w-full border border-solid border-[#eaeaea]" />
          <Text className="mt-4 text-slate-500">
            Eğer bu e-postayı alıyorsanız ancak kafeasist hesabı
            oluşturmadıysanız, lütfen bu mesajı dikkate almayın.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default Welcome;
