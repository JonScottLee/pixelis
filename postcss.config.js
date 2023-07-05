module.exports = {  
  plugins: [  
      require('tailwindcss'),  
      require('postcss-nested'),  
      require('cssnano')({  
          preset: 'default'  
      })  
  ]
}