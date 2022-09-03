export interface ITrivy {
  /**
   * Schedule a job that will scan the provided image and return the scan results to caller
   * @param imageName fully qualified container image name that will be provided to trivy to scan
   */
   scanWithTrivy(imageName: string): Promise<string>
}
export class Trivy implements ITrivy {
  scanWithTrivy (imageName: string): Promise<string> {
    throw new Error('Method not implemented.')
  }
}
