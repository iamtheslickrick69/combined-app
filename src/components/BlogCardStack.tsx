import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BlogModal } from "./BlogModal"

interface BlogPost {
  id: number
  title: string
  description: string
  category: string
  readTime: string
  image: string
  content: string
}

const placeholderContent = `# Placeholder Content

## The Shift from Experimentation to Execution

The AI revolution isn't coming—it's already here. But there's a critical difference between having access to AI and actually implementing it in ways that transform your business. Most organizations are stuck in the experimentation phase, running pilot after pilot without ever achieving meaningful results.

## Why 95% of AI Pilots Fail

The data is sobering: according to Gartner, only 53% of AI projects make it from prototype to production. And of those that do, many fail to deliver the promised ROI. The problem isn't the technology—it's the implementation.

**Common failure points:**
- Lack of clear business objectives
- Insufficient data infrastructure
- Resistance from existing teams
- No change management strategy
- Unrealistic timeline expectations

## The Implementation Mindset

Successful AI implementation requires a fundamental shift in thinking. It's not about finding the coolest technology—it's about solving real business problems.

**Key principles:**
1. Start with the business problem, not the AI solution
2. Build cross-functional teams from day one
3. Plan for change management before writing code
4. Measure everything, but focus on business outcomes
5. Accept that iteration is the path to success

## The ROI of Proper Implementation

Organizations that get implementation right see dramatic results:
- 30-50% reduction in operational costs
- 2-3x improvement in customer satisfaction scores
- 40% faster time-to-market for new products
- 25% increase in employee productivity

## Building Your Implementation Roadmap

**Phase 1: Foundation (Months 1-3)**
- Audit existing data infrastructure
- Identify high-impact, low-complexity use cases
- Build core team and governance structure

**Phase 2: Pilot (Months 4-6)**
- Execute 2-3 focused pilots
- Establish feedback loops
- Document learnings and iterate

**Phase 3: Scale (Months 7-12)**
- Roll out successful pilots
- Build internal AI capabilities
- Create center of excellence

## The Bottom Line

The companies that will dominate the next decade aren't those with the most AI experiments—they're the ones that master implementation. The technology is ready. The question is: are you?

---

*Content coming soon. Check back for the full article.*`

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "AI Is Here - Implementation Is What's Coming",
    description: "Strategic AI Implementation",
    category: "AI Strategy",
    readTime: "6 min read",
    image: "/modern-office-desk-with-laptop-and-coffee.jpg",
    content: `# AI Is Here - Implementation Is What's Coming

## The Shift from Experimentation to Execution

The AI revolution isn't coming—it's already here. But there's a critical difference between having access to AI and actually implementing it in ways that transform your business. Most organizations are stuck in the experimentation phase, running pilot after pilot without ever achieving meaningful results.

## Why 95% of AI Pilots Fail

The data is sobering: according to Gartner, only 53% of AI projects make it from prototype to production. And of those that do, many fail to deliver the promised ROI. The problem isn't the technology—it's the implementation.

**Common failure points:**
- Lack of clear business objectives
- Insufficient data infrastructure
- Resistance from existing teams
- No change management strategy
- Unrealistic timeline expectations

## The Implementation Mindset

Successful AI implementation requires a fundamental shift in thinking. It's not about finding the coolest technology—it's about solving real business problems.

**Key principles:**
1. Start with the business problem, not the AI solution
2. Build cross-functional teams from day one
3. Plan for change management before writing code
4. Measure everything, but focus on business outcomes
5. Accept that iteration is the path to success

## The ROI of Proper Implementation

Organizations that get implementation right see dramatic results:
- 30-50% reduction in operational costs
- 2-3x improvement in customer satisfaction scores
- 40% faster time-to-market for new products
- 25% increase in employee productivity

## Building Your Implementation Roadmap

**Phase 1: Foundation (Months 1-3)**
- Audit existing data infrastructure
- Identify high-impact, low-complexity use cases
- Build core team and governance structure

**Phase 2: Pilot (Months 4-6)**
- Execute 2-3 focused pilots
- Establish feedback loops
- Document learnings and iterate

**Phase 3: Scale (Months 7-12)**
- Roll out successful pilots
- Build internal AI capabilities
- Create center of excellence

## The Bottom Line

The companies that will dominate the next decade aren't those with the most AI experiments—they're the ones that master implementation. The technology is ready. The question is: are you?

---

*Ready to move from experimentation to implementation? Start with a single, high-impact use case and build from there.*`,
  },
  {
    id: 2,
    title: "How Payment Processors Hold Your Data Hostage",
    description: "Breaking Free from Data Lock-in",
    category: "Payments",
    readTime: "8 min read",
    image: "/credit-cards-and-padlock-on-dark-surface.jpg",
    content: `# How Payment Processors Hold Your Data Hostage and How to Fight Back

## The Hidden Cost of Convenience

Every time you swipe a card, tap to pay, or process an online transaction, you're feeding a system designed to keep you captive. Payment processors have mastered the art of data lock-in, and most businesses don't realize they're trapped until it's too late.

## The 7 Ways Processors Trap Your Data

**1. Proprietary Tokenization**
Your customers' card data gets converted into tokens that only work with that specific processor. Switch providers? Those tokens are useless.

**2. Subscription Billing Locks**
Recurring payment data—the lifeblood of SaaS companies—often can't be migrated. Cancel your processor, lose your subscribers.

**3. Transaction History Isolation**
Years of valuable transaction data, stuck in formats only their systems can read. Export options? Limited at best, nonexistent at worst.

**4. API Dependency Chains**
The deeper you integrate, the harder you're locked in. Custom integrations become technical debt that's expensive to unwind.

**5. Vault Systems**
Secure card storage sounds great until you realize you can't take those cards with you when you leave.

**6. Contract Bundling**
Long-term contracts with early termination fees ensure you think twice before switching, even when there's a better option.

**7. Network Effect Traps**
The more customers you process, the more the processor knows about your business—intelligence that doesn't transfer.

## Real Case Studies

**The E-commerce Nightmare**
A mid-size retailer spent 18 months trying to switch processors. Cost: $2.3 million in integration work, lost transaction data, and customer churn from failed recurring payments.

**The SaaS Catastrophe**
A subscription company lost 12% of their recurring revenue during migration because customer payment methods couldn't be transferred.

## The Fight-Back Checklist

**Before You Sign:**
- Demand data portability clauses in contracts
- Verify token interoperability standards
- Get export specifications in writing
- Negotiate reasonable termination terms

**While You're In:**
- Maintain parallel records of all transaction data
- Use processor-agnostic tokenization where possible
- Document all custom integrations
- Regular backup of all accessible data

**When You're Leaving:**
- Plan 6-12 months ahead for major migrations
- Communicate proactively with customers
- Stage the transition to minimize disruption
- Never let the old processor know until you're ready

## The Future of Payment Freedom

Open banking standards, blockchain-based payments, and regulatory pressure are slowly chipping away at processor power. But until then, arm yourself with knowledge and contracts that protect your interests.

---

*Your payment data is your business asset. Treat it that way.*`,
  },
  {
    id: 3,
    title: "Use AI or AI Will Use You",
    description: "The Leverage Equation",
    category: "AI Strategy",
    readTime: "7 min read",
    image: "/mountain-peak-at-sunrise-with-clouds.jpg",
    content: `# Use AI or AI Will Use You: The Leverage Equation

## The Binary Choice

There's no neutral position in the AI revolution. You're either leveraging AI to amplify your capabilities, or you're being disrupted by competitors who are. The middle ground—waiting to see how things play out—is the most dangerous position of all.

## How Competitors Leverage AI Against You

**Speed Advantage**
While you deliberate, AI-enabled competitors are:
- Processing market data in real-time
- Responding to customer inquiries 24/7
- Iterating on products at 10x speed
- Identifying opportunities you'll never see

**Cost Arbitrage**
AI doesn't sleep, doesn't take breaks, and gets cheaper every year. Companies using AI effectively are:
- Reducing operational costs by 40-60%
- Reallocating savings to growth
- Outspending you on what matters while spending less overall

**Intelligence Compounding**
Every interaction feeds the AI. The longer competitors use AI, the smarter their systems get, while yours... don't exist yet.

## The 12-Month Tale of Two Companies

**Company A: The Wait-and-See Approach**
- Month 1-3: "Let's monitor AI developments"
- Month 4-6: "We should probably look into this"
- Month 7-9: "Started evaluation process"
- Month 10-12: "Still comparing vendors"
Result: Zero AI capabilities, watching competitors pull ahead

**Company B: The Action Approach**
- Month 1: Identified 3 high-impact use cases
- Month 2-3: Deployed first AI solution
- Month 4-6: Scaled to 5 implementations
- Month 7-9: AI handling 40% of routine tasks
- Month 10-12: Reinvesting savings into R&D
Result: Significant competitive advantage, accelerating growth

## The Implementation Playbook

**Week 1-2: Audit**
- Identify repetitive tasks across departments
- Map data flows and decision points
- Survey team pain points

**Week 3-4: Prioritize**
- Score opportunities by impact and feasibility
- Select 2-3 quick wins
- Identify one transformative initiative

**Month 2: Execute**
- Deploy first solution
- Measure relentlessly
- Share wins internally

**Month 3+: Scale**
- Add capabilities monthly
- Build internal expertise
- Create AI governance framework

## The Hidden Costs of Inaction

**Talent Drain**
Top performers want to work with cutting-edge tools. Lag on AI, lose your best people to companies that don't.

**Market Perception**
Customers and partners are watching. Being seen as a technology laggard affects everything from sales to partnerships to valuations.

**Technical Debt**
Every month without AI, you're building systems that will need to be retrofitted. The longer you wait, the more expensive the eventual transition.

## Making the Decision

The question isn't whether to use AI—it's how fast you can start. Every day of delay is a day your competitors are pulling ahead.

**Start today:**
1. Identify one process AI could improve
2. Talk to your team about it
3. Set a 30-day deadline to have something running

The AI revolution rewards action. Punishes hesitation. Which side do you want to be on?

---

*The best time to start with AI was yesterday. The second best time is now.*`,
  },
  {
    id: 4,
    title: "The Chessboard Has Been Leveled",
    description: "Small Players Now Compete with Giants",
    category: "Business",
    readTime: "5 min read",
    image: "/chess-board-close-up-strategic-game.jpg",
    content: placeholderContent.replace("# Placeholder Content", "# The Chessboard Has Been Leveled"),
  },
  {
    id: 5,
    title: "Who Owns Your Data?",
    description: "The Battle for Digital Sovereignty",
    category: "Data Privacy",
    readTime: "6 min read",
    image: "/server-room-with-blue-lights.jpg",
    content: placeholderContent.replace("# Placeholder Content", "# Who Owns Your Data?"),
  },
  {
    id: 6,
    title: "Why 95% of AI Projects Fail",
    description: "And How to Be in the 5%",
    category: "AI Strategy",
    readTime: "7 min read",
    image: "/empty-modern-conference-room-with-whiteboard.jpg",
    content: placeholderContent.replace("# Placeholder Content", "# Why 95% of AI Projects Fail"),
  },
]

