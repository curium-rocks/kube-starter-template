import { appContainer } from './inversify.config'
import { IKubernetes } from './services/kubernetes'
import { TYPES } from './types'

const kubernetes = appContainer.get<IKubernetes>(TYPES.Services.Kubernetes)

async function main () : Promise<void> {
  const images = await kubernetes.getImageList()

  console.log(images)
}

main().catch((err) => {
  console.error(`Error while running: ${err}`)
})
