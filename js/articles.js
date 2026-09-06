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
  }
];

function getArticle(id) {
  return articles.find(article => article.id === id);
}
