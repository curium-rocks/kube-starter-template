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

export class Kubernetes implements IKubernetes {
  getInfraYaml (): Promise<string> {
    throw new Error('Method not implemented.')
  }

  getImageList (): Promise<string[]> {
    throw new Error('Method not implemented.')
  }
}