interface Card {
  id: number
  contentType: number
}

const initialCards: Card[] = [
  { id: 1, contentType: 0 },
  { id: 2, contentType: 1 },
  { id: 3, contentType: 2 },
]

const positionStyles = [
  { scale: 1, y: 12 },
  { scale: 0.95, y: -16 },
  { scale: 0.9, y: -44 },
]

const exitAnimation = {
  y: 340,
  scale: 1,
  zIndex: 10,
}

const enterAnimation = {
  y: -16,
  scale: 0.9,
}

function CardContent({
  contentType,
  onReadClick,
}: {
  contentType: number
  onReadClick: () => void
}) {
  const post = blogPosts[contentType % blogPosts.length]

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="relative -outline-offset-1 flex h-[200px] w-full items-center justify-center overflow-hidden rounded-lg outline outline-white/10">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="h-full w-full select-none object-cover"
        />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black shadow-sm">
            {post.category}
          </span>
        </div>
        <div className="absolute right-3 top-3">
          <span className="rounded-full bg-black/80 px-2.5 py-1 text-xs font-medium text-white shadow-sm backdrop-blur-sm">
            {post.readTime}
          </span>
        </div>
      </div>
      <div className="flex w-full items-center justify-between gap-2 px-3 pb-6">
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate font-semibold text-white">{post.title}</span>
          <span className="text-sm text-gray-400">{post.description}</span>
        </div>
        <button
          onClick={onReadClick}
          className="flex h-10 shrink-0 cursor-pointer select-none items-center gap-0.5 rounded-full bg-white pl-4 pr-3 text-sm font-medium text-black transition-transform hover:scale-105 hover:bg-gray-100 active:scale-95"
        >
          Read
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="square"
          >
            <path d="M9.5 18L15.5 12L9.5 6" />
          </svg>
        </button>
      </div>
    </div>
  )
}

