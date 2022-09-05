import { inject, injectable } from 'inversify'
import { CoreV1Api, V1Container } from '@kubernetes/client-node'
import { TYPES } from '../types'

export interface IKubernetes {
  /**
   * Get the complete list of visible manifests as a concatenated yaml
   */
  getInfraYaml(): Promise<string>
  /**
   * Get the complete list of visible container images in a cluster
   */
  getImageList(): Promise<string[]>
}

@injectable()
export class Kubernetes implements IKubernetes {
  private readonly api: CoreV1Api

  constructor (@inject(TYPES.K8S.CoreApi)api: CoreV1Api) {
    this.api = api
  }

  getInfraYaml (): Promise<string> {
    // find all the pods, de-dup pods created by a controller (replicaset, statefulset, deployment)
    throw new Error('Method not implemented.')
  }

  async getImageList (): Promise<string[]> {
    const pods = await this.api.listPodForAllNamespaces()
    const containerImages : string[] = []
    const addContainer = (c: V1Container) => {
      if (c.image) {
        containerImages.push(c.image)
      }
    }
    pods.body.items.forEach((pod) => {
      pod.spec?.containers.forEach(addContainer)
      pod.spec?.initContainers?.forEach(addContainer)
      pod.spec?.ephemeralContainers?.forEach(addContainer)
    })
    // filter results
    return containerImages
      .filter((c) => c != null)
      .filter((c, idx) => containerImages.indexOf(c) === idx)
  }
}
