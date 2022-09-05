const TYPES = {
  Services: {
    KICs: Symbol.for('KICs'),
    Kubernetes: Symbol.for('Kubernetes'),
    Trivy: Symbol.for('Trivy'),
    TaskRunner: Symbol.for('TaskRunner'),
    Config: Symbol.for('Config')
  },
  K8S: {
    Config: Symbol.for('Config'),
    CoreApi: Symbol.for('CoreApi')
  }
}
export { TYPES }
