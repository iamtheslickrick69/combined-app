export interface Project {
  id: number
  image: string
  title: string
  about: string
  url: string
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    image: "/references/paypro-stats.png",
    title: "PayPro",
    about: "Payment processing platform with real merchant results. Advanced analytics and seamless integration for modern businesses.",
    url: "https://example.com",
    tags: ["Payments", "Analytics", "Fintech"]
  },
  {
    id: 2,
    image: "/references/beehive-equipment.png",
    title: "BeeHive Rental & Sales",
    about: "Professional equipment rental and sales platform for every project. Comprehensive inventory management and customer service.",
    url: "https://example.com",
    tags: ["E-commerce", "Rental", "Equipment"]
  },
  {
    id: 3,
    image: "/references/haestus-hero.png",
    title: "Haestus",
    about: "The age of AI is the rematch between David and Goliath. Empowering businesses to compete with enterprise-level AI tools.",
    url: "https://example.com",
    tags: ["AI", "Business", "Enterprise"]
  },
  {
    id: 4,
    image: "/references/tiremax-ai.png",
    title: "TireMax AI",
    about: "Take your tire shopping experience to the MAX with AI-powered recommendations and smart inventory matching.",
    url: "https://example.com",
    tags: ["AI", "E-commerce", "Automotive"]
  },
  {
    id: 5,
    image: "/references/loopsync-coro.png",
    title: "LoopSync / Coro",
    about: "The #1 platform to collect real feedback from employees. Secure, anonymous communication that drives meaningful insights.",
    url: "https://example.com",
    tags: ["HR", "Feedback", "Analytics"]
  },
  {
    id: 6,
    image: "/references/cbsc-cleaners.png",
    title: "CBSC Screen Cleaners",
    about: "Simple from design to delivery - NASA-inspired technology for screen cleaning solutions that are safe and effective.",
    url: "https://example.com",
    tags: ["Product", "Technology", "Innovation"]
  },
  {
    id: 7,
    image: "/references/haestus-services.png",
    title: "Haestus Services",
    about: "Transform your business with AI consulting. Strategic implementation and custom solutions for forward-thinking companies.",
    url: "https://example.com",
    tags: ["Consulting", "AI", "Strategy"]
  },
  {
    id: 8,
    image: "/references/promptlee-tool.png",
    title: "Promptlee",
    about: "Supercharge your prompts - anyone can build. No-code AI prompt engineering platform for powerful results.",
    url: "https://example.com",
    tags: ["AI", "No-code", "Prompts"]
  }
]
