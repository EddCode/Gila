import start from './infraestructure/server'

async function init (): Promise<void> {
  await start()
}

init()
