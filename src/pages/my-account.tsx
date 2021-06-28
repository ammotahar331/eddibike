import type { PageProps, PageWithLayout } from "@types";
import type { GetStaticProps } from "next";

import MyAccount from "@templates/MyAccount";
import { noLayout } from "@layouts";
import { useTranslations } from "next-intl";

interface MyAccountProps extends PageProps {}

const MyAccountPage: PageWithLayout<MyAccountProps> = function () {
  const t = useTranslations();
  return <MyAccount title={t("title") as string} />;
};

export const getStaticProps: GetStaticProps<MyAccountProps> = async ({
  locale,
}) => {
  return {
    props: {
      messages: {
        ...require(`../locales/${locale}/myAccount.json`),
        ...require(`../locales/${locale}/common.json`),
      },
    },
  };
};

MyAccountPage.getLayout = (page) => noLayout(page);

export default MyAccountPage;
