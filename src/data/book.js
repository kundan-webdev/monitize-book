import { LAYOUT, ANIMATION } from "../constants/bookConstants";

const book = {
  meta: {
    title: "The Bahi-Khata",
    subtitle: "The Profit & Loss Statement",
    author: "CA Divya Bharadwaj",
    brand: "MONITIZE",
    tagline:
      "Every month your P&L says one thing and your bank account says another. This book explains why.",
    coverImage: "/images/cover/cover.webp",
  },

  chapters: [
    // ============================================================
    // CHAPTER 01
    // ============================================================

    {
      id: "chapter-01",
      title: "Why Does the P&L Exist?",
      intro: {
        heading: "Why Does the P&L Exist?",
        subheading:
          "The statement that confuses everyone and why that confusion is expensive.",
        kicker: "Level One",
        duration: "Five Minutes",
      },

      pages: [
        // --------------------------------------------------------
        // PAGE 01
        // --------------------------------------------------------

        {
          id: "chapter-01-page-01",
          image: "/images/chapter1/1.png",
          layout: LAYOUT.IMAGE_LEFT,

          heading: "Friday Evening",

          text: `
It is a Friday evening, quarter to seven.

Arjun is in the back room of his shop in Kasba Peth the room with the
metal rack of fabric samples, the old desk fan that turns left but not right,
and the smell of sizing agent that never quite leaves.

Mehta Sir, his CA, has just walked out.

He was here for forty minutes.
          `.trim(),

          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },
        },

        // --------------------------------------------------------
        // PAGE 02
        // --------------------------------------------------------

        {
          id: "chapter-01-page-02",
          image: "/images/chapter1/2.png",
          layout: LAYOUT.IMAGE_RIGHT,

          heading: "The Number on the Paper",

          text: `
He left a printed sheet on the desk and said, as he always says:

"Accha chal raha hai. Profit mein hain."

Business is doing well.
We are in profit.

Arjun had nodded.

He said thank you.

He meant it.
          `.trim(),

          animation: {
            type: ANIMATION.SLIDE,
            duration: 1,
            delay: 0.2,
          },
        },

        // --------------------------------------------------------
        // PAGE 03
        // --------------------------------------------------------

        {
          id: "chapter-01-page-03",
          image: "/images/chapter1/3.png",
          layout: LAYOUT.FULL_IMAGE,

          heading: "₹8,400",

          text: `
And now, alone, he looks at the printed sheet.

Then at his phone.

The current account shows ₹8,400.

Then at the calendar.

Tuesday is circled in red because that is when
Rafiq Bhai's payment of ₹60,000 is due.
          `.trim(),

          animation: {
            type: ANIMATION.ZOOM,
            duration: 1.1,
            delay: 0,
          },
        },

        // --------------------------------------------------------
        // PAGE 04
        // --------------------------------------------------------

        {
          id: "chapter-01-page-04",
          image: "/images/chapter1/4.png",
          layout: LAYOUT.IMAGE_LEFT,

          heading: "The Contradiction",

          text: `
He has been in profit for eleven consecutive quarters.

He has also never once felt like he has money.

This is where Arjun's problem begins.

The P&L says one thing.

His bank account says another.
          `.trim(),

          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },
        },

        // --------------------------------------------------------
        // PAGE 05
        // --------------------------------------------------------

        {
          id: "chapter-01-page-05",
          image: "/images/chapter1/5.png",
          layout: LAYOUT.IMAGE_RIGHT,

          heading: "The Big Idea",

          text: `
A Profit & Loss statement is your business's performance record.

Not its bank statement.

Not its health check.

Its performance record.
          `.trim(),

          animation: {
            type: ANIMATION.SLIDE,
            duration: 1,
            delay: 0,
          },
        },

        // --------------------------------------------------------
        // PAGE 06
        // --------------------------------------------------------

        {
          id: "chapter-01-page-06",
          image: "/images/chapter1/6.png",
          layout: LAYOUT.CENTER,

          heading: "What Does the P&L Measure?",

          text: `
The P&L measures one thing:

How your business performed over a period of time.

What it earned.

What it spent to earn it.

What was left after all the spending.

It does not measure what cash arrived.

It does not measure what you have right now.

It measures what happened economically, not physically.
          `.trim(),

          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },
        },

        // --------------------------------------------------------
        // PAGE 07
        // --------------------------------------------------------

        {
          id: "chapter-01-page-07",
          image: "/images/chapter1/7.png",
          layout: LAYOUT.IMAGE_LEFT,

          heading: "Two Different Questions",

          text: `
The P&L is answering:

"How did your business perform last month?"

The bank account is answering:

"How much cash do you have right now?"

These are not the same question.

And not understanding this difference is one of the most expensive
confusions in Indian small business.
          `.trim(),

          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },
        },

        // --------------------------------------------------------
        // PAGE 08
        // --------------------------------------------------------

        {
          id: "chapter-01-page-08",
          image: "/images/chapter1/8.png",
          layout: LAYOUT.IMAGE_RIGHT,

          heading: "₹40,000 Profit. ₹8,400 Cash.",

          text: `
This is why Arjun's P&L can say ₹40,000 profit
and his bank account can show ₹8,400.

Both numbers are completely correct.

They are answering different questions.
          `.trim(),

          animation: {
            type: ANIMATION.SLIDE,
            duration: 1,
            delay: 0,
          },
        },

        // --------------------------------------------------------
        // PAGE 09
        // --------------------------------------------------------

        {
          id: "chapter-01-page-09",
          image: "/images/chapter1/9.png",
          layout: LAYOUT.QUOTE,

          heading: "",

          text:
            "The P&L measures what was earned. The bank measures what arrived. They are two different questions.",

          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },
        },

        // --------------------------------------------------------
        // PAGE 10
        // --------------------------------------------------------

        {
          id: "chapter-01-page-10",
          image: "/images/chapter1/10.png",
          layout: LAYOUT.FULL_IMAGE,

          heading: "Arjun's P&L",

          text: "",

          animation: {
            type: ANIMATION.ZOOM,
            duration: 1.2,
            delay: 0,
          },

          data: {
            type: "financial-table",

            rows: [
              {
                label: "Revenue from Operations",
                description: "Garments Sold",
                value: "₹1,20,000",
              },

              {
                label: "Cost of Goods Sold",
                description: "Garments purchased",
                value: "₹60,000",
              },

              {
                label: "Employee Cost",
                description: "Ramu's salary",
                value: "₹10,000",
              },

              {
                label: "Rent",
                description: "Kasba Peth",
                value: "₹8,000",
              },

              {
                label: "Other Expenses",
                description: "Transport, packaging",
                value: "₹2,000",
              },

              {
                label: "TOTAL EXPENSES",
                value: "₹80,000",
                emphasis: true,
              },

              {
                label: "NET PROFIT",
                value: "₹40,000",
                emphasis: true,
              },
            ],
          },
        },

        // --------------------------------------------------------
        // PAGE 11
        // --------------------------------------------------------

        {
          id: "chapter-01-page-11",
          image: "/images/chapter1/11.png",
          layout: LAYOUT.IMAGE_LEFT,

          heading: "But the Bank Says ₹8,400",

          text: `
Net Profit: ₹40,000.

But Arjun's bank shows ₹8,400.

The reason:

He sold ₹50,000 worth of garments to a wholesale buyer
in Vashi on credit.

The garments left the shop.

An invoice was raised.

The obligation to pay was created.

The P&L records the sale as complete because economically,
it is complete.

The cash has not arrived yet.
          `.trim(),

          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },
        },

        // --------------------------------------------------------
        // PAGE 12
        // --------------------------------------------------------

        {
          id: "chapter-01-page-12",
          image: "/images/chapter1/12.png",
          layout: LAYOUT.IMAGE_RIGHT,

          heading: "Two Separate Events",

          text: `
These are two separate events.

The P&L is designed to track the first one,
not the second.

Income is recorded when it is earned,
not when it is received.

Expenses are recorded when they are incurred,
not when they are paid.
          `.trim(),

          animation: {
            type: ANIMATION.SLIDE,
            duration: 1,
            delay: 0.15,
          },
        },

        // --------------------------------------------------------
        // PAGE 13
        // --------------------------------------------------------

        {
          id: "chapter-01-page-13",
          image: "/images/chapter1/13.png",
          layout: LAYOUT.CENTER,

          heading: "The Accrual Principle",

          text: `
This is called the Accrual Principle.

Income is recorded when it is earned,
not when it is received.

Expenses are recorded when they are incurred,
not when they are paid.

Arjun was not misreading his P&L.

He was asking it a question it was not designed to answer.
          `.trim(),

          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },
        },

        // --------------------------------------------------------
        // PAGE 14
        // --------------------------------------------------------

        {
          id: "chapter-01-page-14",
          image: "/images/chapter1/14.png",
          layout: LAYOUT.IMAGE_LEFT,

          heading: "Understand Deeper",

          text: `
The Accrual Principle is the foundation of accounting in India,
mandated under both Accounting Standards (AS) and Indian Accounting
Standards (Ind AS).

The logic is straightforward:

If you only record income when cash arrives, a business that sells
on credit looks permanently loss-making even while it is growing.

The Accrual Principle separates performance from cash movement.
          `.trim(),

          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },

          tag: "UNDERSTAND DEEPER",
        },

        // --------------------------------------------------------
        // PAGE 15
        // --------------------------------------------------------

        {
          id: "chapter-01-page-15",
          image: "/images/chapter1/15.png",
          layout: LAYOUT.IMAGE_RIGHT,

          heading: "Performance vs Cash",

          text: `
Performance belongs to the P&L.

Cash movement belongs to the Cash Flow Statement.

Two different measures of a business's financial reality.

Your CA is not making this up.

It is the accounting framework.
          `.trim(),

          animation: {
            type: ANIMATION.SLIDE,
            duration: 1,
            delay: 0,
          },
        },

        // --------------------------------------------------------
        // PAGE 16
        // --------------------------------------------------------

        {
          id: "chapter-01-page-16",
          image: "/images/chapter1/16.png",
          layout: LAYOUT.IMAGE_LEFT,

          heading: "India Wall",

          text: `
Over 14 lakh companies registered under the Companies Act 2013
file a Profit & Loss statement with the Ministry of Corporate Affairs
every year.

A proprietorship like Arjun's is not legally required to prepare one,
but the business owners who do prepare one regularly are the ones who
can explain, at any moment, exactly why their profit and their cash
balance are different numbers.

That ability is worth more than the time it takes to learn it.
          `.trim(),

          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },

          tag: "INDIA WALL",
        },

        // --------------------------------------------------------
        // PAGE 17
        // --------------------------------------------------------

        {
          id: "chapter-01-page-17",
          image: "/images/chapter1/17.png",
          layout: LAYOUT.IMAGE_RIGHT,

          heading: "Founder Lens",

          text: `
When Arjun's business needs a bank loan,
the loan officer will look at his P&L first.

Specifically:

Revenue.

Gross Profit.

Net Profit.

And their trends over time.

A business that shows consistent profit,
even if cash has been tight, is a better credit risk
than one that cannot produce a P&L at all.
          `.trim(),

          animation: {
            type: ANIMATION.SLIDE,
            duration: 1,
            delay: 0,
          },

          tag: "FOUNDER LENS",
        },

        // --------------------------------------------------------
        // PAGE 18
        // --------------------------------------------------------

        {
          id: "chapter-01-page-18",
          image: "/images/chapter1/18.png",
          layout: LAYOUT.CENTER,

          heading: "Smart Question",

          text: `
The right question to ask your CA after receiving a P&L is:

"How much of this revenue has actually been collected?"

That number collected versus recognised tells you where your cash is.
          `.trim(),

          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },

          tag: "SMART QUESTION",
        },

        // --------------------------------------------------------
        // PAGE 19
        // --------------------------------------------------------

        {
          id: "chapter-01-page-19",
          image: "/images/chapter1/19.png",
          layout: LAYOUT.IMAGE_LEFT,

          heading: "Quick Challenge · Level 1",

          text: `
Arjun's business this month:

Sales invoiced: ₹90,000
Goods purchased: ₹45,000
Salaries: ₹9,000
Rent: ₹7,000

But ₹30,000 of the invoiced sales has not yet been paid by the buyer.

What does his P&L show as Net Profit?
          `.trim(),

          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },

          challenge: {
            options: [
              {
                id: "A",
                text:
                  "₹29,000 only counting sales that have been collected in cash",
              },
              {
                id: "B",
                text:
                  "₹29,000 full revenue minus all expenses, regardless of collection",
              },
              {
                id: "C",
                text: "₹59,000 the total revenue invoiced",
              },
              {
                id: "D",
                text:
                  "₹4,000 after deducting the uncollected ₹30,000 from profit",
              },
            ],

            correctAnswer: "B",
          },
        },

        // --------------------------------------------------------
        // PAGE 20
        // --------------------------------------------------------

        {
          id: "chapter-01-page-20",
          image: "/images/chapter1/20.png",
          layout: LAYOUT.IMAGE_RIGHT,

          heading: "Answer: B · ₹29,000",

          text: `
The P&L records all ₹90,000 in sales because the invoices were raised
and the obligation to pay was created under accrual accounting.

Total expenses:

₹45,000 + ₹9,000 + ₹7,000 = ₹61,000

Net Profit:

₹90,000 − ₹61,000 = ₹29,000

The uncollected ₹30,000 is a debtor on the Balance Sheet,
not a reduction of P&L profit.
          `.trim(),

          animation: {
            type: ANIMATION.SLIDE,
            duration: 1,
            delay: 0,
          },

          tag: "ANSWER",
        },

        // --------------------------------------------------------
        // PAGE 21
        // --------------------------------------------------------

        {
          id: "chapter-01-page-21",
          image: "/images/chapter1/21.png",
          layout: LAYOUT.QUOTE,

          heading: "Key Takeaway",

          text: `
The P&L answers:

How did the business perform?

The bank statement answers:

How much cash do we have?

These are different questions.

The day you stop confusing them is the day
you start reading your financial statements.
          `.trim(),

          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },
        },

        // --------------------------------------------------------
        // PAGE 22
        // --------------------------------------------------------

        {
          id: "chapter-01-page-22",
          image: "/images/chapter1/22.png",
          layout: LAYOUT.FULL_IMAGE,

          heading: "Chapter One Complete",

          text: "",

          animation: {
            type: ANIMATION.ZOOM,
            duration: 1.2,
            delay: 0,
          },
        },
      ],
    },

    {
      id: "chapter-02",

      title: "The Anatomy of a P&L",

      intro: {
        heading: "The Anatomy of a P&L",
        subheading: "Four floors. Money enters at the top.",
        kicker: "Level Two",
        duration: "Five Minutes",
      },

      pages: [
        // ==========================================================
        // PAGE 01
        // ==========================================================
    
        {
          id: "chapter-02-page-01",
    
          image: "/images/chapter2/1.png",
    
          layout: LAYOUT.IMAGE_LEFT,
    
          heading: "Three Weeks Later",
    
          text: `
    Three weeks after Mehta Sir's visit,
    the P&L is still on Arjun's desk.
    
    He has looked at it six times.
    
    Each time he starts from the bottom number —
    the profit — and works upward,
    
    trying to understand how the business got there.
    
    He does this for about a minute before giving up
    and going back to checking his WhatsApp.
          `.trim(),
    
          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },
        },
    
        // ==========================================================
        // PAGE 02
        // ==========================================================
    
        {
          id: "chapter-02-page-02",
    
          image: "/images/chapter2/2.png",
    
          layout: LAYOUT.IMAGE_RIGHT,
    
          heading: "Malhotra Saab",
    
          text: `
    One evening, Malhotra Saab —
    the retired CA who runs the tea shop next door —
    
    leans through the door.
    
    He has never once in twenty-three years of retirement
    been seen without a newspaper.
    
    He looks at Arjun.
    
    He looks at the P&L on the desk.
          `.trim(),
    
          animation: {
            type: ANIMATION.SLIDE,
            duration: 1,
            delay: 0.2,
          },
        },
    
        // ==========================================================
        // PAGE 03
        // ==========================================================
    
        {
          id: "chapter-02-page-03",
    
          image: "/images/chapter2/3.png",
    
          layout: LAYOUT.CENTER,
    
          heading: "Read It From the Top",
    
          text: `
    "Saab, yeh P&L mujhe samajh nahi aata.
    Numbers toh hain, par..."
    
    Arjun pauses.
    
    Malhotra Saab looks at the P&L.
          `.trim(),
    
          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },
    
          dialogue: {
            speaker: "Malhotra Saab",
    
            text:
              "Read it from the top. Every time you read it from the bottom, you are reading a story backwards. You know the ending, not the plot.",
          },
        },
    
        // ==========================================================
        // PAGE 04
        // ==========================================================
    
        {
          id: "chapter-02-page-04",
    
          image: "/images/chapter2/4.png",
    
          layout: LAYOUT.FULL_IMAGE,
    
          heading: "The Structure",
    
          text: `
    A P&L is built like a building:
    
    Money enters at the top.
    
    Expenses are deducted floor by floor.
    
    What survives to the basement is yours.
          `.trim(),
    
          animation: {
            type: ANIMATION.ZOOM,
            duration: 1,
            delay: 0,
          },
    
          tag: "THE STRUCTURE",
        },
    
        // ==========================================================
        // PAGE 05
        // ==========================================================
    
        {
          id: "chapter-02-page-05",
    
          image: "/images/chapter2/5.png",
    
          layout: LAYOUT.IMAGE_LEFT,
    
          heading: "Every P&L Has a Direction",
    
          text: `
    Every P&L in India follows a vertical format,
    mandated by Schedule III of the Companies Act 2013.
    
    Revenue at the top.
    
    Expenses in the middle.
    
    Profit at the bottom.
    
    The structure is not accounting convention.
    
    It is logic.
    
    Follow the money down.
          `.trim(),
    
          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },
        },
    
        // ==========================================================
        // PAGE 06
        // ==========================================================
    
        {
          id: "chapter-02-page-06",
    
          image: "/images/chapter2/6.png",
    
          layout: LAYOUT.CENTER,
    
          heading: "Floor 1 · Revenue",
    
          text: `
    All money earned from the business:
    
    Sales.
    
    Services.
    
    Commissions.
    
    This is where the P&L begins.
    
    Nothing comes before this.
          `.trim(),
    
          animation: {
            type: ANIMATION.SLIDE,
            duration: 1,
            delay: 0,
          },
    
          floor: {
            number: 1,
            title: "REVENUE",
          },
        },
    
        // ==========================================================
        // PAGE 07
        // ==========================================================
    
        {
          id: "chapter-02-page-07",
    
          image: "/images/chapter2/7.png",
    
          layout: LAYOUT.IMAGE_RIGHT,
    
          heading: "Floor 2 · Cost of Goods Sold",
    
          text: `
    The direct cost of what you sold.
    
    Arjun's garments.
    
    A restaurant's ingredients.
    
    A manufacturer's raw materials.
    
    Subtract this from Revenue to find Gross Profit.
          `.trim(),
    
          animation: {
            type: ANIMATION.SLIDE,
            duration: 1,
            delay: 0.1,
          },
    
          floor: {
            number: 2,
            title: "COST OF GOODS SOLD",
          },
        },
    
        // ==========================================================
        // PAGE 08
        // ==========================================================
    
        {
          id: "chapter-02-page-08",
    
          image: "/images/chapter2/8.png",
    
          layout: LAYOUT.IMAGE_LEFT,
    
          heading: "Floor 3 · Operating Expenses",
    
          text: `
    The costs of running the business:
    
    Salaries.
    
    Rent.
    
    Utilities.
    
    Marketing.
    
    Interest on loans.
    
    Subtract these from Gross Profit
    to find Operating Profit.
          `.trim(),
    
          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },
    
          floor: {
            number: 3,
            title: "OPERATING EXPENSES",
          },
        },
    
        // ==========================================================
        // PAGE 09
        // ==========================================================
    
        {
          id: "chapter-02-page-09",
    
          image: "/images/chapter2/9.png",
    
          layout: LAYOUT.IMAGE_RIGHT,
    
          heading: "Floor 4 · Tax",
    
          text: `
    The government's share.
    
    Deduct this from Operating Profit
    to arrive at the number that is actually yours:
    
    Profit After Tax.
          `.trim(),
    
          animation: {
            type: ANIMATION.SLIDE,
            duration: 1,
            delay: 0,
          },
    
          floor: {
            number: 4,
            title: "TAX",
          },
        },
    
        // ==========================================================
        // PAGE 10
        // ==========================================================
    
        {
          id: "chapter-02-page-10",
    
          image: "/images/chapter2/10.png",
    
          layout: LAYOUT.FULL_IMAGE,
    
          heading: "Now Read Arjun's P&L",
    
          text: `
    Arjun turns his P&L over
    and reads it from the top.
    
    Here is what he sees.
          `.trim(),
    
          animation: {
            type: ANIMATION.ZOOM,
            duration: 1.1,
            delay: 0,
          },
    
          data: {
            type: "financial-table",
    
            rows: [
              {
                section: "I. REVENUE FROM OPERATIONS",
    
                items: [
                  {
                    label: "Sale of Garments",
                    value: "₹1,20,000",
                  },
                ],
    
                totalLabel: "TOTAL REVENUE",
    
                total: "₹1,20,000",
              },
    
              {
                section: "II. COST OF GOODS SOLD",
    
                items: [
                  {
                    label: "Garments purchased — Bhiwandi supplier",
                    value: "₹60,000",
                  },
                ],
    
                totalLabel: "TOTAL COGS",
    
                total: "₹60,000",
              },
    
              {
                label: "GROSS PROFIT",
    
                value: "₹60,000",
    
                emphasis: true,
              },
            ],
          },
        },
    
        // ==========================================================
        // PAGE 11
        // ==========================================================
    
        {
          id: "chapter-02-page-11",
    
          image: "/images/chapter2/11.png",
    
          layout: LAYOUT.IMAGE_LEFT,
    
          heading: "Operating Expenses",
    
          text: `
    The next section contains the costs
    of running Arjun's business.
    
    Employee Costs.
    
    Finance Costs.
    
    Other Expenses.
          `.trim(),
    
          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },
    
          data: {
            type: "financial-table",
    
            rows: [
              {
                label: "Employee Costs",
                description: "Ramu's salary",
                value: "₹10,000",
              },
    
              {
                label: "Finance Costs",
                description: "Loan interest",
                value: "₹5,000",
              },
    
              {
                label: "Other Expenses",
                description: "Rent, transport, packaging",
                value: "₹10,000",
              },
    
              {
                label: "TOTAL OPERATING EXPENSES",
                value: "₹25,000",
                emphasis: true,
              },
            ],
          },
        },
    
        // ==========================================================
        // PAGE 12
        // ==========================================================
    
        {
          id: "chapter-02-page-12",
    
          image: "/images/chapter2/12.png",
    
          layout: LAYOUT.CENTER,
    
          heading: "Profit Before Tax",
    
          text: `
    Gross Profit:
    
    ₹60,000
    
    Operating Expenses:
    
    ₹25,000
    
    Therefore:
    
    Profit Before Tax = ₹35,000.
          `.trim(),
    
          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },
    
          calculation: {
            formula: "₹60,000 − ₹25,000",
    
            result: "₹35,000",
    
            label: "PROFIT BEFORE TAX (PBT)",
          },
        },
    
        // ==========================================================
        // PAGE 13
        // ==========================================================
    
        {
          id: "chapter-02-page-13",
    
          image: "/images/chapter2/13.png",
    
          layout: LAYOUT.IMAGE_RIGHT,
    
          heading: "Profit After Tax",
    
          text: `
    Income Tax:
    
    Approximately 20%
    
    Tax:
    
    ₹7,000
    
    Profit Before Tax:
    
    ₹35,000
    
    Profit After Tax:
    
    ₹28,000.
          `.trim(),
    
          animation: {
            type: ANIMATION.SLIDE,
            duration: 1,
            delay: 0,
          },
    
          calculation: {
            formula: "₹35,000 − ₹7,000",
    
            result: "₹28,000",
    
            label: "PROFIT AFTER TAX (PAT)",
          },
        },
    
        // ==========================================================
        // PAGE 14
        // ==========================================================
    
        {
          id: "chapter-02-page-14",
    
          image: "/images/chapter2/14.png",
    
          layout: LAYOUT.FULL_IMAGE,
    
          heading: "Three Stops to Profit",
    
          text: `
    Reading from the top, Arjun can now see
    two important stops on the way to Net Profit
    that he always missed before.
    
    Gross Profit ₹60,000 is Revenue minus COGS.
    
    Profit Before Tax ₹35,000 is Gross Profit
    after all operating costs.
    
    Profit After Tax ₹28,000 is what belongs to Arjun.
    
    Three different profit numbers.
    
    Three different questions answered.
          `.trim(),
    
          animation: {
            type: ANIMATION.ZOOM,
            duration: 1.1,
            delay: 0,
          },
        },
    
        // ==========================================================
        // PAGE 15
        // ==========================================================
    
        {
          id: "chapter-02-page-15",
    
          image: "/images/chapter2/15.png",
    
          layout: LAYOUT.QUOTE,
    
          heading: "There Is No Single Profit",
    
          text: `
    There is no single "profit" number.
    
    There is Gross Profit,
    Operating Profit,
    and Net Profit.
    
    Each one tells you something different.
    
    Each one matters.
          `.trim(),
    
          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },
        },
    
        // ==========================================================
        // PAGE 16
        // ==========================================================
    
        {
          id: "chapter-02-page-16",
    
          image: "/images/chapter2/16.png",
    
          layout: LAYOUT.IMAGE_LEFT,
    
          heading: "Gross Profit Margin",
    
          text: `
    Gross Profit Margin is one of the most important
    indicators in any business.
    
    Gross Profit ÷ Revenue
    
    For Arjun:
    
    ₹60,000 ÷ ₹1,20,000 = 50%
    
    This means that for every rupee of revenue,
    50 paise survives after paying for the goods.
    
    If Arjun's Gross Profit Margin falls,
    either his prices are too low
    or his supplier costs are too high.
          `.trim(),
    
          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },
    
          tag: "UNDERSTAND DEEPER",
    
          calculation: {
            formula: "₹60,000 ÷ ₹1,20,000",
    
            result: "50%",
    
            label: "GROSS PROFIT MARGIN",
          },
        },
    
        // ==========================================================
        // PAGE 17
        // ==========================================================
    
        {
          id: "chapter-02-page-17",
    
          image: "/images/chapter2/17.png",
    
          layout: LAYOUT.IMAGE_RIGHT,
    
          heading: "Product Economics",
    
          text: `
    A garment trader with a consistently shrinking
    Gross Profit Margin has a product economics problem.
    
    Not an expense problem.
    
    If the margin falls,
    look first at pricing and supplier costs.
    
    The product itself is telling you something.
          `.trim(),
    
          animation: {
            type: ANIMATION.SLIDE,
            duration: 1,
            delay: 0.1,
          },
    
          tag: "UNDERSTAND DEEPER",
        },
    
        // ==========================================================
        // PAGE 18
        // ==========================================================
    
        {
          id: "chapter-02-page-18",
    
          image: "/images/chapter2/18.png",
    
          layout: LAYOUT.IMAGE_LEFT,
    
          heading: "India Wall",
    
          text: `
    Schedule III of the Companies Act 2013
    mandates the vertical format for all company P&Ls.
    
    This format — top to bottom,
    revenue to profit —
    has been mandatory for all registered companies since 2014.
    
    The reason:
    
    Standardisation.
    
    A banker in Mumbai,
    an investor in Delhi,
    and a government auditor in Chennai
    can all read any Indian company's P&L
    and immediately know where each number lives.
          `.trim(),
    
          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },
    
          tag: "INDIA WALL",
        },
    
        // ==========================================================
        // PAGE 19
        // ==========================================================
    
        {
          id: "chapter-02-page-19",
    
          image: "/images/chapter2/19.png",
    
          layout: LAYOUT.IMAGE_RIGHT,
    
          heading: "Investor Lens",
    
          text: `
    An investor reading a P&L for the first time
    looks at three ratios in sequence:
    
    Gross Profit Margin —
    product economics.
    
    Operating Profit Margin —
    operational efficiency.
    
    Net Profit Margin —
    overall health.
    
    A business with high Gross Profit
    but low Net Profit has a product that works
    and an operation that does not.
    
    A business with low Gross Profit
    cannot be saved by operational efficiency alone.
          `.trim(),
    
          animation: {
            type: ANIMATION.SLIDE,
            duration: 1,
            delay: 0,
          },
    
          tag: "INVESTOR LENS",
        },
    
        // ==========================================================
        // PAGE 20
        // ==========================================================
    
        {
          id: "chapter-02-page-20",
    
          image: "/images/chapter2/20.png",
    
          layout: LAYOUT.CENTER,
    
          heading: "Red Flag",
    
          text: `
    A business where Revenue grows every year
    but Gross Profit Margin shrinks
    is a business buying growth
    at the cost of profitability.
    
    This pattern is invisible
    if you only read the bottom number.
          `.trim(),
    
          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },
    
          tag: "RED FLAG",
        },
    
        // ==========================================================
        // PAGE 21
        // ==========================================================
    
        {
          id: "chapter-02-page-21",
    
          image: "/images/chapter2/21.png",
    
          layout: LAYOUT.IMAGE_LEFT,
    
          heading: "Quick Challenge · Level 2",
    
          text: `
    Arjun's P&L for a better month shows:
    
    Revenue: ₹1,80,000
    COGS: ₹90,000
    Salaries: ₹12,000
    Rent: ₹8,000
    Finance Costs: ₹4,000
    Other Expenses: ₹6,000
    Tax: ₹15,000
    
    What is his Gross Profit
    and what is his PAT?
          `.trim(),
    
          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },
    
          challenge: {
            options: [
              {
                id: "A",
    
                text:
                  "Gross Profit ₹90,000 · PAT ₹60,000 — revenue minus COGS, then minus total expenses",
              },
    
              {
                id: "B",
    
                text:
                  "Gross Profit ₹90,000 · PAT ₹45,000 — correct all the way through",
              },
    
              {
                id: "C",
    
                text:
                  "Gross Profit ₹60,000 · PAT ₹45,000 — subtracting all expenses at once",
              },
    
              {
                id: "D",
    
                text:
                  "Gross Profit ₹90,000 · PAT ₹75,000 — stopping before tax",
              },
            ],
    
            correctAnswer: "B",
          },
        },
    
        // ==========================================================
        // PAGE 22
        // ==========================================================
    
        {
          id: "chapter-02-page-22",
    
          image: "/images/chapter2/22.png",
    
          layout: LAYOUT.IMAGE_RIGHT,
    
          heading: "Answer: B",
    
          text: `
    Gross Profit:
    
    Revenue ₹1,80,000 − COGS ₹90,000
    = ₹90,000
    
    Total Operating Expenses:
    
    ₹12,000 + ₹8,000 + ₹4,000 + ₹6,000
    = ₹30,000
    
    Profit Before Tax:
    
    ₹90,000 − ₹30,000
    = ₹60,000
    
    Tax:
    
    ₹15,000
    
    Profit After Tax:
    
    ₹60,000 − ₹15,000
    = ₹45,000
    
    Option C makes the most common error:
    treating COGS and Operating Expenses as one group,
    losing the Gross Profit calculation entirely.
          `.trim(),
    
          animation: {
            type: ANIMATION.SLIDE,
            duration: 1,
            delay: 0,
          },
    
          tag: "ANSWER",
        },
    
        // ==========================================================
        // PAGE 23
        // ==========================================================
    
        {
          id: "chapter-02-page-23",
    
          image: "/images/chapter2/23.png",
    
          layout: LAYOUT.QUOTE,
    
          heading: "Key Takeaway",
    
          text: `
    There is no single profit number.
    
    Gross Profit measures your product.
    
    Operating Profit measures your business.
    
    Net Profit measures what belongs to you.
    
    Read all three.
    
    Not just the last one.
          `.trim(),
    
          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },
        },
    
        // ==========================================================
        // PAGE 24
        // ==========================================================
    
        {
          id: "chapter-02-page-24",
    
          image: "/images/chapter2/24.png",
    
          layout: LAYOUT.FULL_IMAGE,
    
          heading: "Chapter Two Complete",
    
          text: "",
    
          animation: {
            type: ANIMATION.ZOOM,
            duration: 1.2,
            delay: 0,
          },
        },
      ],
    },

    {
      id: "chapter-03",

      title: "Revenue: Two Types of Money",

      intro: {
        heading: "Revenue: Two Types of Money",
        subheading:
          "What your business actually earns and what just happened to arrive.",
        kicker: "Level Three",
        duration: "Five Minutes",
      },

      pages: [
        // ==========================================================
        // PAGE 01
        // ==========================================================

        {
          id: "chapter-03-page-01",

          image: "/images/chapter3/1.png",

          layout: LAYOUT.IMAGE_LEFT,

          heading: "Vikram's Bakery",

          text: `
Vikram's bakery is twenty metres down the lane from Arjun's shop.

On a Tuesday morning, Vikram is standing in the doorway looking pleased.

"Arjun bhai, last month mera total income ₹95,000 tha," he says.

Arjun is about to congratulate him.
          `.trim(),

          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },
        },

        // ==========================================================
        // PAGE 02
        // ==========================================================

        {
          id: "chapter-03-page-02",

          image: "/images/chapter3/2.png",

          layout: LAYOUT.CENTER,

          heading: "Ask Him How Much",

          text: `
Malhotra Saab, who is sitting outside the tea shop with his newspaper, does not look up.

He says:
          `.trim(),

          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },

          dialogue: {
            speaker: "Malhotra Saab",
            text: "Ask him how much came from selling bread.",
          },
        },

        // ==========================================================
        // PAGE 03
        // ==========================================================

        {
          id: "chapter-03-page-03",

          image: "/images/chapter3/3.png",

          layout: LAYOUT.IMAGE_RIGHT,

          heading: "₹60,000 and ₹35,000",

          text: `
Vikram sold ₹60,000 in bread last month.

The remaining ₹35,000 was rental income from the room on the first floor of his building.

Malhotra Saab folded his newspaper. He looked at Vikram.
          `.trim(),

          animation: {
            type: ANIMATION.SLIDE,
            duration: 1,
            delay: 0,
          },

          dialogue: {
            speaker: "Malhotra Saab",
            text: "A bakery that earns 37% of its revenue from a room has a room. Not a bakery.",
          },
        },

        // ==========================================================
        // PAGE 04
        // ==========================================================

        {
          id: "chapter-03-page-04",

          image: "/images/chapter3/4.png",

          layout: LAYOUT.CENTER,

          heading: "The Split Matters More Than the Total",

          text: `
Vikram went back inside. Arjun thought about it for most of the afternoon.

Every P&L statement divides revenue into two distinct streams: Revenue from Operations and Other Income.

Together they form Total Revenue. But combined, they hide what, separated, they reveal.
          `.trim(),

          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },

          data: {
            type: "statement-comparison",

            statements: [
              {
                title: "Revenue from Operations",
                subtitle: "What your business does",
                description:
                  "What your core business earns. Arjun's garment sales. Vikram's bread. A doctor's consultation fees. If this income stops, the business stops.",
              },
              {
                title: "Other Income",
                subtitle: "What your business happens to earn",
                description:
                  "What arrived from activities that are not the main business — bank interest, dividends, rental income, a one-time commission. If this income stops, the business continues.",
              },
            ],
          },
        },

        // ==========================================================
        // PAGE 05
        // ==========================================================

        {
          id: "chapter-03-page-05",

          image: "/images/chapter3/5.png",

          layout: LAYOUT.FULL_IMAGE,

          heading: "Arjun's Revenue, Correctly Structured",

          text: "",

          animation: {
            type: ANIMATION.ZOOM,
            duration: 1.1,
            delay: 0,
          },

          data: {
            type: "financial-table",

            rows: [
              {
                section: "A. REVENUE FROM OPERATIONS",

                items: [
                  {
                    label: "Sale of Garments (core business)",
                    value: "₹1,20,000",
                  },
                ],

                totalLabel: "TOTAL Revenue from Operations",

                total: "₹1,20,000",
              },

              {
                section: "B. OTHER INCOME",

                items: [
                  {
                    label: "Interest on Current Account",
                    value: "₹1,500",
                  },
                  {
                    label: "Commission (one-time referral)",
                    value: "₹3,000",
                  },
                ],

                totalLabel: "TOTAL Other Income",

                total: "₹4,500",
              },

              {
                label: "TOTAL REVENUE (A + B)",
                value: "₹1,24,500",
                emphasis: true,
              },
            ],
          },
        },

        // ==========================================================
        // PAGE 06
        // ==========================================================

        {
          id: "chapter-03-page-06",

          image: "/images/chapter3/6.png",

          layout: LAYOUT.IMAGE_LEFT,

          heading: "What the Split Reveals",

          text: `
If you only see ₹1,24,500, you cannot evaluate the health of the garments business.

Separated, the picture is clear: the core business earns ₹1,20,000 and the ₹4,500 is a bonus — reliable this month, but not guaranteed next month.

Vikram's bakery earns ₹60,000 from bread and ₹35,000 from rent. If the tenant leaves, his revenue drops by 37% overnight.

His P&L looks strong. His business is more vulnerable than it appears.
          `.trim(),

          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },
        },

        // ==========================================================
        // PAGE 07
        // ==========================================================

        {
          id: "chapter-03-page-07",

          image: "/images/chapter3/7.png",

          layout: LAYOUT.QUOTE,

          heading: "",

          text:
            "Revenue from Operations is what your business does. Other Income is what your business happens to earn. They are not the same thing. An investor will never confuse them and neither should you.",

          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },
        },

        // ==========================================================
        // PAGE 08
        // ==========================================================

        {
          id: "chapter-03-page-08",

          image: "/images/chapter3/8.png",

          layout: LAYOUT.IMAGE_RIGHT,

          heading: "Same Activity, Different Classification",

          text: `
Here is the classification that regularly confuses even experienced business owners.

For a manufacturing company, selling leftover scrap metal after production = Other Income. That is not their main business.

For a scrap dealer, selling that same metal = Revenue from Operations. That is their entire business.

Same physical activity. Completely different classification. The P&L does not care about what happened physically. It cares about what your business exists to do.
          `.trim(),

          animation: {
            type: ANIMATION.SLIDE,
            duration: 1,
            delay: 0,
          },

          tag: "UNDERSTAND DEEPER",
        },

        // ==========================================================
        // PAGE 09
        // ==========================================================

        {
          id: "chapter-03-page-09",

          image: "/images/chapter3/9.png",

          layout: LAYOUT.IMAGE_LEFT,

          heading: "India Wall",

          text: `
Under the Income Tax Act 1961, Revenue from Operations and Other Income can carry different tax treatments.

Bank interest is taxed at your applicable slab rate. Dividends from certain instruments have special provisions. Rental income has its own deduction structure.

For a business owner filing an ITR, classifying income incorrectly can mean computing tax on the wrong base — which is one reason your CA insists on getting the revenue classification right before filing.
          `.trim(),

          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },

          tag: "INDIA WALL",
        },

        // ==========================================================
        // PAGE 10
        // ==========================================================

        {
          id: "chapter-03-page-10",

          image: "/images/chapter3/10.png",

          layout: LAYOUT.CENTER,

          heading: "Reality Check",

          text: `
A business that depends heavily on Other Income to show a profit is a business with a product problem, not an income solution.

When evaluating any business — including your own — always look at Revenue from Operations in isolation. That is the heartbeat. Other Income is the background noise.
          `.trim(),

          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },

          tag: "REALITY CHECK",
        },

        // ==========================================================
        // PAGE 11
        // ==========================================================

        {
          id: "chapter-03-page-11",

          image: "/images/chapter3/11.png",

          layout: LAYOUT.IMAGE_RIGHT,

          heading: "Smart Question",

          text: `
Ask your CA each quarter: "What percentage of our revenue came from core operations versus other sources?"

If Other Income is growing as a proportion of total revenue, ask why. The answer will tell you something important about the direction of your business.
          `.trim(),

          animation: {
            type: ANIMATION.SLIDE,
            duration: 1,
            delay: 0,
          },

          tag: "SMART QUESTION",
        },

        // ==========================================================
        // PAGE 12
        // ==========================================================

        {
          id: "chapter-03-page-12",

          image: "/images/chapter3/12.png",

          layout: LAYOUT.IMAGE_LEFT,

          heading: "Quick Challenge · Level 3",

          text: `
Rohan runs a digital marketing agency in Bengaluru. This month:

Client retainer payments ₹1,20,000
One-time branding project ₹35,000
Interest on Fixed Deposit ₹3,200
Dividend from mutual fund ₹1,800

What is his Revenue from Operations?
          `.trim(),

          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },

          challenge: {
            options: [
              {
                id: "A",
                text: "₹1,20,000 — only the recurring retainers count",
              },
              {
                id: "B",
                text: "₹1,55,000 — retainers plus the branding project",
              },
              {
                id: "C",
                text: "₹1,60,000 — everything except the dividend",
              },
              {
                id: "D",
                text: "₹1,60,000 — all income counts as operations",
              },
            ],

            correctAnswer: "B",
          },
        },

        // ==========================================================
        // PAGE 13
        // ==========================================================

        {
          id: "chapter-03-page-13",

          image: "/images/chapter3/13.png",

          layout: LAYOUT.IMAGE_RIGHT,

          heading: "Answer: B · ₹1,55,000",

          text: `
Revenue from Operations = all income from the primary business activity.

Rohan's agency does digital marketing and branding work. Both the retainers (₹1,20,000) and the branding project (₹35,000) are direct outputs of his business — active, skilled work performed for clients.

The FD interest (₹3,200) and dividend (₹1,800) are passive returns on capital. They go to Other Income.

Key test: did Rohan perform work to earn it? Yes = Operations. No = Other Income.
          `.trim(),

          animation: {
            type: ANIMATION.SLIDE,
            duration: 1,
            delay: 0,
          },

          tag: "ANSWER",
        },

        // ==========================================================
        // PAGE 14
        // ==========================================================

        {
          id: "chapter-03-page-14",

          image: "/images/chapter3/14.png",

          layout: LAYOUT.QUOTE,

          heading: "Key Takeaway",

          text: `
Revenue from Operations is what your business earns by doing what it exists to do.

Other Income is what arrived on the side.

Know the difference. A business propped up by Other Income is not a strong business — it is a business that has not yet noticed that its core is weakening.
          `.trim(),

          animation: {
            type: ANIMATION.FADE,
            duration: 1,
            delay: 0,
          },
        },
      ],
    },

    {
      id: "chapter-04",

      title: "Expenses: The Four Buckets",

      intro: {
        heading: "Expenses: The Four Buckets",
        subheading: "Where money goes and what each category tells you about your business.",
        kicker: "Level Four",
        duration: "Five Minutes",
      },

      pages: [
      // ==========================================================
      // PAGE 25
      // ==========================================================
    
      {
        id: "chapter-04-page-25",
    
        image: "/images/chapter2/25.png",
    
        layout: LAYOUT.IMAGE_LEFT,
    
        heading: "Level Four · Five Minutes",
    
        text: `
    Expenses: The Four Buckets
    
    Where money goes
    and what each category tells you about your business.
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
    
        tag: "LEVEL FOUR",
      },
    
    
      // ==========================================================
      // PAGE 26
      // ==========================================================
    
      {
        id: "chapter-04-page-26",
    
        image: "/images/chapter2/26.png",
    
        layout: LAYOUT.IMAGE_RIGHT,
    
        heading: "Which Bucket?",
    
        text: `
    August.
    
    Arjun's expenses have jumped
    from ₹80,000 last month
    to ₹94,000 this month.
    
    He does not know which line went up.
    
    He calls Mehta Sir.
    
    "Mehta Sir, expenses ₹94,000 ho gayi is mahine.
    Kya hua?"
        `.trim(),
    
        animation: {
          type: ANIMATION.SLIDE,
          duration: 1,
          delay: 0,
        },
    
        dialogue: {
          speaker: "Malhotra Saab",
    
          text: "Which bucket?",
        },
      },
    
    
      // ==========================================================
      // PAGE 27
      // ==========================================================
    
      {
        id: "chapter-04-page-27",
    
        image: "/images/chapter2/27.png",
    
        layout: LAYOUT.CENTER,
    
        heading: "₹94,000 Is Not One Thing",
    
        text: `
    Arjun has been looking at his expenses
    as one number:
    
    ₹94,000.
    
    That number went up by ₹14,000,
    but he cannot identify why.
    
    Mehta Sir is asking him
    to look at the same number
    four different ways.
    
    Because ₹94,000 is not one thing.
    
    It is four things.
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
      },
    
    
      // ==========================================================
      // PAGE 28
      // ==========================================================
    
      {
        id: "chapter-04-page-28",
    
        image: "/images/chapter2/28.png",
    
        layout: LAYOUT.FULL_IMAGE,
    
        heading: "The Four Buckets",
    
        text: `
    Every rupee a business spends
    belongs in one of four categories.
    
    Knowing which one grew
    tells you exactly where to look
    and what to do.
        `.trim(),
    
        animation: {
          type: ANIMATION.ZOOM,
          duration: 1,
          delay: 0,
        },
    
        buckets: [
          {
            number: 1,
            title: "Cost of Goods Sold",
          },
          {
            number: 2,
            title: "Employee Costs",
          },
          {
            number: 3,
            title: "Finance Costs",
          },
          {
            number: 4,
            title: "Other Expenses",
          },
        ],
      },
    
    
      // ==========================================================
      // PAGE 29
      // ==========================================================
    
      {
        id: "chapter-04-page-29",
    
        image: "/images/chapter2/29.png",
    
        layout: LAYOUT.IMAGE_LEFT,
    
        heading: "Bucket 1 · Cost of Goods Sold",
    
        text: `
    The direct cost of what you sold.
    
    For Arjun:
    the garments purchased from Bhiwandi.
    
    For a restaurant:
    the ingredients.
    
    Variable.
    
    It rises when you sell more
    and falls when you sell less.
        `.trim(),
    
        animation: {
          type: ANIMATION.SLIDE,
          duration: 1,
          delay: 0,
        },
    
        bucket: {
          number: 1,
          title: "COST OF GOODS SOLD",
        },
      },
    
    
      // ==========================================================
      // PAGE 30
      // ==========================================================
    
      {
        id: "chapter-04-page-30",
    
        image: "/images/chapter2/30.png",
    
        layout: LAYOUT.IMAGE_RIGHT,
    
        heading: "Bucket 2 · Employee Costs",
    
        text: `
    Salaries.
    
    Wages.
    
    PF contributions.
    
    ESI.
    
    Bonuses.
    
    For Arjun:
    Ramu's ₹10,000 a month.
    
    Employee costs are semi-fixed.
    
    They do not rise with every sale,
    but they are difficult to reduce quickly.
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
    
        bucket: {
          number: 2,
          title: "EMPLOYEE COSTS",
        },
      },
    
    
      // ==========================================================
      // PAGE 31
      // ==========================================================
    
      {
        id: "chapter-04-page-31",
    
        image: "/images/chapter2/31.png",
    
        layout: LAYOUT.IMAGE_LEFT,
    
        heading: "Bucket 3 · Finance Costs",
    
        text: `
    Interest on loans.
    
    Bank charges.
    
    Lease finance.
    
    For Arjun:
    interest on his working capital loan.
    
    Finance costs depend entirely
    on how much debt the business is carrying.
        `.trim(),
    
        animation: {
          type: ANIMATION.SLIDE,
          duration: 1,
          delay: 0,
        },
    
        bucket: {
          number: 3,
          title: "FINANCE COSTS",
        },
      },
    
    
      // ==========================================================
      // PAGE 32
      // ==========================================================
    
      {
        id: "chapter-04-page-32",
    
        image: "/images/chapter2/32.png",
    
        layout: LAYOUT.IMAGE_RIGHT,
    
        heading: "Bucket 4 · Other Expenses",
    
        text: `
    Rent.
    
    Utilities.
    
    Marketing.
    
    Repairs.
    
    Travel.
    
    Professional fees.
    
    Mostly fixed.
    
    They arrive every month
    regardless of sales volume.
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
    
        bucket: {
          number: 4,
          title: "OTHER EXPENSES",
        },
      },
    
    
      // ==========================================================
      // PAGE 33
      // ==========================================================
    
      {
        id: "chapter-04-page-33",
    
        image: "/images/chapter2/33.png",
    
        layout: LAYOUT.FULL_IMAGE,
    
        heading: "Arjun's Four Buckets",
    
        text: `
    Now Arjun breaks his ₹94,000
    into four buckets.
        `.trim(),
    
        animation: {
          type: ANIMATION.ZOOM,
          duration: 1,
          delay: 0,
        },
    
        data: {
          type: "expense-buckets",
    
          buckets: [
            {
              number: 1,
              title: "Cost of Goods Sold",
              items: [
                {
                  label: "Garments purchased — Bhiwandi supplier",
                  value: "₹72,000",
                },
                {
                  label: "Packaging materials",
                  value: "₹2,000",
                },
              ],
              total: "₹74,000",
            },
    
            {
              number: 2,
              title: "Employee Costs",
              items: [
                {
                  label: "Ramu's salary",
                  value: "₹10,000",
                },
              ],
              total: "₹10,000",
            },
    
            {
              number: 3,
              title: "Finance Costs",
              items: [
                {
                  label: "Working capital loan interest",
                  value: "₹2,500",
                },
              ],
              total: "₹2,500",
            },
    
            {
              number: 4,
              title: "Other Expenses",
              items: [
                {
                  label: "Shop rent",
                  value: "₹8,000",
                },
              ],
              total: "₹8,000",
            },
          ],
    
          grandTotal: "₹94,500",
        },
      },
    
    
      // ==========================================================
      // PAGE 34
      // ==========================================================
    
      {
        id: "chapter-04-page-34",
    
        image: "/images/chapter2/34.png",
    
        layout: LAYOUT.IMAGE_LEFT,
    
        heading: "Where Did the ₹14,000 Go?",
    
        text: `
    Bucket 1 went from ₹62,000
    to ₹74,000.
    
    That is where the ₹14,000 went.
    
    Arjun bought more garments this month —
    ₹12,000 more than before —
    
    because he expected a large order
    from a buyer in Nagpur.
    
    The order did not materialise.
    
    The goods are sitting in the back room.
    
    The expense is already recorded.
        `.trim(),
    
        animation: {
          type: ANIMATION.SLIDE,
          duration: 1,
          delay: 0,
        },
    
        tag: "REALITY CHECK",
      },
    
    
      // ==========================================================
      // PAGE 35
      // ==========================================================
    
      {
        id: "chapter-04-page-35",
    
        image: "/images/chapter2/35.png",
    
        layout: LAYOUT.IMAGE_RIGHT,
    
        heading: "From Number to Decision",
    
        text: `
    Now Arjun knows.
    
    Not:
    
    "Expenses went up."
    
    But:
    
    "COGS went up."
    
    And he knows why.
    
    He can now ask:
    
    Should he offer the Nagpur buyer a discount
    to move the stock?
    
    Should he reduce next month's order?
    
    He has a decision to make.
    
    The bucket analysis makes that decision visible.
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
      },
    
    
      // ==========================================================
      // PAGE 36
      // ==========================================================
    
      {
        id: "chapter-04-page-36",
    
        image: "/images/chapter2/36.png",
    
        layout: LAYOUT.QUOTE,
    
        heading: "Better Questions",
    
        text: `
    That is what the four buckets give you.
    
    Not more information.
    
    Better questions.
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
      },
    
    
      // ==========================================================
      // PAGE 37
      // ==========================================================
    
      {
        id: "chapter-04-page-37",
    
        image: "/images/chapter2/37.png",
    
        layout: LAYOUT.CENTER,
    
        heading: "Expenses Behave Differently",
    
        text: `
    COGS rises when you sell more.
    
    Salaries are sticky.
    
    Finance costs reflect your debt.
    
    Fixed overheads arrive regardless of revenue.
    
    Treating them as one number tells you nothing.
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
    
        tag: "KEY IDEA",
      },
    
    
      // ==========================================================
      // PAGE 38
      // ==========================================================
    
      {
        id: "chapter-04-page-38",
    
        image: "/images/chapter2/38.png",
    
        layout: LAYOUT.IMAGE_LEFT,
    
        heading: "Understand Deeper · Depreciation",
    
        text: `
    Depreciation is an expense
    that does not appear as a cash payment.
    
    But it is real.
    
    When Arjun bought his delivery vehicle
    for ₹5,00,000,
    he did not expense the full amount immediately.
    
    Under the Written Down Value method,
    roughly ₹1,00,000 of that value
    is charged to the P&L every year.
    
    It reduces profit.
    
    But no cash leaves the account
    when depreciation is recorded.
    
    Another reason:
    
    Profit ≠ Cash.
        `.trim(),
    
        animation: {
          type: ANIMATION.SLIDE,
          duration: 1,
          delay: 0,
        },
    
        tag: "UNDERSTAND DEEPER",
      },
    
    
      // ==========================================================
      // PAGE 39
      // ==========================================================
    
      {
        id: "chapter-04-page-39",
    
        image: "/images/chapter2/39.png",
    
        layout: LAYOUT.IMAGE_RIGHT,
    
        heading: "India Wall",
    
        text: `
    Schedule III of the Companies Act 2013
    requires every registered Indian company
    to classify its expenses into these categories.
    
    The standardisation creates comparability.
    
    A bank evaluating Arjun's loan
    can compare COGS ratios,
    salary-to-revenue ratios,
    and debt servicing costs
    across businesses.
    
    For GST-registered businesses,
    these buckets also help with reconciliation
    between P&L and GST returns.
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
    
        tag: "INDIA WALL",
      },
    
    
      // ==========================================================
      // PAGE 40
      // ==========================================================
    
      {
        id: "chapter-04-page-40",
    
        image: "/images/chapter2/40.png",
    
        layout: LAYOUT.IMAGE_LEFT,
    
        heading: "Founder Lens",
    
        text: `
    The most important bucket ratio to track
    is COGS as a percentage of Revenue.
    
    That is your Gross Profit Margin.
    
    If the ratio stays stable
    as your business grows,
    your product economics are healthy.
    
    If it shrinks as revenue grows,
    you are buying growth
    at the cost of profitability.
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
    
        tag: "FOUNDER LENS",
      },
    
    
      // ==========================================================
      // PAGE 41
      // ==========================================================
    
      {
        id: "chapter-04-page-41",
    
        image: "/images/chapter2/41.png",
    
        layout: LAYOUT.CENTER,
    
        heading: "Reality Check",
    
        text: `
    "My expenses went up"
    
    is not an insight.
    
    "My COGS went up because I over-purchased
    against an order that did not come through"
    
    is an insight with a decision attached to it.
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
    
        tag: "REALITY CHECK",
      },
    
    
      // ==========================================================
      // PAGE 42
      // ==========================================================
    
      {
        id: "chapter-04-page-42",
    
        image: "/images/chapter2/42.png",
    
        layout: LAYOUT.IMAGE_RIGHT,
    
        heading: "Quick Challenge · Level 4",
    
        text: `
    Priya runs a cloud kitchen in Hyderabad.
    
    This month:
    
    Ingredients — ₹52,000
    Kitchen staff wages — ₹24,000
    Delivery platform commission — ₹11,000
    Gas and electricity — ₹6,000
    Packaging — ₹5,000
    Bank loan interest — ₹3,500
    
    Revenue:
    
    ₹1,40,000
    
    What is her COGS
    and what is her Gross Profit?
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
    
        challenge: {
          options: [
            {
              id: "A",
              text:
                "COGS ₹52,000 · Gross Profit ₹88,000",
            },
    
            {
              id: "B",
              text:
                "COGS ₹57,000 · Gross Profit ₹83,000",
            },
    
            {
              id: "C",
              text:
                "COGS ₹74,000 · Gross Profit ₹66,000",
            },
    
            {
              id: "D",
              text:
                "COGS ₹1,01,500 · Gross Profit ₹38,500",
            },
          ],
    
          correctAnswer: "B",
        },
      },
    
    
      // ==========================================================
      // PAGE 43
      // ==========================================================
    
      {
        id: "chapter-04-page-43",
    
        image: "/images/chapter2/43.png",
    
        layout: LAYOUT.IMAGE_LEFT,
    
        heading: "Answer: B",
    
        text: `
    COGS includes only the costs
    directly tied to producing what was sold.
    
    Ingredients:
    
    ₹52,000
    
    Packaging:
    
    ₹5,000
    
    Therefore:
    
    COGS = ₹57,000
    
    Gross Profit:
    
    ₹1,40,000 − ₹57,000
    = ₹83,000
    
    Kitchen wages belong to Employee Costs.
    
    Delivery commission belongs to Other Expenses.
    
    Gas and electricity belong to Other Expenses.
    
    Bank interest belongs to Finance Costs.
    
    The trap is the delivery commission.
    
    It feels like a cost of selling the food,
    but it is a distribution expense,
    not a production cost.
        `.trim(),
    
        animation: {
          type: ANIMATION.SLIDE,
          duration: 1,
          delay: 0,
        },
    
        tag: "ANSWER",
      },
    
    
      // ==========================================================
      // PAGE 44
      // ==========================================================
    
      {
        id: "chapter-04-page-44",
    
        image: "/images/chapter2/44.png",
    
        layout: LAYOUT.QUOTE,
    
        heading: "Key Takeaway",
    
        text: `
    Expenses are not one number.
    
    They are four stories.
    
    COGS tells you if your product is profitable.
    
    Employee costs tell you if you are staffed correctly.
    
    Finance costs tell you what your debt is costing you.
    
    Other expenses tell you where money leaks
    when nothing is selling.
    
    Read all four.
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
      },
      ],
    },

    {
      id: "chapter-05",

      title: "From Revenue to Profit",

      intro: {
        heading: "From Revenue to Profit",
        subheading:
          "The waterfall. Follow every rupee from the top. The only number that belongs to you is at the bottom.",
        kicker: "Level Five",
        duration: "Five Minutes",
      },

      pages: [
      // ==========================================================
      // PAGE 45
      // ==========================================================
    
      {
        id: "chapter-05-page-45",
    
        image: "/images/chapter2/45.png",
    
        layout: LAYOUT.FULL_IMAGE,
    
        heading: "Level Five · Five Minutes",
    
        text: `
    From Revenue to Profit
    
    The waterfall.
    
    Follow every rupee from the top.
    
    The only number that belongs to you
    is at the bottom.
        `.trim(),
    
        animation: {
          type: ANIMATION.ZOOM,
          duration: 1,
          delay: 0,
        },
    
        tag: "LEVEL FIVE",
      },
    
    
      // ==========================================================
      // PAGE 46
      // ==========================================================
    
      {
        id: "chapter-05-page-46",
    
        image: "/images/chapter2/46.png",
    
        layout: LAYOUT.IMAGE_LEFT,
    
        heading: "Tuesday Night",
    
        text: `
    It is 9:30 on a Tuesday night.
    
    Ramu locked up an hour ago.
    
    The shop is quiet.
    
    Arjun is at the desk
    with the P&L, a pen, and a notepad.
    
    For the first time,
    he is going to read it from the top.
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
      },
    
    
      // ==========================================================
      // PAGE 47
      // ==========================================================
    
      {
        id: "chapter-05-page-47",
    
        image: "/images/chapter2/47.png",
    
        layout: LAYOUT.CENTER,
    
        heading: "The Waterfall",
    
        text: `
    Arjun remembers something
    Malhotra Saab said over chai:
    
    "The P&L is a waterfall.
    
    Revenue enters at the top.
    
    Costs take their portion
    floor by floor.
    
    Whatever survives to the bottom is yours.
    
    Watch where the water goes."
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
    
        dialogue: {
          speaker: "Malhotra Saab",
    
          text:
            "The P&L is a waterfall. Revenue enters at the top. Costs take their portion floor by floor. Whatever survives to the bottom is yours. Watch where the water goes.",
        },
      },
    
    
      // ==========================================================
      // PAGE 48
      // ==========================================================
    
      {
        id: "chapter-05-page-48",
    
        image: "/images/chapter2/48.png",
    
        layout: LAYOUT.FULL_IMAGE,
    
        heading: "The Calculation",
    
        text: `
    Revenue flows in.
    
    COGS leaves first.
    
    Then operating expenses.
    
    Then tax.
    
    What remains is yours.
    
    This is the entire P&L
    in one sentence.
        `.trim(),
    
        animation: {
          type: ANIMATION.ZOOM,
          duration: 1,
          delay: 0,
        },
    
        data: {
          type: "waterfall",
    
          steps: [
            {
              label: "TOTAL REVENUE",
              value: "₹1,20,000",
              operator: "↓",
            },
    
            {
              label: "COST OF GOODS SOLD",
              value: "₹60,000",
              operator: "−",
            },
    
            {
              label: "GROSS PROFIT",
              value: "₹60,000",
              operator: "=",
            },
    
            {
              label: "OPERATING EXPENSES",
              value: "₹20,000",
              operator: "−",
            },
    
            {
              label: "PROFIT BEFORE TAX",
              value: "₹40,000",
              operator: "=",
            },
    
            {
              label: "INCOME TAX",
              value: "₹8,000",
              operator: "−",
            },
    
            {
              label: "PROFIT AFTER TAX",
              value: "₹32,000",
              operator: "=",
            },
          ],
        },
      },
    
    
      // ==========================================================
      // PAGE 49
      // ==========================================================
    
      {
        id: "chapter-05-page-49",
    
        image: "/images/chapter2/49.png",
    
        layout: LAYOUT.IMAGE_RIGHT,
    
        heading: "Four Stops",
    
        text: `
    Following the waterfall reveals
    four separate stops.
    
    Gross Profit:
    
    ₹60,000
    
    This tells Arjun his product margin is 50%.
    
    PBT:
    
    ₹40,000
    
    This tells him what the business generated
    after operating costs.
    
    PAT:
    
    ₹32,000
    
    This is what remains after the government's share.
    
    Three numbers.
    
    Three different ways
    of measuring the same business.
        `.trim(),
    
        animation: {
          type: ANIMATION.SLIDE,
          duration: 1,
          delay: 0,
        },
      },
    
    
      // ==========================================================
      // PAGE 50
      // ==========================================================
    
      {
        id: "chapter-05-page-50",
    
        image: "/images/chapter2/50.png",
    
        layout: LAYOUT.CENTER,
    
        heading: "PBT vs PAT",
    
        text: `
    Profit Before Tax:
    
    ₹40,000
    
    What the business generated
    before the government's share.
    
    Profit After Tax:
    
    ₹32,000
    
    What belongs to the owner
    after all obligations.
    
    It can be reinvested,
    saved, or distributed.
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
    
        data: {
          type: "comparison",
    
          items: [
            {
              title: "PROFIT BEFORE TAX",
              value: "₹40,000",
            },
            {
              title: "PROFIT AFTER TAX",
              value: "₹32,000",
            },
          ],
        },
      },
    
    
      // ==========================================================
      // PAGE 51
      // ==========================================================
    
      {
        id: "chapter-05-page-51",
    
        image: "/images/chapter2/51.png",
    
        layout: LAYOUT.IMAGE_LEFT,
    
        heading: "The ₹23,600 Gap",
    
        text: `
    Arjun writes:
    
    PAT: ₹32,000
    
    Bank account: ₹8,400
    
    Difference: ₹23,600
    
    He now knows where the gap is.
    
    The Vashi buyer owes ₹50,000.
    
    He paid a packaging supplier in advance.
    
    His delivery vehicle's depreciation
    reduces profit by ₹8,300 per month
    without any cash leaving the account.
    
    The gap is not missing.
    
    It is sitting in places
    he can now identify.
        `.trim(),
    
        animation: {
          type: ANIMATION.SLIDE,
          duration: 1,
          delay: 0,
        },
    
        tag: "REALITY CHECK",
      },
    
    
      // ==========================================================
      // PAGE 52
      // ==========================================================
    
      {
        id: "chapter-05-page-52",
    
        image: "/images/chapter2/52.png",
    
        layout: LAYOUT.QUOTE,
    
        heading: "Profit vs Cash",
    
        text: `
    Profit is an opinion.
    
    Cash is a fact.
    
    The P&L gives you the opinion
    honestly computed.
    
    The Cash Flow Statement
    gives you the fact.
    
    You need both.
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
      },
    
    
      // ==========================================================
      // PAGE 53
      // ==========================================================
    
      {
        id: "chapter-05-page-53",
    
        image: "/images/chapter2/53.png",
    
        layout: LAYOUT.IMAGE_RIGHT,
    
        heading: "Understand Deeper · Deferred Tax",
    
        text: `
    The tax line on the P&L
    and the tax actually paid
    in any given year can differ.
    
    Some expenses allowed for accounting
    are not immediately allowed for tax purposes.
    
    Some tax deductions work in the opposite direction.
    
    These timing differences create:
    
    Deferred Tax Assets
    
    or
    
    Deferred Tax Liabilities.
    
    For a business owner,
    knowing this exists is enough.
    
    It explains why your CA's tax calculation
    may not exactly match the tax shown on your P&L.
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
    
        tag: "UNDERSTAND DEEPER",
      },
    
    
      // ==========================================================
      // PAGE 54
      // ==========================================================
    
      {
        id: "chapter-05-page-54",
    
        image: "/images/chapter2/54.png",
    
        layout: LAYOUT.IMAGE_LEFT,
    
        heading: "India Wall",
    
        text: `
    Businesses calculate tax
    on Profit Before Tax,
    not Profit After Tax.
    
    The applicable rate depends
    on the business structure.
    
    A company and an individual proprietor
    can have different tax outcomes
    even when their business profit is identical.
    
    Understanding the waterfall
    helps you understand
    what your CA is optimising.
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
    
        tag: "INDIA WALL",
      },
    
    
      // ==========================================================
      // PAGE 55
      // ==========================================================
    
      {
        id: "chapter-05-page-55",
    
        image: "/images/chapter2/55.png",
    
        layout: LAYOUT.IMAGE_RIGHT,
    
        heading: "Investor Lens",
    
        text: `
    Suppose a business reports:
    
    Revenue: ₹1 crore
    
    PAT: ₹5 lakh
    
    Net Profit Margin:
    
    0.5%
    
    An investor wants to know
    where value was destroyed
    on the journey down.
    
    Was COGS too high?
    
    Were operating expenses bloated?
    
    Was interest expense unusually high?
    
    The waterfall makes every step visible.
        `.trim(),
    
        animation: {
          type: ANIMATION.SLIDE,
          duration: 1,
          delay: 0,
        },
    
        tag: "INVESTOR LENS",
      },
    
    
      // ==========================================================
      // PAGE 56
      // ==========================================================
    
      {
        id: "chapter-05-page-56",
    
        image: "/images/chapter2/56.png",
    
        layout: LAYOUT.CENTER,
    
        heading: "Smart Question",
    
        text: `
    After receiving your P&L,
    ask:
    
    "What was our Gross Profit Margin
    this quarter versus the same quarter last year?"
    
    Stable or growing?
    
    Your product economics are holding.
    
    Shrinking?
    
    Something is quietly wrong.
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
    
        tag: "SMART QUESTION",
      },
    
    
      // ==========================================================
      // PAGE 57
      // ==========================================================
    
      {
        id: "chapter-05-page-57",
    
        image: "/images/chapter2/57.png",
    
        layout: LAYOUT.IMAGE_LEFT,
    
        heading: "Quick Challenge · Level 5",
    
        text: `
    Kavita runs a fashion label in Mumbai.
    
    Annual P&L:
    
    Revenue: ₹15,00,000
    COGS: ₹7,50,000
    Salaries: ₹2,00,000
    Rent: ₹90,000
    Other Operating Expenses: ₹60,000
    Tax Rate: 25%
    
    Calculate:
    
    Gross Profit
    
    PBT
    
    PAT
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
    
        challenge: {
          options: [
            {
              id: "A",
              text:
                "GP ₹7,50,000 · PBT ₹4,00,000 · PAT ₹3,00,000",
            },
    
            {
              id: "B",
              text:
                "GP ₹7,50,000 · PBT ₹3,00,000 · PAT ₹2,25,000",
            },
    
            {
              id: "C",
              text:
                "GP ₹4,00,000 · PBT ₹3,00,000 · PAT ₹2,25,000",
            },
    
            {
              id: "D",
              text:
                "GP ₹7,50,000 · PBT ₹4,00,000 · PAT ₹4,00,000",
            },
          ],
    
          correctAnswer: "A",
        },
      },
    
    
      // ==========================================================
      // PAGE 58
      // ==========================================================
    
      {
        id: "chapter-05-page-58",
    
        image: "/images/chapter2/58.png",
    
        layout: LAYOUT.IMAGE_RIGHT,
    
        heading: "Answer: A",
    
        text: `
    Gross Profit:
    
    ₹15,00,000 − ₹7,50,000
    = ₹7,50,000
    
    Total Operating Expenses:
    
    ₹2,00,000
    + ₹90,000
    + ₹60,000
    
    = ₹3,50,000
    
    PBT:
    
    ₹7,50,000 − ₹3,50,000
    = ₹4,00,000
    
    Tax:
    
    ₹4,00,000 × 25%
    = ₹1,00,000
    
    PAT:
    
    ₹4,00,000 − ₹1,00,000
    = ₹3,00,000
    
    Gross Profit Margin:
    
    50%
    
    Net Profit Margin:
    
    20%
        `.trim(),
    
        animation: {
          type: ANIMATION.SLIDE,
          duration: 1,
          delay: 0,
        },
    
        tag: "ANSWER",
      },
    
    
      // ==========================================================
      // PAGE 59
      // ==========================================================
    
      {
        id: "chapter-05-page-59",
    
        image: "/images/chapter2/59.png",
    
        layout: LAYOUT.QUOTE,
    
        heading: "Follow the Waterfall",
    
        text: `
    Revenue enters.
    
    COGS exits first.
    
    Then operating costs.
    
    Then tax.
    
    What survives is yours.
    
    Not what you feel you have earned.
    
    What the business actually generated
    after every claim was settled.
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
    
        tag: "KEY TAKEAWAY",
      },
      ],
    },

    {
      id: "chapter-06",

      title: "What the P&L Cannot Tell You",

      intro: {
        heading: "What the P&L Cannot Tell You",
        subheading:
          "The most important document in your business has real limits. Knowing them makes you financially literate.",
        kicker: "Level Six",
        duration: "Four Minutes",
      },

      pages: [
      // ==========================================================
      // PAGE 60
      // ==========================================================
    
      {
        id: "chapter-06-page-60",
    
        image: "/images/chapter2/60.png",
    
        layout: LAYOUT.FULL_IMAGE,
    
        heading: "Level Six · Four Minutes",
    
        text: `
    What the P&L Cannot Tell You
    
    The most important document
    in your business has real limits.
    
    Knowing them makes you financially literate.
        `.trim(),
    
        animation: {
          type: ANIMATION.ZOOM,
          duration: 1,
          delay: 0,
        },
    
        tag: "LEVEL SIX",
      },
    
    
      // ==========================================================
      // PAGE 61
      // ==========================================================
    
      {
        id: "chapter-06-page-61",
    
        image: "/images/chapter2/61.png",
    
        layout: LAYOUT.IMAGE_LEFT,
    
        heading: "Three Months Later",
    
        text: `
    Three months have passed
    since Arjun started reading his P&L from the top.
    
    He tracks his Gross Profit Margin every month.
    
    Currently:
    
    50%.
    
    Steady.
    
    He checks which bucket moved
    when expenses change.
    
    He knows his PBT
    before he looks at PAT.
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
      },
    
    
      // ==========================================================
      // PAGE 62
      // ==========================================================
    
      {
        id: "chapter-06-page-62",
    
        image: "/images/chapter2/62.png",
    
        layout: LAYOUT.IMAGE_RIGHT,
    
        heading: "Good Numbers",
    
        text: `
    This month,
    Arjun's P&L shows:
    
    ₹35,000 Net Profit.
    
    He feels confident.
    
    He shows it to Rafiq Bhai,
    his main fabric supplier,
    over chai.
    
    Rafiq Bhai reads it.
    
    Nods.
    
    Hands it back.
    
    "Good numbers, Arjun bhai."
    
    A pause.
    
    "Tuesday ko payment hogi na?"
        `.trim(),
    
        animation: {
          type: ANIMATION.SLIDE,
          duration: 1,
          delay: 0,
        },
    
        dialogue: {
          speaker: "Rafiq Bhai",
          text: "Tuesday ko payment hogi na?",
        },
      },
    
    
      // ==========================================================
      // PAGE 63
      // ==========================================================
    
      {
        id: "chapter-06-page-63",
    
        image: "/images/chapter2/63.png",
    
        layout: LAYOUT.CENTER,
    
        heading: "The Numbers Don't Match",
    
        text: `
    Arjun pauses.
    
    P&L:
    
    ₹35,000 profit.
    
    Bank account:
    
    ₹3,800.
    
    Rafiq Bhai is owed:
    
    ₹80,000.
    
    The P&L says profit.
    
    The bank says something else.
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
    
        tag: "THE REALITY CHECK",
      },
    
    
      // ==========================================================
      // PAGE 64
      // ==========================================================
    
      {
        id: "chapter-06-page-64",
    
        image: "/images/chapter2/64.png",
    
        layout: LAYOUT.FULL_IMAGE,
    
        heading: "What the P&L Cannot Do",
    
        text: `
    The P&L is the most useful financial
    document you own.
    
    It is also the easiest to misuse.
    
    It tells you performance.
    
    It does not tell you everything.
        `.trim(),
    
        animation: {
          type: ANIMATION.ZOOM,
          duration: 1,
          delay: 0,
        },
      },
    
    
      // ==========================================================
      // PAGE 65
      // ==========================================================
    
      {
        id: "chapter-06-page-65",
    
        image: "/images/chapter2/65.png",
    
        layout: LAYOUT.IMAGE_LEFT,
    
        heading: "Profit ≠ Cash",
    
        text: `
    People assume:
    
    Profit = Cash in bank.
    
    Actually:
    
    Profit is earned.
    
    Cash is collected.
    
    Arjun has ₹35,000
    in accounting profit
    and ₹3,800 in the bank.
    
    Both numbers are accurate.
    
    They answer different questions.
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
      },
    
    
      // ==========================================================
      // PAGE 66
      // ==========================================================
    
      {
        id: "chapter-06-page-66",
    
        image: "/images/chapter2/66.png",
    
        layout: LAYOUT.IMAGE_RIGHT,
    
        heading: "High Profit ≠ Healthy Business",
    
        text: `
    A business can show strong profits
    while being unable to pay its suppliers.
    
    Profitability and liquidity
    are different measures.
    
    A P&L cannot answer:
    
    "Can I pay Tuesday's bill?"
        `.trim(),
    
        animation: {
          type: ANIMATION.SLIDE,
          duration: 1,
          delay: 0,
        },
      },
    
    
      // ==========================================================
      // PAGE 67
      // ==========================================================
    
      {
        id: "chapter-06-page-67",
    
        image: "/images/chapter2/67.png",
    
        layout: LAYOUT.IMAGE_LEFT,
    
        heading: "The Three Statements",
    
        text: `
    P&L Statement
    
    Shows:
    Performance.
    
    Revenue, expenses and profit.
    
    Balance Sheet
    
    Shows:
    Position.
    
    Assets, liabilities,
    what the business owns and owes.
    
    Cash Flow Statement
    
    Shows:
    Movement.
    
    Actual cash that came in and went out.
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
    
        data: {
          type: "statement-comparison",
    
          statements: [
            {
              title: "P&L STATEMENT",
              subtitle: "Performance",
              description:
                "Revenue, expenses, profit. What the business did over a period of time.",
            },
    
            {
              title: "BALANCE SHEET",
              subtitle: "Position",
              description:
                "Assets, liabilities, what the business owns and owes at this moment.",
            },
    
            {
              title: "CASH FLOW STATEMENT",
              subtitle: "Movement",
              description:
                "Actual cash that came in and went out.",
            },
          ],
        },
      },
    
    
      // ==========================================================
      // PAGE 68
      // ==========================================================
    
      {
        id: "chapter-06-page-68",
    
        image: "/images/chapter2/68.png",
    
        layout: LAYOUT.QUOTE,
    
        heading: "One Is Not the Story",
    
        text: `
    The P&L tells you what happened.
    
    The Balance Sheet tells you what remains.
    
    The Cash Flow Statement tells you what moved.
    
    You need all three
    to understand a business.
    
    One is a chapter.
    
    Not the story.
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
      },
    
    
      // ==========================================================
      // PAGE 69
      // ==========================================================
    
      {
        id: "chapter-06-page-69",
    
        image: "/images/chapter2/69.png",
    
        layout: LAYOUT.IMAGE_RIGHT,
    
        heading: "Understand Deeper",
    
        text: `
    Why do banks and investors
    always ask for all three statements?
    
    Because any one statement
    can look healthy in isolation.
    
    Strong profits.
    
    Significant assets.
    
    And still:
    
    Running out of cash.
    
    Banks and investors
    triangulate the statements.
    
    They check whether the story
    each statement tells
    is consistent with the other two.
        `.trim(),
    
        animation: {
          type: ANIMATION.SLIDE,
          duration: 1,
          delay: 0,
        },
    
        tag: "UNDERSTAND DEEPER",
      },
    
    
      // ==========================================================
      // PAGE 70
      // ==========================================================
    
      {
        id: "chapter-06-page-70",
    
        image: "/images/chapter2/70.png",
    
        layout: LAYOUT.IMAGE_LEFT,
    
        heading: "India Wall",
    
        text: `
    Section 129 of the Companies Act 2013
    mandates that every registered company
    prepare and present all three financial statements:
    
    P&L
    
    Balance Sheet
    
    Cash Flow Statement
    
    The law recognises what experience confirms:
    
    One statement is not enough.
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
    
        tag: "INDIA WALL",
      },
    
    
      // ==========================================================
      // PAGE 71
      // ==========================================================
    
      {
        id: "chapter-06-page-71",
    
        image: "/images/chapter2/71.png",
    
        layout: LAYOUT.IMAGE_RIGHT,
    
        heading: "Banker Lens",
    
        text: `
    When Arjun applies for
    a working capital loan,
    
    the bank officer will look
    at the Cash Flow Statement.
    
    A business with strong profit
    but consistently negative
    operating cash flow
    
    may be growing on paper
    while straining in reality.
    
    The bank needs to know:
    
    Is the business generating
    enough cash to survive?
        `.trim(),
    
        animation: {
          type: ANIMATION.SLIDE,
          duration: 1,
          delay: 0,
        },
    
        tag: "BANKER LENS",
      },
    
    
      // ==========================================================
      // PAGE 72
      // ==========================================================
    
      {
        id: "chapter-06-page-72",
    
        image: "/images/chapter2/72.png",
    
        layout: LAYOUT.FULL_IMAGE,
    
        heading: "Arena · Make the Call",
    
        text: `
    Arjun has been offered a large order:
    
    ₹3,00,000 of garments.
    
    Delivery:
    
    30 days.
    
    Payment:
    
    60 days.
    
    His current P&L:
    
    ₹35,000 profit.
    
    His bank balance:
    
    ₹3,800.
    
    Supplier Rafiq Bhai requires
    a 40% advance:
    
    ₹1,20,000 upfront.
    
    Arjun wants to take the order.
    
    Should he?
        `.trim(),
    
        animation: {
          type: ANIMATION.ZOOM,
          duration: 1,
          delay: 0,
        },
    
        tag: "ARENA",
      },
    
    
      // ==========================================================
      // PAGE 73
      // ==========================================================
    
      {
        id: "chapter-06-page-73",
    
        image: "/images/chapter2/73.png",
    
        layout: LAYOUT.CENTER,
    
        heading: "Make the Call",
    
        text: `
    Should Arjun accept
    the ₹3,00,000 order?
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
    
        challenge: {
          options: [
            {
              id: "A",
              text:
                "Yes. His P&L shows consistent profit. The business can clearly sustain it.",
            },
    
            {
              id: "B",
              text:
                "No. He cannot fund the ₹1,20,000 advance with ₹3,800 in the bank.",
            },
    
            {
              id: "C",
              text:
                "It depends. The question is whether he can secure the cash to execute the order before committing.",
            },
          ],
    
          correctAnswer: "C",
        },
      },
    
    
      // ==========================================================
      // PAGE 74
      // ==========================================================
    
      {
        id: "chapter-06-page-74",
    
        image: "/images/chapter2/74.png",
    
        layout: LAYOUT.IMAGE_LEFT,
    
        heading: "The Answer: C",
    
        text: `
    C is the financially literate response.
    
    B describes the immediate danger:
    
    ₹3,800 cannot fund
    a ₹1,20,000 advance.
    
    But there may be solutions:
    
    A working capital loan.
    
    A partial advance from the buyer.
    
    Extended supplier terms
    with Rafiq Bhai.
    
    The order is worth pursuing.
    
    The cash question must be solved
    before committing.
        `.trim(),
    
        animation: {
          type: ANIMATION.SLIDE,
          duration: 1,
          delay: 0,
        },
    
        tag: "ANSWER",
      },
    
    
      // ==========================================================
      // PAGE 75
      // ==========================================================
    
      {
        id: "chapter-06-page-75",
    
        image: "/images/chapter2/75.png",
    
        layout: LAYOUT.IMAGE_RIGHT,
    
        heading: "Quick Challenge · Level 6",
    
        text: `
    A profitable food delivery startup
    shows ₹2.5 crore Net Profit
    on its P&L.
    
    It owes ₹6 crore
    to restaurant partners
    and delivery staff.
    
    All due within 45 days.
    
    Bank balance:
    
    ₹70 lakh.
    
    A bank is considering
    a ₹1 crore working capital loan.
    
    What should the bank ask for
    before deciding?
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
    
        challenge: {
          options: [
            {
              id: "A",
              text:
                "Nothing additional. ₹2.5 crore profit clearly demonstrates repayment capacity.",
            },
    
            {
              id: "B",
              text:
                "The Cash Flow Statement and Balance Sheet. The P&L alone does not reveal the ₹6 crore obligations or ₹70 lakh cash position.",
            },
    
            {
              id: "C",
              text:
                "Only the Balance Sheet. The P&L and Cash Flow Statement are secondary.",
            },
    
            {
              id: "D",
              text:
                "The revenue breakdown — Operations versus Other Income.",
            },
          ],
    
          correctAnswer: "B",
        },
      },
    
    
      // ==========================================================
      // PAGE 76
      // ==========================================================
    
      {
        id: "chapter-06-page-76",
    
        image: "/images/chapter2/76.png",
    
        layout: LAYOUT.IMAGE_LEFT,
    
        heading: "Answer: B",
    
        text: `
    The P&L shows strong profit.
    
    But the bank's real question is:
    
    Can this business repay ₹1 crore
    while managing ₹6 crore
    in near-term obligations?
    
    The P&L cannot answer that.
    
    The Cash Flow Statement shows
    whether operating cash generation
    supports debt repayment.
    
    The Balance Sheet shows
    the ₹6 crore liability
    against ₹70 lakh in cash.
    
    That changes the entire lending conversation.
        `.trim(),
    
        animation: {
          type: ANIMATION.SLIDE,
          duration: 1,
          delay: 0,
        },
    
        tag: "ANSWER",
      },
    
    
      // ==========================================================
      // PAGE 77
      // ==========================================================
    
      {
        id: "chapter-06-page-77",
    
        image: "/images/chapter2/77.png",
    
        layout: LAYOUT.QUOTE,
    
        heading: "Key Takeaway",
    
        text: `
    The P&L is powerful.
    
    It is also incomplete.
    
    Profit tells you
    how the business performed.
    
    It does not tell you
    whether the business can pay
    its obligations next Tuesday.
    
    For that,
    you need the Cash Flow Statement.
    
    You will meet it in Book 3.
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
      },
    
    
      // ==========================================================
      // PAGE 78
      // ==========================================================
    
      {
        id: "chapter-06-page-78",
    
        image: "/images/chapter2/78.png",
    
        layout: LAYOUT.FULL_IMAGE,
    
        heading: "The P&L Was Never the Problem",
    
        text: `
    The P&L was never the problem.
    
    Arjun just didn't know
    how to read it.
    
    Now he does.
        `.trim(),
    
        animation: {
          type: ANIMATION.ZOOM,
          duration: 1.2,
          delay: 0,
        },
      },
      ],
    },

    {
      id: "chapter-07",

      title: "The Question Arjun Finally Asked",

      intro: {
        heading: "The Question Arjun Finally Asked",
        subheading: "What changes when you understand the numbers.",
        kicker: "Closing",
      },

      pages: [
      // ==========================================================
      // PAGE 79
      // ==========================================================
    
      {
        id: "chapter-07-page-79",
    
        image: "/images/chapter2/79.png",
    
        layout: LAYOUT.CENTER,
    
        heading: "The Question Arjun Finally Asked",
    
        text: `
    What changes
    when you understand the numbers?
        `.trim(),
    
        animation: {
          type: ANIMATION.FADE,
          duration: 1,
          delay: 0,
        },
    
        tag: "CLOSING",
      },

    // ==========================================================
    // PAGE 80
    // ==========================================================

    {
      id: "chapter-07-page-80",
    
      image: "/images/chapter2/80.png",
    
      layout: LAYOUT.FULL_IMAGE,
    
      heading: "Six Weeks Later",
    
      text: `
    The quarterly meeting with Mehta Sir.
    
    Same back room.
    
    Same desk fan that turns left
    but not right.
    
    Same smell of sizing agent.
    
    Mehta Sir puts the P&L on the desk,
    as he always does.
    
    He points to the bottom number:
    
    ₹38,000.
    
    "Accha chal raha hai."
      `.trim(),
    
      animation: {
        type: ANIMATION.FADE,
        duration: 1,
        delay: 0,
      },
    
      tag: "SIX WEEKS LATER",
    },
    
    
    // ==========================================================
    // PAGE 81
    // ==========================================================
    
    {
      id: "chapter-07-page-81",
    
      image: "/images/chapter2/81.png",
    
      layout: LAYOUT.IMAGE_LEFT,
    
      heading: "Read From the Top",
    
      text: `
    Arjun picks up the P&L.
    
    He does not look at the bottom number first.
    
    He looks at:
    
    Revenue:
    
    ₹1,35,000
    
    COGS:
    
    ₹67,500
    
    Gross Profit:
    
    ₹67,500
    
    Gross Profit Margin:
    
    50%
    
    Same as last month.
      `.trim(),
    
      animation: {
        type: ANIMATION.SLIDE,
        duration: 1,
        delay: 0,
      },
    },
    
    
    // ==========================================================
    // PAGE 82
    // ==========================================================
    
    {
      id: "chapter-07-page-82",
    
      image: "/images/chapter2/82.png",
    
      layout: LAYOUT.IMAGE_RIGHT,
    
      heading: "The Waterfall Again",
    
      text: `
    Operating Expenses:
    
    ₹22,000
    
    PBT:
    
    ₹45,500
    
    Tax at roughly 20%:
    
    ₹9,100
    
    PAT:
    
    ₹38,000
    
    The same number
    Mehta Sir pointed to.
    
    But Arjun is not looking at PAT.
    
    He puts his finger on COGS.
      `.trim(),
    
      animation: {
        type: ANIMATION.FADE,
        duration: 1,
        delay: 0,
      },
    
      tag: "P&L",
    },
    
    
    // ==========================================================
    // PAGE 83
    // ==========================================================
    
    {
      id: "chapter-07-page-83",
    
      image: "/images/chapter2/83.png",
    
      layout: LAYOUT.CENTER,
    
      heading: "The Question",
    
      text: `
    "Mehta Sir,
    
    last quarter our COGS was
    ₹62,000 on ₹1,20,000 in revenue.
    
    That is 51.7%.
    
    This quarter it is
    ₹67,500 on ₹1,35,000.
    
    Exactly 50%.
    
    Our Gross Profit Margin improved.
    
    What changed on the procurement side?"
      `.trim(),
    
      animation: {
        type: ANIMATION.FADE,
        duration: 1,
        delay: 0,
      },
    
      dialogue: {
        speaker: "Arjun",
    
        text:
          "Our Gross Profit Margin improved. What changed on the procurement side?",
      },
    },
    
    
    // ==========================================================
    // PAGE 84
    // ==========================================================
    
    {
      id: "chapter-07-page-84",
    
      image: "/images/chapter2/84.png",
    
      layout: LAYOUT.IMAGE_RIGHT,
    
      heading: "The Answer",
    
      text: `
    Mehta Sir pauses.
    
    He looks at Arjun.
    
    He looks at the P&L.
    
    Then back at Arjun.
    
    In eleven years of quarterly meetings,
    Arjun has never asked a question
    about a number that was not the bottom one.
    
    Mehta Sir opens his laptop.
    
    "Your Bhiwandi supplier gave you
    a 2% volume discount last month.
    
    You negotiated it yourself.
    
    I was going to mention it.
    
    But you found it first."
      `.trim(),
    
      animation: {
        type: ANIMATION.SLIDE,
        duration: 1,
        delay: 0,
      },
    
      dialogue: {
        speaker: "Mehta Sir",
    
        text:
          "Your Bhiwandi supplier gave you a 2% volume discount last month. You negotiated it yourself. I was going to mention it but you found it first.",
      },
    },
    
    
    // ==========================================================
    // PAGE 85
    // ==========================================================
    
    {
      id: "chapter-07-page-85",
    
      image: "/images/chapter2/85.png",
    
      layout: LAYOUT.IMAGE_LEFT,
    
      heading: "The Real Story",
    
      text: `
    Arjun looks at the sheet again.
    
    ₹38,000 net profit.
    
    But the real story
    is the 1.7% improvement
    in Gross Profit Margin.
    
    At his current revenue scale,
    that improvement could compound
    into something significant
    if he can sustain it.
    
    He could not have seen that
    six weeks ago.
    
    Not because the number was hidden.
    
    Because he did not know
    where to look.
      `.trim(),
    
      animation: {
        type: ANIMATION.SLIDE,
        duration: 1,
        delay: 0,
      },
    
      tag: "THE REAL STORY",
    },
    
    
    // ==========================================================
    // PAGE 86
    // ==========================================================
    
    {
      id: "chapter-07-page-86",
    
      image: "/images/chapter2/86.png",
    
      layout: LAYOUT.QUOTE,
    
      heading: "Financial Literacy",
    
      text: `
    Financial literacy is not about
    knowing accounting.
    
    It is about knowing
    which questions to ask
    
    and being able to read
    the document that answers them.
      `.trim(),
    
      animation: {
        type: ANIMATION.FADE,
        duration: 1.2,
        delay: 0,
      },
    
      tag: "KEY IDEA",
    },
    
    
    // ==========================================================
    // PAGE 87
    // ==========================================================
    
    {
      id: "chapter-07-page-87",
    
      image: "/images/chapter2/87.png",
    
      layout: LAYOUT.FULL_IMAGE,
    
      heading: "The Glasses Come Down",
    
      text: `
    Malhotra Saab was not at that meeting.
    
    But if he had been,
    he would have said nothing.
    
    He would have folded his newspaper.
    
    He would have picked up his chai.
    
    And for the first time
    since Arjun opened his shop
    in Kasba Peth,
    
    the glasses would have come down
    from his forehead.
    
    On to his eyes.
      `.trim(),
    
      animation: {
        type: ANIMATION.ZOOM,
        duration: 1.2,
        delay: 0,
      },
    
      tag: "CLOSING MOMENT",
    },
    
    
    // ==========================================================
    // PAGE 88
    // ==========================================================
    
    {
      id: "chapter-07-page-88",
    
      image: "/images/chapter2/88.png",
    
      layout: LAYOUT.CENTER,
    
      heading: "What You Now Understand",
    
      text: `
    You now understand
    what the P&L is actually telling you.
    
    Not just the number at the bottom.
    
    The story behind every number.
      `.trim(),
    
      animation: {
        type: ANIMATION.FADE,
        duration: 1,
        delay: 0,
      },
    
      tag: "RECAP",
    },
    
    
    // ==========================================================
    // PAGE 89
    // ==========================================================
    
    {
      id: "chapter-07-page-89",
    
      image: "/images/chapter2/89.png",
    
      layout: LAYOUT.IMAGE_LEFT,
    
      heading: "01 · Performance vs Cash",
    
      text: `
    The P&L measures performance,
    not cash.
    
    Your profit and your bank balance
    can both be correct simultaneously.
    
    They are answering different questions.
      `.trim(),
    
      animation: {
        type: ANIMATION.SLIDE,
        duration: 1,
        delay: 0,
      },
    
      checklist: true,
    },
    
    
    // ==========================================================
    // PAGE 90
    // ==========================================================
    
    {
      id: "chapter-07-page-90",
    
      image: "/images/chapter2/90.png",
    
      layout: LAYOUT.IMAGE_RIGHT,
    
      heading: "02 · Three Levels of Profit",
    
      text: `
    Gross Profit tells you
    about your product.
    
    Operating Profit tells you
    about your operations.
    
    Net Profit tells you
    what belongs to you.
    
    Three different answers
    to three different questions.
      `.trim(),
    
      animation: {
        type: ANIMATION.FADE,
        duration: 1,
        delay: 0,
      },
    
      checklist: true,
    },
    
    
    // ==========================================================
    // PAGE 91
    // ==========================================================
    
    {
      id: "chapter-07-page-91",
    
      image: "/images/chapter2/91.png",
    
      layout: LAYOUT.IMAGE_LEFT,
    
      heading: "03 · Revenue",
    
      text: `
    Revenue from Operations
    is what your business earns
    by doing what it exists to do.
    
    Other Income is a bonus.
    
    Know the difference.
      `.trim(),
    
      animation: {
        type: ANIMATION.SLIDE,
        duration: 1,
        delay: 0,
      },
    
      checklist: true,
    },
    
    
    // ==========================================================
    // PAGE 92
    // ==========================================================
    
    {
      id: "chapter-07-page-92",
    
      image: "/images/chapter2/92.png",
    
      layout: LAYOUT.IMAGE_RIGHT,
    
      heading: "04 · Four Expense Buckets",
    
      text: `
    Expenses belong
    in four buckets.
    
    COGS.
    
    Employee Costs.
    
    Finance Costs.
    
    Other Expenses.
    
    Knowing which bucket moved
    tells you exactly where to look
    
    and what decision to make.
      `.trim(),
    
      animation: {
        type: ANIMATION.FADE,
        duration: 1,
        delay: 0,
      },
    
      checklist: true,
    },
    
    
    // ==========================================================
    // PAGE 93
    // ==========================================================
    
    {
      id: "chapter-07-page-93",
    
      image: "/images/chapter2/93.png",
    
      layout: LAYOUT.IMAGE_LEFT,
    
      heading: "05 · The Three Financial Statements",
    
      text: `
    The P&L is one of three
    essential financial documents.
    
    P&L:
    
    What happened.
    
    Balance Sheet:
    
    What remains.
    
    Cash Flow Statement:
    
    What moved.
      `.trim(),
    
      animation: {
        type: ANIMATION.SLIDE,
        duration: 1,
        delay: 0,
      },
    
      checklist: true,
    },
    
    
    // ==========================================================
    // PAGE 94
    // ==========================================================
    
    {
      id: "chapter-07-page-94",
    
      image: "/images/chapter2/94.png",
    
      layout: LAYOUT.QUOTE,
    
      heading: "Profit Is an Opinion",
    
      text: `
    Profit is an opinion,
    carefully computed.
    
    Cash is a fact.
    
    The day you stop confusing them
    is the day you start running
    your business
    
    instead of reacting to it.
      `.trim(),
    
      animation: {
        type: ANIMATION.FADE,
        duration: 1.2,
        delay: 0,
      },
    
      tag: "FINAL LESSON",
    },
    
    
    // ==========================================================
    // PAGE 95
    // ==========================================================
    
    {
      id: "chapter-07-page-95",
    
      image: "/images/chapter2/95.png",
    
      layout: LAYOUT.FULL_IMAGE,
    
      heading: "What Comes Next",
    
      text: `
    Arjun's P&L shows:
    
    ₹38,000 Net Profit.
    
    His bank shows:
    
    ₹12,000.
    
    Difference:
    
    ₹26,000.
    
    Where is the difference?
    
    It is sitting in three places.
      `.trim(),
    
      animation: {
        type: ANIMATION.ZOOM,
        duration: 1,
        delay: 0,
      },
    
      tag: "NEXT",
    },
    
    
    // ==========================================================
    // PAGE 96
    // ==========================================================
    
    {
      id: "chapter-07-page-96",
    
      image: "/images/chapter2/96.png",
    
      layout: LAYOUT.IMAGE_LEFT,
    
      heading: "The ₹26,000 Gap",
    
      text: `
    The difference is sitting in:
    
    The Vashi buyer
    who owes Arjun money.
    
    The advance payment
    made to a new packaging vendor.
    
    The depreciation charge
    on his vehicle.
    
    The P&L told him
    what the business earned.
    
    But it cannot tell him
    where those ₹26,000
    physically are.
      `.trim(),
    
      animation: {
        type: ANIMATION.SLIDE,
        duration: 1,
        delay: 0,
      },
    },
    
    
    // ==========================================================
    // PAGE 97
    // ==========================================================
    
    {
      id: "chapter-07-page-97",
    
      image: "/images/chapter2/97.png",
    
      layout: LAYOUT.CENTER,
    
      heading: "That Is the Balance Sheet's Job",
    
      text: `
    The Balance Sheet is a photograph
    of your business at a single moment.
    
    It shows everything
    the business owns.
    
    Cash.
    
    Stock.
    
    Debtors.
    
    Equipment.
    
    And everything
    the business owes.
    
    Loans.
    
    Unpaid bills.
    
    Other obligations.
    
    The difference between
    what it owns and what it owes
    
    is what the business is actually worth.
      `.trim(),
    
      animation: {
        type: ANIMATION.FADE,
        duration: 1,
        delay: 0,
      },
    
      tag: "NEXT STATEMENT",
    },
    
    
    // ==========================================================
    // PAGE 98
    // ==========================================================
    
    {
      id: "chapter-07-page-98",
    
      image: "/images/chapter2/98.png",
    
      layout: LAYOUT.IMAGE_RIGHT,
    
      heading: "Trade Debtors",
    
      text: `
    Arjun's ₹26,000 gap
    lives on his Balance Sheet.
    
    It appears as:
    
    Trade Debtors.
    
    Money owed to him
    that has been earned
    but not yet collected.
    
    It is an asset.
    
    Understanding it requires
    reading the next statement.
      `.trim(),
    
      animation: {
        type: ANIMATION.SLIDE,
        duration: 1,
        delay: 0,
      },
    
      data: {
        type: "balance-sheet-preview",
    
        value: "₹26,000",
    
        label: "TRADE DEBTORS",
    
        description:
          "Money owed to Arjun that has been earned but not yet collected.",
      },
    },
    
    
    // ==========================================================
    // PAGE 99
    // ==========================================================
    
    {
      id: "chapter-07-page-99",
    
      image: "/images/chapter2/99.png",
    
      layout: LAYOUT.FULL_IMAGE,
    
      heading: "BOOK 2 · COMING NEXT",
    
      text: `
    THE BALANCE SHEET
    
    What the business owns.
    
    What it owes.
    
    And exactly where Arjun's
    ₹26,000 in outstanding debtors
    actually lives.
      `.trim(),
    
      animation: {
        type: ANIMATION.ZOOM,
        duration: 1.4,
        delay: 0,
      },
    
      tag: "COMING NEXT",
    
      nextBook: {
        id: "book-02",
    
        title: "The Balance Sheet",
    
        subtitle:
          "What the business owns. What it owes.",
    
        teaser:
          "Exactly where Arjun's ₹26,000 in outstanding debtors actually lives.",
      },
    },
    
    
    // ==========================================================
    // PAGE 100 — END
    // ==========================================================
    
    {
      id: "chapter-07-page-100",
    
      image: "/images/chapter2/100.png",
    
      layout: LAYOUT.CENTER,
    
      heading: "Financial Clarity for India",
    
      text: `
    MONITIZE
    
    Book 1 Complete.
    
    The P&L was never the problem.
    
    Arjun just didn't know
    how to read it.
    
    Now he does.
      `.trim(),
    
      animation: {
        type: ANIMATION.FADE,
        duration: 1.5,
        delay: 0,
      },
    
      credits: {
        publisher: "MONITIZE",
        tagline: "Financial Clarity for India",
        author: "CA Divya Bharadwaj",
      },
    
      isEnd: true,
    },
      ],
    },
  ],
};

export default book;
