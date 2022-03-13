// https://docusaurus.io/docs/sidebar
module.exports = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Tape Developer API',
      collapsed: false,
      items: ['api/api-reference', 'api/api-reference-new'],
    },
    {
      type: 'category',
      label: 'Calculation Field',
      items: ['calculation/intro', 'calculation/libraries'],
    },
    'contribute',
  ],
};
