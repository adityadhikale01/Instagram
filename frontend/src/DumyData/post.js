export const posts = [
  {
    id: "post-1",

    user: {
      id: "user-1",
      username: "aditya",
      fullName: "Aditya Dhikale",
      avatar: "https://i.pravatar.cc/150?img=12",
      isVerified: false,
    },

    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      },
    ],

    caption: "Building something new 🚀",

    likes: 1248,

    commentsCount: 42,

    createdAt: "2h",

    isLiked: false,

    isSaved: false,
  },

  {
    id: "post-2",

    user: {
      id: "user-2",
      username: "alexdev",
      fullName: "Alex",
      avatar: "https://i.pravatar.cc/150?img=13",
      isVerified: true,
    },

    media: [
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
      },
    ],

    caption: "Working on my next project 💻",

    likes: 894,

    commentsCount: 27,

    createdAt: "5h",

    isLiked: false,

    isSaved: false,
  },
];