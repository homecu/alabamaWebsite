const plugin = require("tailwindcss/plugin");
const { COLORS, FONT_FAMILY } = require("./src/styles/config");

module.exports = {
  purge: {
    content: [
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./node_modules/@hellobuild/blossom-websites-core-package/dist/*.js",
    ],
    options: {
      safelist: [
        /^tw-flex-(col|row)$/,
        /^tw-my-[0-9][0-6]?$/,
        /^tw-grid-cols-[1-9][0-2]?$/,
        /^tw-col-span-[1-9][0-2]?$/,
        /^tw-col-start-[0-9][0-3]?$/,
        /^tw-col-end-[0-9][0-3]?$/,
        /^tw-gap-[1-9][0-2]?$/,
      ],
    },
  },
  prefix: "tw-",
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        160: "40rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "10rem",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    textColor: ["responsive", "hover", "focus", "visited", "active"],
    borderColor: ["responsive", "hover", "focus", "active", "group-hover"],
    shadows: ["responsive", "hover", "focus", "active", "group-hover"],
    borderRadius: ["responsive", "hover", "focus", "active", "group-hover"],
    transitionProperty: ["responsive", "hover", "focus"],
    opacity: ["responsive", "hover", "focus", "active", "group-hover"],
    fontWeight: ["hover", "focus", "active"],
    margin: ["last", "hover", "responsive"],
    padding: ["last", "hover", "responsive"],
  },
  plugins: ["gatsby-plugin-postcss", plugin(myCustomClassesPlugin)],
};

function myCustomClassesPlugin({ addUtilities }) {
  const FONT_SIZES = [
    { name: "3xl", value: "62px" },
    { name: "2xl", value: "42px" },
    { name: "xl", value: "26px" },
    { name: "lg", value: "22px" },
    { name: "md", value: "20px" },
    { name: "base", value: "16px" },
    { name: "sm", value: "15px" },
    { name: "xs", value: "14px" },
    { name: "xxs", value: "12px" },
  ];

  let newClasses = {};

  COLORS.forEach(element => {
    newClasses = {
      ...newClasses,
      [`bl-text-${element.name}`]: { color: element.value },
      [`bl-bg-${element.name}`]: { backgroundColor: element.value },
      [`bl-border-${element.name}`]: { borderColor: element.value },
    };
  });

  FONT_SIZES.forEach(element => {
    newClasses = {
      ...newClasses,
      [`bl-text-${element.name}`]: { fontSize: element.value },
    };
  });

  FONT_FAMILY.forEach(element => {
    newClasses = {
      ...newClasses,
      [`bl-font-${element.name}`]: { fontFamily: element.value },
    };
  });

  const transformedNewClasses = Object.entries(newClasses).reduce((acum, [key, value]) => {
    return { ...acum, [`.${key}`]: value };
  }, {});

  // Print CSS vars to set inside styles.css file
  // printCSSVars(COLORS);

  addUtilities(transformedNewClasses, {
    respectPrefix: false,
    variants: ["responsive", "hover"],
  });
}

function printCSSVars(colors) {
  colors.forEach(color => {
    console.log(`--bl-color-${color.name}: ${color.value};`);
  });
}
