import { type NotificationStrategy } from '../../NotificationRepository'
import { MovieEntity } from '../index'

describe('Movie Entity', () => {
  let sendSpy: jest.SpyInstance
  let movie: MovieEntity
  const notification = { reciver: 'test', category: 'test', message: 'test' }

  beforeAll(() => {
    const notificationStrategyMock: NotificationStrategy = {
      sendNotification: jest.fn().mockResolvedValueOnce(notification)
    }

    movie = new MovieEntity(notificationStrategyMock)
  })

  beforeEach(() => {
    sendSpy = jest.spyOn(MovieEntity.prototype, 'send')
    sendSpy.mockResolvedValue(notification)
  })

  afterEach(() => {
    sendSpy.mockRestore()
  })

  test('Should has save method', () => {
    expect(movie.send).toBeDefined()
  })

  test('Should call save method', async () => {
    const response = await movie.send(notification)

    expect(movie.send).toHaveBeenCalled()
    expect(movie.send).toHaveBeenCalledWith(notification)
    expect(response).toEqual(notification)
  })
})
