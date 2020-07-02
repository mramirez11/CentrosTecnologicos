import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify, {
  iconfont: "md",
});

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.purple,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
        background: colors.grey.lighten5,
      },
      dark: {
        primary: colors.blue.lighten3,
        background: colors.indigo.base, // If not using lighten/darken, use base to return hex
      },
    },
  },
});
