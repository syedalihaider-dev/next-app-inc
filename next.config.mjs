/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // reactCompiler: true,
  async redirects() {
    return [
      // Main Pages
      {
        source: '/about-us.php',
        destination: '/about-us',
        statusCode: 301,
      },
      {
        source: '/case-studies.php',
        destination: '/case-studies',
        statusCode: 301,
      },
      {
        source: '/contact-us.php',
        destination: '/contact-us',
        statusCode: 301,
      },
      // Services Pages
      {
        source: '/ios-app-development-services.php',
        destination: '/services/ios-app-development-services',
        statusCode: 301,
      },
      {
        source: '/android-app-development-services.php',
        destination: '/services/android-app-development-services',
        statusCode: 301,
      },
      {
        source: '/react-native-app-development-services.php',
        destination: '/services/react-native-app-development-services',
        statusCode: 301,
      },
      {
        source: '/game-app-development-services.php',
        destination: '/services/mobile-game-development-services',
        statusCode: 301,
      },
      {
        source: '/flutter-app-development-services.php',
        destination: '/services/flutter-app-development-services',
        statusCode: 301,
      },
      {
        source: '/vr-app-development-services.php',
        destination: '/services/ar-vr-app-development-services',
        statusCode: 301,
      },
      {
        source: '/wearable-app-development-services.php',
        destination: '/services/wearable-app-development-services',
        statusCode: 301,
      },
      {
        source: '/app-prototyping-services.php',
        destination: '/services/app-prototyping-services',
        statusCode: 301,
      },
      {
        source: '/app-store-optimization-services.php',
        destination: '/services/app-store-optimization-services',
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;

