import { appContainer } from './inversify.config'
import { IKICs } from './services/kics'
import { IKubernetes } from './services/kubernetes'
import { ITrivy } from './services/trivy'
import { TYPES } from './types'

const kubernetes = appContainer.get<IKubernetes>(TYPES.Services.Kubernetes)
const kics = appContainer.get<IKICs>(TYPES.Services.KICs)
const trivy = appContainer.get<ITrivy>(TYPES.Services.Trivy)

async function main () : Promise<void> {
  const images = await kubernetes.getImageList()
  const configDump = await kubernetes.getInfraYaml()
  const scanResult = await Promise.all(images.map(trivy.scanWithTrivy))
  const configScanResult = await kics.scanWithKics(configDump)

  console.log(scanResult)
  console.log(configScanResult)
}

main().catch((err) => {
  console.error(`Error while running: ${err}`)
})
