import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative z-10 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Brand and Description */}
          <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
            <div className="mb-10 w-full">
              <a href="/#" className="mb-6 inline-block max-w-[160px]">
                <h1 className="text-3xl font-serif font-bold text-red-600">
                  {t("footer.brand")}
                </h1>
              </a>
              <p className="mb-7 text-base text-body-color dark:text-dark-6">
                {t("footer.description")}
              </p>
              <p className="flex items-center text-sm font-medium text-dark dark:text-white">
                <span className="mr-3 text-primary">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1875 19.4688C14.3438 19.4688 13.375 19.25 12.3125 18.8438C10.1875 18 7.84377 16.375 5.75002 14.2813C3.65627 12.1875 2.03127 9.84377 1.18752 7.68752C0.250019 5.37502 0.343769 3.46877 1.43752 2.40627C1.46877 2.37502 1.53127 2.34377 1.56252 2.31252L4.18752 0.750025C4.84377 0.375025 5.68752 0.562525 6.12502 1.18752L7.96877 3.93753C8.40627 4.59378 8.21877 5.46877 7.59377 5.90627L6.46877 6.68752C7.28127 8.00002 9.59377 11.2188 13.2813 13.5313L13.9688 12.5313C14.5 11.7813 15.3438 11.5625 16.0313 12.0313L18.7813 13.875C19.4063 14.3125 19.5938 15.1563 19.2188 15.8125L17.6563 18.4375C17.625 18.5 17.5938 18.5313 17.5625 18.5625C17 19.1563 16.1875 19.4688 15.1875 19.4688Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span>{t("footer.contact.phone")}</span>
              </p>
            </div>
          </div>

          {/* Resources Section */}
          <LinkGroup header={t("footer.resources.header")}>
            <NavLink link="/#" label={t("footer.resources.links.development")} />
            <NavLink link="/#" label={t("footer.resources.links.products")} />
            <NavLink link="/#" label={t("footer.resources.links.userFlow")} />
            <NavLink link="/#" label={t("footer.resources.links.userStrategy")} />
          </LinkGroup>

          {/* Company Section */}
          <LinkGroup header={t("footer.company.header")}>
            <NavLink link="/#" label={t("footer.company.links.about")} />
            <NavLink link="/#" label={t("footer.company.links.contactSupport")} />
            <NavLink link="/#" label={t("footer.company.links.success")} />
            <NavLink link="/#" label={t("footer.company.links.privacy")} />
          </LinkGroup>

          {/* Quick Links Section */}
          <LinkGroup header={t("footer.quickLinks.header")}>
            <NavLink link="/#" label={t("footer.quickLinks.links.premiumSupport")} />
            <NavLink link="/#" label={t("footer.quickLinks.links.services")} />
            <NavLink link="/#" label={t("footer.quickLinks.links.team")} />
            <NavLink link="/#" label={t("footer.quickLinks.links.download")} />
          </LinkGroup>

          {/* Follow Us Section */}
          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
                {t("footer.followUs.header")}
              </h4>
              <p className="text-base text-body-color dark:text-dark-6">
                {t("footer.followUs.copyright")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const LinkGroup = ({ children, header }:any) => {
  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
      <div className="mb-10 w-full">
        <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
          {header}
        </h4>
        <ul className="space-y-3">{children}</ul>
      </div>
    </div>
  );
};

const NavLink = ({ link, label }:any) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
      >
        {label}
      </a>
    </li>
  );
};
