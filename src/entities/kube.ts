import { CoreV1Api, KubeConfig } from '@kubernetes/client-node'

const config = new KubeConfig()
config.loadFromDefault()

const Client = config.makeApiClient(CoreV1Api)

export {
  Client
}
