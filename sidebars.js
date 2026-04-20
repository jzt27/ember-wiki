const sidebars = {
  tutorialSidebar: [
    'intro',
    'ten-minute-chart-checklist',
    'ember-core-principles',
    'data-viz-learning-journey',
    'ai-agents-for-dataviz',
    'roles-responsibilities',
    'chart-standards-in-detail',
    'choosing-the-right-chart',
    {
      type: 'category',
      label: 'How to: Data viz tools',
      items: [
        'tools/flourish',
        'tools/r',
        'tools/affinity-advanced',
      ],
    },
    {
      type: 'category',
      label: 'Advanced visual storytelling',
      items: [
        'advanced/maps',
        'advanced/project-examples',
        'advanced/training-resources',
      ],
    },
  ],
};

export default sidebars;