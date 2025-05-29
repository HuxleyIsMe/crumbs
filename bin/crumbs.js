#!/usr/bin/env node

const { clearUpCrumbs } = require('../src/index');

clearUpCrumbs().catch((err) => {
  console.error('Failed to clear crumbs:', err);
  process.exit(1);
});