function AnimatedCard({
  card,
  index,
  isAnimating,
  onReadClick,
}: {
  card: Card
  index: number
  isAnimating: boolean
  onReadClick: () => void
}) {
  const { scale, y } = positionStyles[index] ?? positionStyles[2]
  const zIndex = index === 0 && isAnimating ? 10 : 3 - index

  const exitAnim = index === 0 ? exitAnimation : undefined
  const initialAnim = index === 2 ? enterAnimation : undefined

  return (
    <motion.div
      key={card.id}
      initial={initialAnim}
      animate={{ y, scale }}
      exit={exitAnim}
      transition={{
        type: "spring",
        duration: 1,
        bounce: 0,
      }}
      style={{
        zIndex,
        left: "50%",
        x: "-50%",
        bottom: 0,
      }}
      className="absolute flex h-[280px] w-[324px] items-center justify-center overflow-hidden rounded-t-xl border-x border-t border-white/10 bg-zinc-900 p-1 shadow-lg will-change-transform sm:w-[512px]"
    >
      <CardContent contentType={card.contentType} onReadClick={onReadClick} />
    </motion.div>
  )
}

export function BlogCardStack() {
  const [cards, setCards] = useState(initialCards)
  const [isAnimating, setIsAnimating] = useState(false)
  const [nextId, setNextId] = useState(4)
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

  const handleAnimate = () => {
    setIsAnimating(true)

    const nextContentType = (cards[2].contentType + 1) % blogPosts.length

    setCards([...cards.slice(1), { id: nextId, contentType: nextContentType }])
    setNextId((prev) => prev + 1)
    setIsAnimating(false)
  }

  const handleReadClick = (contentType: number) => {
    setSelectedPost(blogPosts[contentType % blogPosts.length])
  }

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center pt-2">
        <div className="relative h-[380px] w-full overflow-hidden sm:w-[644px]">
          <AnimatePresence initial={false}>
            {cards.slice(0, 3).map((card, index) => (
              <AnimatedCard
                key={card.id}
                card={card}
                index={index}
                isAnimating={isAnimating}
                onReadClick={() => handleReadClick(card.contentType)}
              />
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-8 flex w-full items-center justify-center">
          <button
            onClick={handleAnimate}
            className="flex h-10 cursor-pointer select-none items-center justify-center gap-1 overflow-hidden rounded-full bg-white px-6 font-medium text-black transition-all hover:bg-gray-100 active:scale-95"
          >
            Next Article
          </button>
        </div>
      </div>

      <BlogModal
        isOpen={selectedPost !== null}
        onClose={() => setSelectedPost(null)}
        title={selectedPost?.title ?? ""}
        content={selectedPost?.content ?? ""}
        category={selectedPost?.category}
        readTime={selectedPost?.readTime}
      />
    </>
  )
}
