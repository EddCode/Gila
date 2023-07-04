export const opts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' },
          data: {
            type: 'array',
            properties: {
              type: { type: 'string' },
              message: { type: 'string' },
              createdAt: { type: 'string' }
            }
          }
        }
      }
    }
  }
}
