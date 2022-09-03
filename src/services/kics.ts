export interface IKICs {
    /**
   * Take the provided yaml and schedule a KICs scan.
   * Yaml will be provided via a PVC
   * @param yamlInfra infrastructure configuration as yaml that will be scanned by KICs
   */
    scanWithKics(yamlInfra: string): Promise<string>
}

export class KICs implements IKICs {
  scanWithKics (yamlInfra: string): Promise<string> {
    throw new Error('Method not implemented.')
  }
}
