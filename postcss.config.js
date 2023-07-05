module.exports = {  
  plugins: [  
      require('tailwindcss'),  
      require('postcss-import'),
      require('postcss-nested'),
      require('cssnano')({  
          preset: 'default'  
      })  
  ]
}