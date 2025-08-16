import { SiteConfig, NavItem, ActionButton, FooterLink } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Relevants",
  description: "Relevants — знакомства по делу",
  url: "https://relevants.com",
  ogImage: "https://relevants.com/og.jpg",
  links: {
    twitter: "https://twitter.com/relevants",
    github: "https://github.com/relevants",
  },
};

export const navItems: NavItem[] = [
  {
    title: "Relevants в цифрах",
    href: "#Relevants в цифрах",
  },
  {
    title: "Преимущества",
    href: "#Преимущества",
  },
  {
    title: "Инструкция",
    href: "#Инструкция",
  },
  {
    title: "Отзывы",
    href: "#Отзывы",
  },
  {
    title: "Вопросы и ответы",
    href: "#Вопросы и ответы",
  },
];

export const actionButtons: ActionButton[] = [
  {
    title: "Я нанимаю",
    href: "https://relevants.space/for-freelancers",
    external: true,
  },
  {
    title: "Я ищу проект",
    href: "https://relevants.space/for-freelancers",
    external: true,
  },
];

export const footerLinks: FooterLink[] = [
  {
    title: "Условия использования Relevants",
    href: "https://www.relevants.space/tos.docx",
    external: true,
  },
  {
    title: "Политика обработки данных",
    href: "https://www.relevants.space/pd.docx",
    external: true,
  },
  {
    title: "Связаться с нами",
    href: "https://t.me/rele_support",
    external: true,
  },
  {
    title: "Я исполнитель",
    href: "https://relevants.space/for-freelancers",
    external: true,
    special: true,
  },
];

export const mobfooterLinks: FooterLink[] = [
  {
    title: "Связаться с нами",
    href: "https://t.me/rele_support",
    external: true,
  },
  {
    title: "Условия использования Relevants",
    href: "https://www.relevants.space/tos.docx",
    external: true,
  },
  {
    title: "Политика обработки данных",
    href: "https://www.relevants.space/pd.docx",
    external: true,
  },
  {
    title: "Я исполнитель",
    href: "https://relevants.space/for-freelancers",
    external: true,
    special: true,
  },
];
