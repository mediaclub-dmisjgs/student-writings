// Replace these sample entries with approved student submissions.
const articles = [
  {
    id: "The-Life-We-Once-Imagined",
    title: "The Life We Once Imagined",
    category: "Article",
    image: "",
    image: "images/life-we-once-imagined.png",
    author: "Imnasenla",
    grade: "Class XII Science",
    date: "August 2026",
    excerpt: "“The Life We Once Imagined” is a reflective article about growing up, changing dreams, family expectations, and the uncertainty of not knowing exactly who we will become.",
    content: [
      "When I was a child, I thought I already knew what my future would look like. I had dreams, plans, and a clear picture of the person I thought I would become. Back then, the future seemed simple. I believed that if I worked hard enough and followed the path I had imagined, life would eventually fall into place.",
      "But as time passed, things started changing. I began discovering new interests, experiencing new things, and seeing life from a different perspective. Slowly, I realized that the future I once imagined might not be the only path meant for me.",
      "Sometimes, our dreams are not completely in our hands. Like many families, the people around us may have their own hopes and expectations for our future. They want what they believe is best for us, and their intentions may come from love. But sometimes, those expectations can feel like a lot to carry.",
      "The truth is, we don't always know what we are going to become. We don't always know exactly what we want, and sometimes that uncertainty can be frightening. There are so many expectations, so many choices, and so many voices telling us which direction we should take. And somewhere between all of them, we can sometimes lose track of our own voice.",
      "I've also noticed something about growing up: it can be easy to be influenced by what other people say. When someone tells us to go in a certain direction, we may follow without stopping to ask ourselves what we actually want. Sometimes, we don't stand firmly by our own words or decisions because we are still trying to understand ourselves.",
      "Maybe that's the part of growing up nobody really prepares us for—not knowing who we are while everyone seems to expect us to know who we're going to become. Maybe we don't need to have all the answers right now. Maybe it's okay if our dreams change.",
      "And maybe becoming the person we once planned to be isn't the point. Maybe the real journey is discovering who we are, learning to trust our own voice, and having the courage to choose our own path—even when we don't know exactly where it will lead. Maybe we will become what we once dreamed of becoming. Maybe we will become something we haven't even imagined yet. We don't know, and perhaps that's okay.",
      "We don't have to rush into becoming the person everyone expects us to be. We can take our time, listen to our own voice, make mistakes, change our minds, and discover what truly makes us happy.",
      "Maybe life was never meant to be a straight path. Maybe some of us are meant to get lost a little before finding our way.",
      "You don't need to become the person you once imagined. Growing up is discovering who you are, even if the person you become is different from the one you once planned to be. So, what if life doesn't turn out the way we once imagined? Maybe that's not something to be afraid of.",
      "Maybe we'll become someone even better—someone we chose to become."
    ]
  },
  {
    id: "between-the-lines",
    title: "Between the Lines",
    category: "Poetry",
    image: "",
    image: "images/between-the-lines.jpg",
    author: "Student Writer",
    grade: "Class IX",
    date: "August 2026",
    excerpt: "A poem about the thoughts we leave unsaid and the meanings hidden in ordinary moments.",
    content: [
      "There are words we never write,",
      "sentences that wait behind our teeth,",
      "and little truths that live quietly",
      "between the lines.",
      "Perhaps silence is not empty.",
      "Perhaps it is simply a page",
      "waiting for someone brave enough",
      "to begin."
    ]
  },
  {
    id: "why-students-should-write",
    title: "Why Students Should Write",
    category: "Article",
    image: "",
    author: "Student Writer",
    grade: "Class XI",
    date: "August 2026",
    excerpt: "Writing is more than an academic skill. It is a way to question, understand and communicate the world around us.",
    content: [
      "Students are often told that writing is important because it appears in examinations. But writing has a value far beyond marks.",
      "When we write, we learn to arrange our thoughts. An idea that feels confusing in our minds often becomes clearer once we try to put it into words. Writing also teaches us to notice details, ask questions and consider perspectives different from our own.",
      "A student magazine or school media club makes this process even more meaningful. It gives young writers an audience and gives readers the opportunity to discover ideas from people sitting in the same classrooms.",
      "We should therefore treat student writing not simply as an assignment, but as a form of expression. Every student has a story, an observation or a question worth sharing."
    ]
  },
  {
    id: "the-world-we-share",
    title: "The World We Share",
    category: "Opinion",
    image: "",
    author: "Student Writer",
    grade: "Class XII",
    date: "August 2026",
    excerpt: "An opinion piece on responsibility, community and the choices young people can make every day.",
    content: [
      "It is easy to think that big changes belong to governments, organisations or famous people. Yet our everyday choices shape the communities we live in.",
      "The way we speak to someone, the way we treat a shared space, the information we choose to pass on and the willingness to help another person are all small decisions with larger consequences.",
      "Young people do not have to wait until they are adults to participate in their communities. We can begin by paying attention, asking better questions and taking responsibility for what is within our reach.",
      "The world we share is built from countless small actions. That is precisely why our choices matter."
    ]
  },
  {
    id: "rain-on-the-roof",
    title: "Rain on the Roof",
    category: "Poetry",
    author: "Student Writer",
    grade: "Class VIII",
    date: "August 2026",
    excerpt: "A short meditation on rain, childhood and the comfort of listening to a familiar sound.",
    content: [
      "Rain taps softly on the roof,",
      "a rhythm older than my thoughts.",
      "The windows hold a silver world,",
      "and every road forgets its dust.",
      "I listen.",
      "For a moment, the whole house",
      "breathes with the rain."
    ]
  },
  {
    id: "a-small-act",
    title: "A Small Act",
    category: "Story",
    author: "Student Writer",
    grade: "Class VII",
    date: "August 2026",
    excerpt: "Sometimes kindness begins with an action so small that we almost forget we did it.",
    content: [
      "The notebook fell from her hands just as the bell rang. Pages scattered across the corridor, and everyone seemed to be in too much of a hurry to stop.",
      "One student turned back. He gathered the pages, carefully placed them between the covers and handed the notebook to her without saying much.",
      "She thanked him. He smiled and ran towards his classroom.",
      "Neither of them knew it then, but the moment stayed with her for the rest of the day. It reminded her that kindness does not always need an announcement. Sometimes it is simply noticing that someone needs help."
    ]
  }
];

function getArticle(id) {
  return articles.find(article => article.id === id);
}
