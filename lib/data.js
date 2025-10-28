import {
  Clock,
  BookOpen,
  UserPlus,
  Languages,
  List,
  DollarSign,
  User,
  Award,
} from "lucide-react";

export const topics = [
  {
    id: "1",
    week: "Week 1-4",
    description:
      "Advanced story telling techniques for writers: Personas, Characters & Plots",
    lessons: [
      { title: "Introduction", locked: true, questions: null, minutes: null },
      {
        title: "Course Overview",
        locked: true,
        questions: null,
        minutes: null,
      },
      { title: "Course Overview", locked: false, questions: 0, minutes: 10 },
      {
        title: "Course Exercise / Reference Files",
        locked: true,
        questions: null,
        minutes: null,
      },
      {
        title: "Code Editor Installation (Optional if you have one)",
        locked: true,
        questions: null,
        minutes: null,
      },
      {
        title: "Embedding PHP in HTML",
        locked: true,
        questions: null,
        minutes: null,
      },
    ],
  },
  {
    id: "2",
    week: "Week 5-8",
    description:
      "Advanced story telling techniques for writers: Personas, Characters & Plots",
    lessons: [
      {
        title: "Defining Functions",
        locked: true,
        questions: null,
        minutes: null,
      },
      {
        title: "Function Parameters",
        locked: true,
        questions: null,
        minutes: null,
      },
      {
        title: "Return Values From Functions",
        locked: false,
        questions: 0,
        minutes: 10,
      },
      {
        title: "Global Variable and Scope",
        locked: true,
        questions: null,
        minutes: null,
      },
      {
        title: "Newer Way of creating a Constant (Optional if you have one)",
        locked: true,
        questions: null,
        minutes: null,
      },
      { title: "Constants", locked: true, questions: null, minutes: null },
    ],
  },
  {
    id: "3",
    week: "Week 9-12",
    description:
      "Advanced story telling techniques for writers: Personas, Characters & Plots",
    lessons: [
      {
        title: "Defining Functions",
        locked: true,
        questions: null,
        minutes: null,
      },
      {
        title: "Function Parameters",
        locked: true,
        questions: null,
        minutes: null,
      },
      {
        title: "Return Values From Functions",
        locked: false,
        questions: 0,
        minutes: 10,
      },
      {
        title: "Global Variable and Scope",
        locked: true,
        questions: null,
        minutes: null,
      },
      {
        title: "Newer Way of creating a Constant (Optional if you have one)",
        locked: true,
        questions: null,
        minutes: null,
      },
      { title: "Constants", locked: true, questions: null, minutes: null },
    ],
  },
];

export const leftItems = [
  { icon: Clock, label: "Duration :", value: "3 weeks" },
  { icon: BookOpen, label: "Lessons :", value: "8" },
  { icon: UserPlus, label: "Enrolled :", value: "65 students" },
  { icon: Languages, label: "Language :", value: "English" },
];

export const rightItems = [
  { icon: List, label: "Topics :", value: "36" },
  { icon: DollarSign, label: "Price :", value: "80$" },
  { icon: User, label: "Instructor :", value: "Alex Snow" },
  { icon: Award, label: "Certificate :", value: "Included" },
];

export const initialComments = [
  {
    id: 1,
    name: "Student Name Goes Here",
    date: "Oct 10, 2021",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem facilis tempore reiciendis laboriosam voluptatum dicta expedita aliquam nesciunt vitae eius!",
    avatar: "/images/user1-image.webp",
  },
  {
    id: 2,
    name: "Student Name Goes Here",
    date: "Oct 15, 2021",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem facilis tempore reiciendis laboriosam voluptatum dicta expedita aliquam nesciunt vitae eius!",
    avatar: "/images/user2-image.webp",
  },
  {
    id: 3,
    name: "Student Name Goes Here",
    date: "Oct 19, 2021",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem facilis tempore reiciendis laboriosam voluptatum dicta expedita aliquam nesciunt vitae eius!",
    avatar: "/images/user3-image.webp",
  },
];

export const leaderboardData = [
  {
    rank: 1,
    name: "Ahmed Mohammed",
    avatar: "/images/user1-image.webp",
    points: 9850,
    progress: 98,
  },
  {
    rank: 2,
    name: "Sara Ali",
    avatar: "/images/user2-image.webp",
    points: 9320,
    progress: 95,
  },
  {
    rank: 3,
    name: "Mohamed Hassan",
    avatar: "/images/user3-image.webp",
    points: 8790,
    progress: 92,
  },
  {
    rank: 4,
    name: "Fatma Ibrahim",
    avatar: "/images/user1-image.webp",
    points: 7650,
    progress: 85,
  },
  {
    rank: 5,
    name: "Omar Khaled",
    avatar: "/images/user2-image.webp",
    points: 7120,
    progress: 78,
  },
  {
    rank: 6,
    name: "Nour Ahmed",
    avatar: "/images/user3-image.webp",
    points: 6450,
    progress: 73,
  },
  {
    rank: 7,
    name: "Youssef Ali",
    avatar: "/images/user1-image.webp",
    points: 6200,
    progress: 70,
  },
  {
    rank: 8,
    name: "Laila Hassan",
    avatar: "/images/user2-image.webp",
    points: 5890,
    progress: 67,
  },
  {
    rank: 9,
    name: "Bassam Elsayed (You)",
    avatar: "/images/user3-image.webp",
    points: 5640,
    progress: 63,
    isCurrentUser: true,
  },
  {
    rank: 10,
    name: "Dina Mahmoud",
    avatar: "/images/user1-image.webp",
    points: 5320,
    progress: 60,
  },
];
