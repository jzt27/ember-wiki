import React, { useMemo, useState } from 'react';

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
  red: '#e5484d',
  redDark: '#cf3c41',
  redLight: '#fdeeee',
  navy: '#192238',
  bg: '#eceff5',
  white: '#ffffff',
  border: '#d9e1ea',
  textMuted: '#5f6b7a',
  neutralDot: '#c7d0db',
};

function styles() {
  
  return {
    progressMessage: {
  fontSize: '14px',
  color: colours.textMuted,
  margin: '0 0 10px 0',
  lineHeight: 1.5,
},
    page: {
      backgroundColor: colours.bg,
      padding: '32px 20px',
      fontFamily: 'Poppins, sans-serif',
      borderRadius: '24px',
    },
    container: {
      maxWidth: '960px',
      margin: '0 auto',
      position: 'relative',
    },
    heroCard: {
      backgroundColor: colours.white,
      border: `1px solid ${colours.border}`,
      borderRadius: '24px',
      padding: '28px',
      boxShadow: '0 4px 16px rgba(25, 34, 56, 0.06)',
      marginBottom: '20px',
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
      marginBottom: '0',
    },
    stickyBarWrap: {
  position: 'sticky',
  top: '80px',
  zIndex: 50,
  marginBottom: '12px',
},

stickyBarCard: {
  backgroundColor: 'rgba(255, 255, 255, 0.98)',
  backdropFilter: 'blur(6px)',
  border: `1px solid ${colours.border}`,
  borderRadius: '18px',
  padding: '14px 18px',
  boxShadow: '0 8px 24px rgba(25, 34, 56, 0.10)',
  boxSizing: 'border-box',
},
progressHeaderRow: {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '16px',
  flexWrap: 'wrap',
  marginBottom: '12px',
},

progressHeaderRight: {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  flexWrap: 'wrap',
},

clearAllButton: {
  backgroundColor: colours.white,
  color: colours.navy,
  border: `1px solid ${colours.border}`,
  borderRadius: '999px',
  padding: '8px 14px',
  fontWeight: 600,
  cursor: 'pointer',
  whiteSpace: 'nowrap',
},
    progressCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(6px)',
      border: `1px solid ${colours.border}`,
      borderRadius: '20px',
      padding: '18px 20px',
      boxShadow: '0 8px 24px rgba(25, 34, 56, 0.10)',
      width: '100%',
      boxSizing: 'border-box',
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
      height: '14px',
      backgroundColor: '#dfe6ee',
      borderRadius: '999px',
      overflow: 'hidden',
      marginBottom: '16px',
    },

    progressStack: {
  display: 'flex',
  width: '100%',
  height: '100%',
},

progressAchieved: (percent) => ({
  width: `${percent}%`,
  backgroundColor: colours.green,
  transition: 'width 0.2s ease',
}),

progressNotYet: (percent) => ({
  width: `${percent}%`,
  backgroundColor: colours.red,
  transition: 'width 0.2s ease',
}),

progressUnmarked: (percent) => ({
  width: `${percent}%`,
  backgroundColor: '#dfe6ee',
}),

    progressBarInner: (percent) => ({
      width: `${percent}%`,
      height: '100%',
      backgroundColor: colours.green,
      borderRadius: '999px',
      transition: 'width 0.2s ease',
    }),
    buttonRow: {
  display: 'flex',
  justifyContent: 'flex-end',
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
    itemCard: (status) => {
      let backgroundColor = colours.white;
      let borderColor = colours.border;

      if (status === 'achieved') {
        backgroundColor = colours.greenLight;
        borderColor = colours.green;
      }

      if (status === 'not_yet') {
        backgroundColor = colours.redLight;
        borderColor = colours.red;
      }

      return {
        width: '100%',
        textAlign: 'left',
        backgroundColor,
        border: `1px solid ${borderColor}`,
        borderRadius: '20px',
        padding: '18px',
        marginBottom: '14px',
        boxSizing: 'border-box',
      };
    },
    itemTopRow: {
      display: 'flex',
      gap: '14px',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    itemLeft: {
      display: 'flex',
      gap: '14px',
      alignItems: 'flex-start',
      flex: '1 1 520px',
      minWidth: 0,
    },
    icon: (status) => {
      let backgroundColor = colours.neutralDot;
      let border = `1px solid ${colours.neutralDot}`;

      if (status === 'achieved') {
        backgroundColor = colours.green;
        border = `1px solid ${colours.greenDark}`;
      }

      if (status === 'not_yet') {
        backgroundColor = colours.red;
        border = `1px solid ${colours.redDark}`;
      }

      return {
        width: '24px',
        height: '24px',
        borderRadius: '999px',
        flexShrink: 0,
        marginTop: '2px',
        backgroundColor,
        border,
      };
    },
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
    statusButtons: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
    },
    achievedButton: (active) => ({
      backgroundColor: active ? colours.green : colours.white,
      color: active ? colours.navy : colours.navy,
      border: `1px solid ${active ? colours.green : colours.border}`,
      borderRadius: '999px',
      padding: '8px 14px',
      fontWeight: 600,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
    }),
    notYetButton: (active) => ({
      backgroundColor: active ? colours.red : colours.white,
      color: active ? colours.white : colours.navy,
      border: `1px solid ${active ? colours.red : colours.border}`,
      borderRadius: '999px',
      padding: '8px 14px',
      fontWeight: 600,
      cursor: 'pointer',
      whiteSpace: 'nowrap',
    }),
  };
}

