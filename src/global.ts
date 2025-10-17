// Global Site Data
const currentYear = new Date().getFullYear();
export const siteData = {
    name: "altKod",
    lang: "en-US",
    ogLang: "en_US",
    langSchema: "en",
    copyright: `altKod - ${currentYear} | All Rights Reserved`,
    ver: "0.0.1",
    url: "https://altkod.com",
    cmsURL: "https://altkod.apollo.filipsteficar.com"
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
        label: "Learning Center",
        href: "/learning-center"
    }
]
// Contact Info
export const contactInfo = {
    email: "info@altkod.com",
    address: "Gornja Reka 103, 10450 Jastrebarsko, Croatia"
}
// Social Media
export const socialMedia = {
    instagram: "https://instagram.com/altkod_com",
    facebook: "https://facebook.com/altkod",
    linkedin: "https://linkedin.com/company/altkodcom",
    youtube: "https://youtube.com/@altkod_com"
}