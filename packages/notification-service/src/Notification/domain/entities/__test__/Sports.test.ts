import { type NotificationStrategy } from '../../NotificationRepository'
import { SportsEntity } from '../'

describe('Sports Entity', () => {
  let sendSpy: jest.SpyInstance
  let sports: SportsEntity
  const notification = { reciver: 'test', category: 'test', message: 'test' }

  beforeAll(() => {
    const notificationStrategyMock: NotificationStrategy = {
      sendNotification: jest.fn().mockResolvedValueOnce(notification)
    }

    sports = new SportsEntity(notificationStrategyMock)
  })

  beforeEach(() => {
    sendSpy = jest.spyOn(SportsEntity.prototype, 'send')
    sendSpy.mockResolvedValue(notification)
  })

  afterEach(() => {
    sendSpy.mockRestore()
  })

  test('Should has save method', () => {
    expect(sports.send).toBeDefined()
  })

  test('Should call save method', async () => {
    const response = await sports.send(notification)

    expect(sports.send).toHaveBeenCalled()
    expect(sports.send).toHaveBeenCalledWith(notification)
    expect(response).toEqual(notification)
  })
})
