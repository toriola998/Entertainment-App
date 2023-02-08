const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// module.exports = {
//     //transpileDependencies: true,
//     css: {
//       loaderOptions: {
//         sass: {
//             prependData: `@import "@/styles/main.scss";`
//         }
//       }
//     }
// }
