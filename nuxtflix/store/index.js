// import axios from 'axios'
// export const state = () => ({
//   all_restaurants: [],
//   user_session: {},
//   token : "",
//   delay: 0,
// })

// export const mutations = {
//   SET_STORE(state, value) {
//     state.all_restaurants = value
//   },
//   STORE_SESSION(state, payload){
//     state.user_session = payload;
// },

//   STORE_TOKEN(state, payload){
//     state.token = payload;
// },

//   DELAY(state, payload){
//     state.delay = payload;
// }
  
// }

// export const getters = {

//   user_session(state){
//     return state.user_session
// },
// }

// export const actions = {
//   setUser_Session(context, payload) {
// 		context.commit("STORE_SESSION", payload);
// 	},
//   GetFavorites(_, payload) {
//     return new Promise((resolve, reject) => {
//       axios({
//         method: 'GET',
//         url: ``,
//         data: payload,
//         contentType: 'application/json',
//       })
//         .then((res) => {
//           resolve(res)
//         })
//         .catch((err) => {
//           reject(err)
//         })
//     })
//   },



//   TopMovies(_, payload) {
//     return new Promise((resolve, reject) => {
//       axios({
//         method: 'GET',
//         url: ``,
//         data: payload,
//         contentType: 'application/json',
//       })
//         .then((res) => {
//           resolve(res)
//         })
//         .catch((err) => {
//           reject(err)
//         })
//     })
//   },

//   ComedyMovies(_, payload) {
//     return new Promise((resolve, reject) => {
//       axios({
//         method: 'GET',
//         url: ``,
//         data: payload,
//         contentType: 'application/json',
//       })
//         .then((res) => {
//           resolve(res)
//         })
//         .catch((err) => {
//           reject(err)
//         })
//     })
//   },

//   HorrorMovies(_, payload) {
//     return new Promise((resolve, reject) => {
//       axios({
//         method: 'GET',
//         url: `https://api.themoviedb.org/3/discover/movie?api_key=2681d69e1ec92b403f125850e542d11e&with_genres=27`,
//         data: payload,
//         contentType: 'application/json',
//       })
//         .then((res) => {
//           resolve(res)
//         })
//         .catch((err) => {
//           reject(err)
//         })
//     })
//   },

//   ActionMovies(_, payload) {
//     return new Promise((resolve, reject) => {
//       axios({
//         method: 'GET',
//         url: ``,
//         data: payload,
//         contentType: 'application/json',
//       })
//         .then((res) => {
//           resolve(res)
//         })
//         .catch((err) => {
//           reject(err)
//         })
//     })
//   },
//   getUser(context) {
// 		return this.$axios.$get("/user").then((response) => {
// 			const content = response;
// 			if (content.detail == "Deslogado!") {
// 				this.message = "Not Logged";
// 				console.log("deu errado");
// 			} else {
// 				// this.$store.commit('user/STORE_SESSION', content)
// 				context.commit("STORE_SESSION", content);
// 				// console.log(this.$store.state.user.user_session)
// 				this.message = "Logged";
// 				console.log("deu certo");
// 			}
// 			return response;
// 		});
// },
// delay(context, payload) {
//   context.commit("DELAY", payload);
// },
// }
