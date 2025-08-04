import { SiteConfig, NavItem, ActionButton, FooterLink } from "@/types"

export const siteConfig: SiteConfig = {
  name: "Relevants",
  description: "Relevants — знакомства по делу",
  url: "https://relevants.com",
  ogImage: "https://relevants.com/og.jpg",
  links: {
    twitter: "https://twitter.com/relevants",
    github: "https://github.com/relevants",
  },
}

export const navItems: NavItem[] = [
  {
    title: "Relevants в цифрах",
    href: "/",
  },
  {
    title: "Инструкция",
    href: "/",
  },
  {
    title: "Преимущества",
    href: "/",
  },
  {
    title: "Отзывы",
    href: "/",
  },
  {
    title: "Вопросы и ответы",
    href: "/",
  },
]

export const actionButtons: ActionButton[] = [
  {
    title: "Я нанимаю",
    href: "/",
    external: true,
  },
  {
    title: "Я ищу проект",
    href: "/",
    external: true,
  },
]

export const footerLinks: FooterLink[] = [
  {
    title: "Условия использования Relevants",
    href: "/",
    external: true,
  },
  {
    title: "Политика обработки данных",
    href: "/",
    external: true,
  },
  {
    title: "Связаться с нами",
    href: "/",
    external: true,
  },
  {
    title: "Я исполнитель",
    href: "/",
    external: true,
    special: true,
  },
] 