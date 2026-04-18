/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.
*/

const sidebars = {
  tutorialSidebar: [
    'intro',
    '10-minute-chart-checklist',
    'embers-core-principles',
    'data-viz-learning-journey',
    'ai-agents-for-data-viz',
    'roles-responsibilities',
    'chart-standards-in-detail',
    'choosing-the-right-chart',

    {
      type: 'category',
      label: 'How to: Data viz tools',
      collapsible: true,
      collapsed: false,
      items: [
        'tools/flourish',
        'tools/r',
        'tools/affinity-advanced',
      ],
    },

    {
      type: 'category',
      label: 'Advanced visual storytelling',
      collapsible: true,
      collapsed: false,
      items: [
        'advanced/maps',
        'advanced/project-examples',
        'advanced/training-resources',
      ],
    },

    'tasks-for-this-section',
  ],
};

export default sidebars;
