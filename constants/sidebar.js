import _class from "@/assets/svg/sidebar/class.svg";
import _myclass from "@/assets/svg/sidebar/myclass.svg";
import _message from "@/assets/svg/sidebar/message.svg";
import _settings from "@/assets/svg/sidebar/settings.svg";
import _lesson from "@/assets/svg/sidebar/lesson.svg";
import _reyting from "@/assets/svg/sidebar/reyting.svg";
import _news from "@/assets/svg/sidebar/news.svg";
import _children from "@/assets/svg/sidebar/children.svg";

export const sidebar = [
  {
    id: 1,
    name: "Foydalanuvchilar",
    url: "/users",
    svg: _lesson,
    // svgActive: dashboardActive,
    role: ["admin"],
  },
  {
    id: 1,
    name: "To'lovlar",
    url: "/payments",
    svg: _lesson,
    // svgActive: dashboardActive,
    // role: ["admin"],
    role: ["admin"],
  },
  {
    id: 1,
    name: "O'qituvchilar",
    url: "/teachers",
    svg: _lesson,
    // svgActive: dashboardActive,
    role: ["admin"],
  },
  {
    id: 1,
    name: "O'quvchilar",
    url: "/students",
    svg: _lesson,
    // svgActive: dashboardActive,
    role: ["admin"],
  },
  {
    id: 1,
    name: "Darsliklar",
    url: "/subjects",
    svg: _lesson,
    // svgActive: dashboardActive,
    role: [],
  },
  {
    id: 1,
    name: "Reyting",
    url: "/reyting",
    svg: _reyting,
    // svgActive: dashboardActive,
    role: [],
  },
  // {
  //   id: 1,
  //   name: "Sinflarim",
  //   url: "/my_class",
  //   svg: _myclass,
  //   // svgActive: dashboardActive,
  //   role: [],
  // },
  {
    id: 1,
    name: "Sinflar",
    url: "/classes",
    svg: _class,
    // svgActive: dashboardActive,
    role: ["admin", "teacher"],
  },
  // {
  //   id: 1,
  //   name: "Chat",
  //   url: "/chat",
  //   svg: _message,
  //   // svgActive: dashboardActive,
  //   role: [],
  // },
  {
    id: 1,
    name: "Yangiliklar",
    url: "/news",
    svg: _news,
    // svgActive: dashboardActive,
    role: [],
  },
  {
    id: 1,
    name: "Sozlamalar",
    url: "/settings",
    svg: _lesson,
    // svgActive: dashboardActive,
    role: [],
  },
];
