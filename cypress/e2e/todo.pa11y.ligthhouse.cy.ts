// fix style
describe('todo', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5556');
  });

  it('should run lighthouse the audits', { retries: 0 }, () => {
    const thresholds = {
      accessibility: 40,
      'best-practices': 40,
      seo: 0,
      pwa: 0,
      performance: 40,
      'first-contentful-paint': 400000,
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

  it(
    'should run pa11y the audits',
    {
      retries: 0,
    },
    () => {
      cy.pa11y({ reporter: 'html', ignore: [], threshold: 7 });
    },
  );
});
