// https://docusaurus.io/docs/sidebar
module.exports = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Calculation Field',
      collapsed: true,
      items: [
        'calculation/introduction',
        'calculation/libraries',
        'calculation/markdown',
        'calculation/html',
        {
          type: 'category',
          label: 'Components',
          collapsed: false,
          items: ['calculation/component/link', 'calculation/component/button'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Developer API',
      collapsed: true,
      items: [
        'api/introduction',
        'api/authentication',
        'api/pagination',
        'api/versioning',
        'api/errors',
        'api/request-limits',
        'api/date-timezone',
        {
          type: 'category',
          label: 'Resources',
          collapsed: true,
          items: [
            'api/resource/record',
            {
              type: 'category',
              label: 'Field Value',
              collapsed: true,
              items: [
                'api/resource/field-value/overview',
                'api/resource/field-value/text',
                'api/resource/field-value/status',
                'api/resource/field-value/user',
                'api/resource/field-value/category',
                'api/resource/field-value/date',
                'api/resource/field-value/relation',
                'api/resource/field-value/attachment',
                'api/resource/field-value/image',
                'api/resource/field-value/checklist',
                'api/resource/field-value/number',
                'api/resource/field-value/link',
                'api/resource/field-value/calculation',
                'api/resource/field-value/location',
                'api/resource/field-value/email',
                'api/resource/field-value/phone',
              ],
            },
            'api/resource/record-comment',
            'api/resource/record-revision',
            'api/resource/app',
            'api/resource/workspace',
            'api/resource/organization',
            'api/resource/file',
            'api/resource/link-preview',
            'api/resource/webhook',
            'api/resource/email',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Automations',
      collapsed: true,
      items: [
        'automations/introduction',
        'automations/code-editor',
        'automations/execution-types',
        'automations/libraries',
        {
          type: 'category',
          label: 'Troubleshooting',
          collapsed: true,
          items: [
            'automations/troubleshooting/ip-addresses',
            'automations/troubleshooting/automations-troubleshooting-errors',
          ],
        },
      ],
    },
    'contribute',
    {
      type: 'link',
      label: 'Roadmap',
      href: 'https://get.tapeapp.com/roadmap/',
    },
  ],
  guidesSidebar: [
    {
      type: 'category',
      label: 'Developer API',
      collapsed: false,
      items: ['guide/api/getting-started'],
    },
    {
      type: 'category',
      label: 'Automations',
      collapsed: false,
      items: [
        'guide/automations/automation-showcase',
        'guide/automations/convert-pdf-to-text',
        'guide/automations/save-google-form-responses-to-tape',
        'guide/automations/save-jotform-responses-to-tape',
      ],
    },
    'contribute',
    {
      type: 'link',
      label: 'Roadmap',
      href: 'https://get.tapeapp.com/roadmap/',
    },
  ],
};
