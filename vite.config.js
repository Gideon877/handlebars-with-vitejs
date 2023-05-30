import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';

export default {
  plugins: [handlebars({
    context: {
      title: "Hello, this is some text",
      show: false,
      fruits: [
        "apples",
        "oranges",
        "bananas"
      ],
      fruitSales: [
        { day: "Monday", apples: 13, oranges: 34 },
        { day: "Tuesday", apples: 17, oranges: 28 },
        { day: "Thursday", apples: 7, oranges: 45 },
      ]
    },
    partialDirectory: resolve(__dirname, 'src/partials'),
    // Add any additional options or configurations you need
  })],
};
