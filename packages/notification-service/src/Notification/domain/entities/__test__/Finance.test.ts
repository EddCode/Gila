import { FinanceEntity } from '../index'
import { type NotificationStrategy } from '../../NotificationRepository'

describe('Finance Entity', () => {
  let sendSpy: jest.SpyInstance
  let finance: FinanceEntity
  const notification = { reciver: 'test', category: 'test', message: 'test' }

  beforeAll(() => {
    const notificationStrategyMock: NotificationStrategy = {
      sendNotification: jest.fn().mockResolvedValueOnce(notification)
    }

    finance = new FinanceEntity(notificationStrategyMock)
  })

  beforeEach(() => {
    sendSpy = jest.spyOn(FinanceEntity.prototype, 'send')
    sendSpy.mockResolvedValue(notification)
  })

  afterEach(() => {
    sendSpy.mockRestore()
  })

  test('Should has save method', async () => {
    expect(finance.send).toBeDefined()
  })

  test('Should call send method', async () => {
    const response = await finance.send(notification)

    expect(finance.send).toHaveBeenCalled()
    expect(finance.send).toHaveBeenCalledWith(notification)
    expect(response).toEqual(notification)
  })
})
