// Define the type for a single FAQ item
interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

// Sample FAQ Data - Replace or fetch from your backend/CMS
export const faqData: FaqItem[] = [
  {
    id: 1,
    question: 'What services does Alie Services offer?',
    answer: 'We specialize in business optimization, process automation, workflow efficiency, and digital transformation solutions—customized to your business needs.',
  },
  {
    id: 2,
    question: 'How long does implementation typically take?',
    answer: 'Implementation timelines vary based on project scope and complexity. Most solutions can be implemented within 4-12 weeks, but we will provide a detailed timeline during our initial consultation.',
  },
  {
    id: 3,
    question: 'Do you offer ongoing support?',
    answer: 'Yes, we provide continuous support and maintenance for all our implementations. Our team is available to help with updates, troubleshooting, and optimization.',
  },


];



interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const allFaqs: FaqItem[] = [
   {
    id: 1,
    question: 'What services does Alie Services offer?',
    answer: 'We specialize in business optimization, process automation, workflow efficiency, and digital transformation solutions—customized to your business needs.',
  },
  {
    id: 2,
    question: 'How long does implementation typically take?',
    answer: 'Implementation timelines vary based on project scope and complexity. Most solutions can be implemented within 4-12 weeks, but we will provide a detailed timeline during our initial consultation.',
  },
  {
    id: 3,
    question: 'Do you offer ongoing support?',
    answer: 'Yes, we provide continuous support and maintenance for all our implementations. Our team is available to help with updates, troubleshooting, and optimization.',
  },


  {
    id: 4,
    question: 'How is the initial consultation conducted?',
    answer: 'We offer a complimentary 15-minute strategy session, held virtually or by phone to suit your preference. During this call, we’ll discuss your business goals, current challenges, and potential opportunities for optimization. You’ll receive a clear roadmap of next steps customized for your needs.',
  },
  {
    id: 5,
    question: 'What industries does Alie Services work with?',
    answer: 'Alie Services partners with small to mid-size businesses across a wide range of industries—including professional services, hospitality, healthcare, technology, and more. Our expertise is in designing solutions that are adaptable to the unique processes and goals of each business we serve.',
  },
  {
    id: 6,
    question: 'What is your pricing structure?',
    answer: 'Our pricing is based on the scope and complexity of each project. After your initial consultation, you’ll receive a detailed proposal outlining recommended solutions and associated costs. We prioritize transparency—there are no hidden fees or unexpected charges.',
  },
  {
    id: 7,
    question: 'How do you ensure data security and confidentiality?',
    answer: 'Protecting your business information is a top priority. We use secure communication channels, follow strict confidentiality protocols, and comply with industry best practices to safeguard your data at every stage of our engagement.',
  },
  {
    id: 8,
    question: 'Can your solutions be customized for my unique business needs?',
    answer: 'Absolutely. Every solution we design is tailored to your specific objectives, workflows, and operational challenges. We work closely with you to ensure our recommendations align with your goals and deliver measurable value.',
  },
  {
    id: 9,
    question: 'What makes Alie Services different from other consulting firms?',
    answer: 'We combine real-world business experience with a proven, data-driven approach to optimization and growth. Our focus is on delivering practical, actionable strategies—backed by continuous support—to help you achieve sustainable results. We are committed to building long-term partnerships, not just delivering one-time solutions.',
  },
  {
    id: 10,
    question: 'What are the next steps after contacting your team?',
    answer: 'Once you reach out, we’ll schedule your complimentary strategy session. After understanding your needs, we’ll provide a tailored action plan and proposal. From there, our team will partner with you to implement solutions and provide ongoing support for lasting improvement.',
  },
];