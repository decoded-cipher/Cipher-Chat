import Vue from 'vue'
import App from "./App.vue"
import router from './routes.js'

// import Swal from 'sweetalert2'
// window.Swal = Swal

// const Toast = Swal.mixin({
//   toast: true,
//   position: 'top-end',
//   showConfirmButton: false,
//   timer: 3000
//   // timerProgressBar: true,
//   // didOpen: (toast) => {
//   //   toast.addEventListener('mouseenter', Swal.stopTimer)
//   //   toast.addEventListener('mouseleave', Swal.resumeTimer)
//   // }
// })
// window.Toast = Toast;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
