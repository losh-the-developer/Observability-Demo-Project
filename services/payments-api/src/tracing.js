const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
const { OTLPMetricExporter } = require('@opentelemetry/exporter-metrics-otlp-http');
const { PeriodicExportingMetricReader } = require('@opentelemetry/sdk-metrics');

const traceExporter = new OTLPTraceExporter({
  url: 'http://localhost:4318/v1/traces', // Adjust the URL to your OTLP endpoint
});

const metricExporter = new OTLPMetricExporter({
  url: 'http://localhost:4318/v1/metrics', // Adjust the URL to your OTLP endpoint
});

const sdk = new NodeSDK({
  traceExporter,
  metricReader: new PeriodicExportingMetricReader({
    exporter: metricExporter,
    exportIntervalMillis: 1000,
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();