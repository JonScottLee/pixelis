module.exports = {  
  plugins: [  
      require('postcss-nested'),
      require('tailwindcss'),  
      require('postcss-import'),
      require('cssnano')({  
          preset: 'default'  
      })  
  ]
}