function EmberChartChecklistApp() {
  const getProgressMessage = () => {
  if (achievedCount === 0) return 'Start by reviewing each part of the chart.';
  if (achievedCount <= 4) return 'Good start. Keep working through the checklist.';
  if (achievedCount <= 8) return 'Getting there. Most of the chart is in place.';
  if (achievedCount <= 11) return 'Final touches. Almost ready for review.';
  if (achievedCount === total) return 'All done. Ready for the data visualisation team to review.';
};
  const s = styles();

  const allItems = useMemo(() => checklist.flatMap((section) => section.items), []);
  const initialState = useMemo(
    () => Object.fromEntries(allItems.map((item) => [item.id, 'unmarked'])),
    [allItems]
  );

  const [statusMap, setStatusMap] = useState(initialState);

const achievedCount = Object.values(statusMap).filter((s) => s === 'achieved').length;
const notYetCount = Object.values(statusMap).filter((s) => s === 'not_yet').length;
const total = allItems.length;

const achievedPercent = (achievedCount / total) * 100;
const notYetPercent = (notYetCount / total) * 100;
const unmarkedPercent = 100 - achievedPercent - notYetPercent;

  const setStatus = (id, status) => {
    setStatusMap((prev) => ({
      ...prev,
      [id]: prev[id] === status ? 'unmarked' : status,
    }));
  };

  const clearAll = () => {
    setStatusMap(initialState);
  };

  const getSectionStats = (items) => {
    const achieved = items.filter((item) => statusMap[item.id] === 'achieved').length;
    return `${achieved}/${items.length} achieved`;
  };
return (
  <div style={s.page}>
    <div style={s.container}>
      <div style={s.heroCard}>
        <h1 style={s.h1}>Run through this checklist before publishing a chart</h1>
        <p style={s.intro}>
          <strong style={{ color: colours.navy }}>How to use this:</strong> mark each item as
          either achieved or not yet. Use it for your own charts or when reviewing someone else’s.
        </p>
      </div>

       <div style={s.stickyBarWrap}>
  <div style={s.stickyBarCard}>
    <div style={s.progressHeaderRow}>
      <div style={s.progressLabel}>Progress</div>
      <div style={s.progressHeaderRight}>
        <div style={s.progressText}>
          {achievedCount} achieved · {notYetCount} not yet
        </div>
        <button style={s.clearAllButton} onClick={clearAll}>
          Clear all
        </button>
      </div>
    </div>
    <p style={s.progressMessage}>
  {getProgressMessage()}
</p>

    <div style={s.progressBarOuter}>
      <div style={s.progressStack}>
        <div style={s.progressAchieved(achievedPercent)} />
        <div style={s.progressNotYet(notYetPercent)} />
        <div style={s.progressUnmarked(unmarkedPercent)} />
      </div>
    </div>
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
              const status = statusMap[item.id];

              return (
                <div key={item.id} style={s.itemCard(status)}>
                  <div style={s.itemTopRow}>
                    <div style={s.itemLeft}>
                      <div style={s.icon(status)} />
                      <div>
                        <p style={s.itemTitle}>{item.title}</p>
                        <p style={s.itemHelp}>{item.help}</p>
                      </div>
                    </div>

                    <div style={s.statusButtons}>
                      <button
                        type="button"
                        style={s.achievedButton(status === 'achieved')}
                        onClick={() => setStatus(item.id, 'achieved')}
                      >
                        Achieved
                      </button>
                      <button
                        type="button"
                        style={s.notYetButton(status === 'not_yet')}
                        onClick={() => setStatus(item.id, 'not_yet')}
                      >
                        Not yet
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmberChartChecklistApp;