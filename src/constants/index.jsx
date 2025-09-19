import shippingBg1 from "../assets/shipping-bg2.jpg"
import shippingBg2 from "../assets/shipping-bg.webp"
import shippingBg3 from "../assets/shipping-bg3.webp"

import serviceImg1 from "../assets/service1.jpeg"
import serviceImg2 from "../assets/service2.jpeg"
import serviceImg3 from "../assets/service3.jpg"
import serviceImg4 from "../assets/service4.jpg"

import teamImg1 from "../assets/teamImg1.jpg"
import teamImg2 from "../assets/teamImg2.jpg"
import teamImg3 from "../assets/teamImg3.jpg"
import teamImg4 from "../assets/teamImg4.jpg"


import { Rocket, ShieldCheck, Eye, Truck, Globe, Warehouse, Headphones, FastForward, Leaf, Lightbulb, Box } from "lucide-react"; 


export const navItems = [
    { label: "Home", href: "/" },
    { label: "Ship Now", href:"/ShipNow" },
    { label: "Track Shipment", href:"/TrackShipment" },
    { label: "About", href:"/About" },
    { label: "Support", href:"/Support" },
]

export const heroSlides = [
    {
        title: "Global Shipping",
        subtitle: "Made Simple",
        description:
        "Connect with customers worldwide through our extensive network. Reliable international shipping with real-time tracking and customs support.",
        primaryBtn: "Ship Internationally",
        primaryHref: "/ShipNow",
        secondaryBtn: "Learn More",
        secondaryHref: "/About",
        bgImage: shippingBg1, 
    },
    {
        title: "Secure Storage",
        subtitle: "& Fulfillment",
        description:
        "State-of-the-art warehouse facilities with advanced security systems. Complete inventory management and order fulfillment services.",
        primaryBtn: "Explore Services",
        primaryHref: "#",
        secondaryBtn: "Contact Us",
        secondaryHref: "/Support",
        bgImage: shippingBg2,
    },
    {
        title: "Fast, Reliable",
        subtitle: "Logistics Solutions",
        description:
        "Ship anywhere, track everything, deliver on time. Your trusted partner for global logistics and freight management.",
        primaryBtn: "Ship Now",
        primaryHref: "/ShipNow",
        secondaryBtn: "Get a Quote",
        secondaryHref: "/GetQuote",
        bgImage: shippingBg3,
    },
    
];


export const features = [
    {
        icon: <Rocket className="w-6 h-6 text-white" />,
        title: "Lightning Fast",
        description:
            "Express delivery options with same-day and next-day delivery available in major cities.",
        iconBg: "bg-red-500",
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-white" />,
        title: "Fully Insured",
        description:
            "Complete insurance coverage for all shipments with transparent claim process.",
        iconBg: "bg-gray-800",
    },
    {
        icon: <Eye className="w-6 h-6 text-white" />,
        title: "Real-time Tracking",
        description:
            "Live GPS tracking with detailed status updates and delivery notifications.",
        iconBg: "bg-red-500",
    },
];

export const services = [
    {
        image: serviceImg1,
        icon: <Truck className="w-6 h-6" />,
        title: "Express Delivery",
        description: "Fast nationwide delivery with real time tracking and guaranteed delivery times."
    },
    {
        image: serviceImg2,
        icon: <Globe className="w-6 h-6" />,
        title: "International Shipping",
        description: "Worldwide shipping solutions with customs clearance and door-to-door service."
    },
    {
        image: serviceImg3,
        icon: <Warehouse className="w-6 h-6" />,
        title: "Warehouse Storage",
        description: "Secure storage facilities with inventory management and distribution services."
    },
    {
        image: serviceImg4,
        icon: <Headphones className="w-6 h-6" />,
        title: "24/7 Support",
        description: "Round-the-clock customer support to assist with all your logistics needs."
    },
]

