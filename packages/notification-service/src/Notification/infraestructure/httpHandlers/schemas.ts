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

export const createSchema = {
  schema: {
    body: {
      type: 'object',
      properties: {
        type: { type: 'string' },
        message: { type: 'string' }
      }
    },
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' }
        }
      }
    }
  }
}