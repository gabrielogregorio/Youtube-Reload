describe('ValidateAccessibility', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should run lighthouse the audits', { retries: 0 }, () => {
    const thresholds = {
      accessibility: 90,
      'best-practices': 90,
      seo: 90,
      pwa: 0,
      performance: 40,
      'first-contentful-paint': 30000,
    };

    const options = {
      throttling: {
        rttMs: 40,
        throughputKbps: 11024,
        cpuSlowdownMultiplier: 1,
        downloadThroughputKbps: 0,
        uploadThroughputKbps: 0,
        requestLatencyMs: 0,
      },
      formFactor: 'desktop',
      screenEmulation: { disabled: true },
    };

    const config = {
      settings: { output: 'html' },
      extends: 'lighthouse:default',
    };

    cy.lighthouse(thresholds, options, config);
  });

  it.skip(
    'should run pa11y the audits',
    {
      retries: 2,
    },
    () => {
      cy.get('button:contains("Gerar Playlist")').should('be.visible');

      cy.pa11y({ reporter: 'html', ignore: [], threshold: 7, rootElement: '#root-react-youtube-reload-app' });
    },
  );
});
