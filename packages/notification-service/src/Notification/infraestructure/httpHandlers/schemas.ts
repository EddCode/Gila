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
