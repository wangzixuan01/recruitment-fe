export default {
    plugins: [
      [
        'umi-plugin-react',
        {
          dva: true,
          dva: {
            immer: true
          }
        },
      ]
    ],
  };