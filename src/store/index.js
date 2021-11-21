import { createStore } from "vuex";

export default createStore({
  state: {posts: [
    {
      id: 1, post: {
        author: "Anon",
        date: "14.03.2021",
        profilePic: '../assets/face_icon.jpg',
        title: "Sator rotas",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        image: '../assets/monkee1.jpg'
        }
    },
    {
      id: 2, post: {
        author: "Anon",
        date: "15.03.2021",
        profilePic: '../assets/face_icon.jpg',
        title: "Tenet",
        body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: '../assets/monkee2.jpg'
      }
    },
    {
      id: 3, post: {
        author: "Donkey Kong",
        date: "10.10.2002",
        profilePic: '../assets/donkey_kong_profile.jpg',
        title: "Banana slamma!!",
        body: "My bananas and my buddy, Diddy, they are gone! The Kremlings will pay! I'll hunt them down through every corner of my island, until I have every last banana from my hoard back!",
        image: '../assets/donkey_kong_angry.jpg'
      }
    },
  ]},
  mutations: {},
  actions: {},
  modules: {},
});
