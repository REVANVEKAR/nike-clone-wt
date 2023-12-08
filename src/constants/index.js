import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";
import { customer2 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "NikexRev M C Stan",
        price: "$80000",
    },
    {
        imgURL: shoe5,
        name: "NikexRev Elvish-bhai",
        price: "$420",
    },
    {
        imgURL: shoe6,
        name: "NikexRev bopenderJogi",
        price: "$150",
    },
    {
        imgURL: shoe7,
        name: "NikexRev Aayein's?",
        price: "$690",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with your 80000 ke shoes"
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team of memers are here to help you."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Revanth Anvekar',
        rating: 4.5,
        feedback: "Aayein's? and the bhopendar Jogi's gets me a lot of attention in the club"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "Nike x Rev is always sold out its more popular than the AJ'1s and the Travis low fragments and Reverse Mocha's!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "https://www.nike.com/in/t/air-force-1-07-shoes-WrLlWX/CW2288-111" },
            { name: "Air Max 1", link: "https://www.nike.com/in/t/air-max-1-shoes-h0SzNM/DZ2628-002" },
            { name: "Air Jordan 1", link: "https://www.nike.com/in/t/air-jordan-1-mid-shoes-SQf7DM/DQ8426-106" },
            { name: "Air Force 2", link: "https://www.nike.com/in/t/air-jordan-2-origins-shoes-5M55Kr/DR8884-101" },
            { name: "Nike Waffle Racer", link: "https://www.nike.com/in/t/vaporfly-3-road-racing-shoes-xsDgvM/DV4129-601" },
            { name: "Nike Cortez", link: "https://www.nike.com/in/t/cortez-shoes-0VH7qz/DM4044-100" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@NikexRev.com", link: "mailto:revanthanvekar11@gmail.com" },
            { name: "9380671321", link: "tel:+9380671321" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo", link: "" },
    { src: twitter, alt: "twitter logo", link:""},
    { src: instagram, alt: "instagram logo",link: "https://www.instagram.com/revanth_anvekar/" },
];