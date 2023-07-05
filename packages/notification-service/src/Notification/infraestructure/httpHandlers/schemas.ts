export const opts = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' },
          logs: {
            type: 'array',
            properties: {
              category: { type: 'string' },
              message: { type: 'string' },
              messageType: { type: 'string' },
              user: {
                type: 'object',
                properties: {
                  name: { type: 'string' },
                  email: { type: 'string' },
                  phone: { type: 'string' }
                }
              }
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
      required: ['type', 'message'],
      properties: {
        type: { type: 'string', enum: ['Sports', 'Finance', 'Movies'] },
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
