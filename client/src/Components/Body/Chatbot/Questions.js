export const script = [
    {
      id: "BOT/intro",
      message: "Hello there!",
      trigger: "CHOICES/intro"
    },
    {
      id: "CHOICES/intro",
      options: [
        { label: "Hi!", trigger: "BOT/pleasantry" },
        { label: "What's going on?", trigger: "BOT/calming" },
        { label: "Who are you?", trigger: "BOT/introduce-self" }
      ]
    },
    {
      id: "BOT/pleasantry",
      message: "Lovely to meet you!",
      trigger: "BOT/introduce-self"
    },
    {
      id: "BOT/introduce-self",
      message: "I'm a simple chatbot.",
      trigger: "BOT/ask-question"
    },
    {
      id: "BOT/ask-question",
      message: "Ask me Anything!",
      trigger: "CHOICES/ask-question"
    },
    {
      id: "CHOICES/ask-question",
      options: [
        { label: "How to book an appointment?", trigger: "BOT/book" },
        { label: "How to register?", trigger: "BOT/register" },
        { label: "How to apply as a doctor?", trigger: "BOT/apply" }
      ]
    },
    {
      id: "BOT/calming",
      message: "Don't worry, I won't bite!",
      trigger: "BOT/introduce-self"
    },
    {
      id: "BOT/book",
      message: "Oh! That's simple. You need to visit our doctors page. Select appropriate doctor, fill booking form and hurray its done :)",
      trigger: "BOT/ask-question"
    },
    {
      id: "BOT/register",
      message: "Just go to the register page, fill out your details and hurray you are now the member of our family :)",
      trigger: "BOT/ask-question"
    },
    {
      id: "BOT/apply",
      message: "You can contact us by filling out the form in contact us section. We will get back to you shortly.",
      trigger: "BOT/ask-question"
    }
  ];
  