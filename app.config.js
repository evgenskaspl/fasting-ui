const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.evgenskas.fastingui.dev';
  }

  if (IS_PREVIEW) {
    return 'com.evgenskas.fastingui.preview';
  }

  return 'com.evgenskas.fastingui';
};

const getAppName = () => {
  if (IS_DEV) {
    return 'Fastring Break (Dev)';
  }

  if (IS_PREVIEW) {
    return 'Fastring Break (Preview)';
  }

  return 'Fastring Break';
};

module.exports = {
  expo: {
    name: getAppName(),
    slug: "fasting-ui",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    splash: {
      image: "./assets/images/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
      dark: {
        image: "./assets/images/splash-icon.png",
        resizeMode: "contain",
        backgroundColor: "#000000",
      }
    },
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      bundleIdentifier: getUniqueIdentifier(),
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      package: getUniqueIdentifier(),
    },
    web: {
      bundler: "metro",
      output: "single",
      favicon: "./assets/images/favicon.png"
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          resizeMode: "contain",
          backgroundColor: "#ffffff",
          dark: {
            image: "./assets/images/splash-icon.png",
            resizeMode: "contain",
            backgroundColor: "#000000",
          }
        }
      ]
    ],
    experiments: {
      typedRoutes: true
    },
    extra: {
      router: {
        origin: false
      },
      eas: {
        projectId: "7e06fb13-05dd-4d67-8da5-ded1415d37ce"
      }
    },
    owner: "evgenskas"
  }
};