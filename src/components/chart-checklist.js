import React, { useMemo, useState } from 'react';
import Layout from '@theme/Layout';

const checklist = [
  {
    section: 'Top',
    description: 'Headlines and framing',
    items: [
      {
        id: 'title-short',
        title: 'The title is short, concise, and clear at a glance.',
        help: 'A reader should understand the chart’s main point quickly without decoding a long headline.',
      },
      {
        id: 'title-full-sentence',
        title: 'The title is written as a full sentence in sentence case.',
        help: 'Chart titles should communicate a complete idea, not just a topic label.',
      },
      {
        id: 'place-named',
        title: 'The country or region is included in the title or subtitle without duplication.',
        help: 'Make the geography explicit once so the chart is easy to place and not repetitive.',
      },
      {
        id: 'title-reflects-data',
        title: 'The title reflects the data directly without speculating beyond what is shown.',
        help: 'Keep the wording evidence-based and avoid interpretation the chart itself cannot support.',
      },
    ],
  },
  {
    section: 'Middle',
    description: 'Design, readability, and audience clarity',
    items: [
      {
        id: 'ember-palette',
        title: 'The Ember colour palette is applied consistently and energy sources use the correct colours.',
        help: 'Brand consistency helps charts feel credible and comparable across outputs.',
      },
      {
        id: 'self-explanatory',
        title: 'The chart is easy to understand without extra explanation.',
        help: 'A good chart should stand on its own for someone seeing it for the first time.',
      },
      {
        id: 'colour-focus',
        title: 'Colour and contrast are used deliberately to guide attention to the main message.',
        help: 'Use emphasis sparingly so viewers know where to look first.',
      },
      {
        id: 'broad-audience',
        title: 'The chart is understandable to a broad audience and prioritises simplicity over decoration.',
        help: 'Accessibility and clarity usually improve charts for specialists as well.',
      },
    ],
  },
  {
    section: 'Bottom',
    description: 'Sources, methodology, and caveats',
    items: [
      {
        id: 'source-included',
        title: 'The chart includes a source and all underlying data sources are linked.',
        help: 'Do not rely on “Ember analysis” alone where underlying sources should also be credited.',
      },
      {
        id: 'brief-footnotes',
        title: 'Sources and footnotes are accurate, brief, and do not crowd the chart.',
        help: 'Keep notes useful but tight so they support the chart rather than overpower it.',
      },
      {
        id: 'methodology-linked',
        title: 'Any full methodology is properly linked using the report or methodology title.',
        help: 'Readers should be able to trace how the chart was produced when needed.',
      },
      {
        id: 'caveats-brief',
        title: 'Important caveats, uncertainties, or data gaps are explained briefly.',
        help: 'A short note builds trust when there are limitations the reader should know.',
      },
    ],
  },
];

const colours = {
  green: '#13ce74',
  greenDark: '#12b868',
  greenLight: '#e9fbf1',
  navy: '#192238',
  bg: '#eceff5',
  white: '#ffffff',
  border: '#d9e1ea',
  textMuted: '#5f6b7a',
};

