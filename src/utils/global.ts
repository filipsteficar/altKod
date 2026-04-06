// Global Site Data
// Current Year
const currentYear = new Date().getFullYear();
// Site Data
export const siteData = {
    website: "nTiling",
    author: "altKod",
    developer: "Filip Štefičar",
    developerURL: "https://filipsteficar.com",
    lang: "en-US",
    ogLang: "en_US",
    langSchema: "en",
    copyright: `altKod - ${currentYear} | All Rights Reserved`,
    url: "https://altKod.com",
    cmsURL: "#",
    graphQL: "#"
}
// Define the MenuItem Interface
interface MenuItem {
    label: string
    href: string
    isExternal?: boolean
}
// Main Menu
export const mainMenu: MenuItem[] = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Blog",
        href: "/blog"
    },
    {
        label: "Hosting",
        href: "/hosting"
    },
    {
        label: "Contact",
        href: "/contact"
    }
]
// Contact Info
export const contactInfo = {
    email: "info@altkod.com"
}