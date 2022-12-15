export const environment = {
  production: true,
  api: {
    url: 'http://localhost:8000/',
    endpoints: {
      users: 'api/v1/user',
      shipments: 'api/v1/shipments/<shipmentId>',
      restrictions: 'api/v1/user/<userId>/restrictions',
      purchases: 'api/v1/user/<userId>/purchases',
      payments: 'api/v1/payment/<paymentId>',
      levels: 'api/v1/level/<levelId>',
    },
  },
};