function styles() {
  return {
    page: {
      backgroundColor: colours.bg,
      minHeight: '100vh',
      padding: '32px 20px',
      fontFamily: 'Poppins, sans-serif',
    },
    container: {
      maxWidth: '960px',
      margin: '0 auto',
    },
    heroCard: {
      backgroundColor: colours.white,
      border: `1px solid ${colours.border}`,
      borderRadius: '24px',
      padding: '28px',
      boxShadow: '0 4px 16px rgba(25, 34, 56, 0.06)',
      marginBottom: '24px',
    },
    badge: {
      display: 'inline-block',
      backgroundColor: colours.green,
      color: colours.navy,
      borderRadius: '999px',
      padding: '6px 12px',
      fontSize: '14px',
      fontWeight: 600,
      marginBottom: '14px',
    },
    h1: {
      fontSize: '36px',
      lineHeight: 1.2,
      color: colours.navy,
      margin: '0 0 10px 0',
    },
    intro: {
      color: colours.textMuted,
      fontSize: '16px',
      lineHeight: 1.6,
      marginBottom: '20px',
    },
    progressRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '16px',
      flexWrap: 'wrap',
      marginBottom: '10px',
    },
    progressLabel: {
      fontSize: '14px',
      fontWeight: 600,
      color: colours.navy,
    },
    progressText: {
      fontSize: '14px',
      color: colours.textMuted,
    },
    progressBarOuter: {
      width: '100%',
      height: '12px',
      backgroundColor: '#dfe6ee',
      borderRadius: '999px',
      overflow: 'hidden',
      marginBottom: '16px',
    },
    progressBarInner: (percent) => ({
      width: `${percent}%`,
      height: '100%',
      backgroundColor: colours.green,
      borderRadius: '999px',
      transition: 'width 0.2s ease',
    }),
    buttonRow: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
    },
    primaryButton: {
      backgroundColor: colours.green,
      color: colours.navy,
      border: 'none',
      borderRadius: '14px',
      padding: '10px 16px',
      fontWeight: 600,
      cursor: 'pointer',
    },
    secondaryButton: {
      backgroundColor: colours.white,
      color: colours.navy,
      border: `1px solid ${colours.border}`,
      borderRadius: '14px',
      padding: '10px 16px',
      fontWeight: 600,
      cursor: 'pointer',
    },
    sectionCard: {
      backgroundColor: colours.white,
      border: `1px solid ${colours.border}`,
      borderRadius: '24px',
      padding: '24px',
      boxShadow: '0 4px 16px rgba(25, 34, 56, 0.06)',
      marginBottom: '20px',
    },
    sectionHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '12px',
      flexWrap: 'wrap',
      marginBottom: '16px',
    },
    h2: {
      fontSize: '24px',
      color: colours.navy,
      margin: 0,
    },
    sectionDescription: {
      color: colours.textMuted,
      fontSize: '14px',
      marginTop: '4px',
    },
    sectionCounter: {
      fontSize: '14px',
      color: colours.textMuted,
      fontWeight: 600,
    },
    itemButton: (checked) => ({
      width: '100%',
      textAlign: 'left',
      backgroundColor: checked ? colours.greenLight : colours.white,
      border: `1px solid ${checked ? colours.green : colours.border}`,
      borderRadius: '20px',
      padding: '18px',
      marginBottom: '14px',
      cursor: 'pointer',
    }),
    itemRow: {
      display: 'flex',
      gap: '14px',
      alignItems: 'flex-start',
    },
    icon: (checked) => ({
      width: '24px',
      height: '24px',
      borderRadius: '999px',
      flexShrink: 0,
      marginTop: '2px',
      backgroundColor: checked ? colours.green : '#c7d0db',
      border: checked ? `1px solid ${colours.greenDark}` : '1px solid #c7d0db',
    }),
    itemTitle: {
      fontSize: '16px',
      lineHeight: 1.5,
      fontWeight: 600,
      color: colours.navy,
      margin: '0 0 6px 0',
    },
    itemHelp: {
      fontSize: '14px',
      lineHeight: 1.6,
      color: colours.textMuted,
      margin: 0,
    },
    footerNote: {
      backgroundColor: colours.white,
      border: `1px solid ${colours.border}`,
      borderRadius: '20px',
      padding: '20px',
      color: colours.textMuted,
      lineHeight: 1.6,
      boxShadow: '0 4px 16px rgba(25, 34, 56, 0.06)',
    },
  };
}

function EmberChartChecklistApp() {
  const s = styles();

  const allItems = useMemo(() => checklist.flatMap((section) => section.items), []);
  const initialState = useMemo(
    () => Object.fromEntries(allItems.map((item) => [item.id, false])),
    [allItems]
  );

  const [checked, setChecked] = useState(initialState);

  const completed = Object.values(checked).filter(Boolean).length;
  const total = allItems.length;
  const progress = Math.round((completed / total) * 100);

  const toggleItem = (id) => {
    setChecked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const markAll = () => {
    setChecked(Object.fromEntries(allItems.map((item) => [item.id, true])));
  };

  const clearAll = () => {
    setChecked(initialState);
  };

  const getSectionStats = (items) => {
    const done = items.filter((item) => checked[item.id]).length;
    return `${done}/${items.length} complete`;
  };

  return (
    <div style={s.page}>
      <div style={s.container}>
        <div style={s.heroCard}>
          <div style={s.badge}>Ember chart review</div>
          <h1 style={s.h1}>Run through this checklist before publishing a chart.</h1>
          <p style={s.intro}>
            This interactive version turns the team’s ten-minute chart checklist into a simple
            review tool. Use it for your own charts or when reviewing someone else’s.
          </p>

          <div style={s.progressRow}>
            <div style={s.progressLabel}>Progress</div>
            <div style={s.progressText}>
              {completed} of {total} checks complete
            </div>
          </div>

          <div style={s.progressBarOuter}>
            <div style={s.progressBarInner(progress)} />
          </div>

          <div style={s.buttonRow}>
            <button style={s.primaryButton} onClick={markAll}>
              Mark all done
            </button>
            <button style={s.secondaryButton} onClick={clearAll}>
              Clear all
            </button>
          </div>
        </div>

        {checklist.map((section) => (
          <div key={section.section} style={s.sectionCard}>
            <div style={s.sectionHeader}>
              <div>
                <h2 style={s.h2}>{section.section}</h2>
                <div style={s.sectionDescription}>{section.description}</div>
              </div>
              <div style={s.sectionCounter}>{getSectionStats(section.items)}</div>
            </div>

            {section.items.map((item) => {
              const isChecked = checked[item.id];

              return (
                <button
                  key={item.id}
                  style={s.itemButton(isChecked)}
                  onClick={() => toggleItem(item.id)}
                >
                  <div style={s.itemRow}>
                    <div style={s.icon(isChecked)} />
                    <div>
                      <p style={s.itemTitle}>{item.title}</p>
                      <p style={s.itemHelp}>{item.help}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        ))}

        <div style={s.footerNote}>
          <strong style={{ color: colours.navy }}>How to use this:</strong> click each item once it
          has been checked. This version is intentionally simple so it works cleanly inside
          Docusaurus without any extra packages.
        </div>
      </div>
    </div>
  );
}

export default EmberChartChecklistApp;