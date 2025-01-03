```javascript
//tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

//bug.js
<div class="bg-red-500 p-4">
  <p>This text should be red.</p>
</div>
```