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
    href: "#home",
  },
  {
    title: "Инструкция",
    href: "#home",
  },
  {
    title: "Преимущества",
    href: "#home",
  },
  {
    title: "Отзывы",
    href: "#home",
  },
  {
    title: "Вопросы и ответы",
    href: "#home",
  },
]

export const actionButtons: ActionButton[] = [
  {
    title: "Я нанимаю",
    href: "#home",
    external: true,
  },
  {
    title: "Я ищу проект",
    href: "#home",
    external: true,
  },
]

export const footerLinks: FooterLink[] = [
  {
    title: "Условия использования Relevants",
    href: "#home",
    external: true,
  },
  {
    title: "Политика обработки данных",
    href: "#home",
    external: true,
  },
  {
    title: "Связаться с нами",
    href: "#home",
    external: true,
  },
  {
    title: "Я исполнитель",
    href: "#home",
    external: true,
    special: true,
  },
] 