export const values = [
    {
        title: "Reliability",
        description: "We deliver on our promises with consistent, dependable service that you can trust.",
        icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
    },
    {
        title: "Speed",
        description: "Fast, efficient delivery solutions that meet your time-sensitive requirements.",
        icon: <FastForward className="w-5 h-5 text-blue-500" />,
    },
    {
        title: "Customer First",
        description: "Your satisfaction is our priority. We go above and beyond for every customer.",
        icon: <Headphones className="w-5 h-5 text-blue-500" />,
    },
    {
        title: "Global Reach",
        description: "Worldwide network ensuring your packages reach anywhere, anytime.",
        icon: <Globe className="w-5 h-5 text-blue-500" />,
    },
    {
        title: "Sustainability",
        description: "Committed to eco-friendly practices and carbon-neutral shipping options.",
        icon: <Leaf className="w-5 h-5 text-blue-500" />,
    },
    {
        title: "Innovation",
        description: "Cutting-edge technology and continuous improvement in logistics solutions.",
        icon: <Lightbulb className="w-5 h-5 text-blue-500" />,
    },
];


export const teamMembers = [
    {
        name: "Sarah Johnson",
        role: "CEO & Founder",
        description: "Leading the company with 15+ years of logistics experience.",
        image: teamImg1,
    },
    {
        name: "Michael Chen",
        role: "CTO",
        description: "Driving innovation in logistics technology and automation.",
        image: teamImg2,
    },
    {
        name: "Emily Rodriguez",
        role: "Head of Operations",
        description:
        "Ensuring seamless operations across all shipping channels.",
        image: teamImg3,
    },
    {
        name: "David Kim",
        role: "Customer Success Manager",
        description: "Dedicated to delivering exceptional customer experiences.",
        image: teamImg4,
    },
];

export const faq = [
    {
        id: "0",
        question: "How can I track my shipment?",
        answer: "You can track your shipment using the tracking number provided in your confirmation email. Simply enter the tracking number on our tracking page or use the quick track feature on the homepage."
    },
    {
        id: "1",
        question: "What are your delivery timeframes?",
        answer: "Delivery times vary by service: Standard (5-7 business days), Express (2-3 business days), Overnight (Next business day), and Same Day delivery options are available."
    },
    {
        id: "2",
        question: "How do I calculate shipping costs?",
        answer: "Shipping costs are calculated based on package dimensions, weight, destination, and delivery speed. Use our quote calculator on the homepage or Ship Now page for instant pricing."
    },
    {
        id: "3",
        question: "What items are prohibited for shipping?",
        answer: "We cannot ship hazardous materials, illegal items, perishables without proper packaging, liquids in standard packaging, and items exceeding size/weight limits. Contact us for specific item inquiries."
    },
    {
        id: "4",
        question: "How do I file an insurance claim?",
        answer: "If you purchased insurance and need to file a claim, visit our File a Claim page and provide all required documentation including photos, receipts, and the original packaging."
    },
    {
        id: "5",
        question: "Can I change my delivery address?",
        answer: "Address changes are possible before the package is dispatched. Contact our customer service immediately with your tracking number and new address details."
    },
]


export const hardcodedResults = {
        number: 'TRK987654321',
        status: 'In Transit',
        currentLocation: 'Distribution Center - Chicago, IL',
        recipient: 'John Smith',
        service: 'Express Delivery',
        origin: 'New York, NY',
        destination: 'Los Angeles, CA',
        weight: '2.5 kg',
        estimatedDelivery: '2024-01-25',
        timeline: [
            {
                icon: '📦',
                status: 'Package Picked Up',
                location: 'New York, NY',
                description: 'Package has been picked up from sender',
                date: '2024-01-20 10:30 AM'
            },
            {
                icon: '🚚',
                status: 'In Transit',
                location: 'Philadelphia, PA',
                description: 'Package is in transit to next facility',
                date: '2024-01-21 02:15 PM'
            },
            {
                icon: '🏭',
                status: 'Arrived at Facility',
                location: 'Chicago, IL',
                description: 'Package arrived at distribution center',
                date: '2024-01-22 08:45 AM'
            },
            {
                icon: '🚛',
                status: 'In Transit',
                location: 'Chicago, IL',
                description: 'Package departed facility',
                date: '2024-01-23 11:20 AM'
            },
            {
                icon: '📦',
                status: 'Out for Delivery',
                location: 'Los Angeles, CA',
                description: 'Package will be delivered today',
                date: '2024-01-25 Estimated'
            }
            ]
        };

export const sampleTrackingNumbers = [
        'TRK123456789',
    ]