import { FinanceEntity, MovieEntity, SportsEntity } from '../../domain'
import { NotificationFactory, NotificationType } from '../index'

describe('Notification Factory', () => {
  test('Should return a MovieEntity instance', () => {
    const movie = new NotificationFactory(NotificationType.MOVIES)
    const instance = movie.getNotification({ sendNotification: jest.fn() })
    expect(instance instanceof MovieEntity).toBeTruthy()
  })

  test('Should return a SportEntity instance', () => {
    const movie = new NotificationFactory(NotificationType.SPORTS)
    const instance = movie.getNotification({ sendNotification: jest.fn() })
    expect(instance instanceof SportsEntity).toBeTruthy()
  })

  test('Should return a Financeinstance', () => {
    const movie = new NotificationFactory(NotificationType.FINANCE)
    const instance = movie.getNotification({ sendNotification: jest.fn() })
    expect(instance instanceof FinanceEntity).toBeTruthy()
  })
})
