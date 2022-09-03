import { Container } from 'inversify'
import { TYPES } from './types'
import { ITrivy, Trivy } from './services/trivy'
import { IKubernetes, Kubernetes } from './services/kubernetes'
import { IKICs, KICs } from './services/kics'
import { ITaskRunner, TaskRunner } from './services/taskRunner'
import { IConfig, Config } from './services/config'

const appContainer = new Container()
appContainer.bind<ITrivy>(TYPES.Services.Trivy).to(Trivy)
appContainer.bind<IKubernetes>(TYPES.Services.Kubernetes).to(Kubernetes)
appContainer.bind<IKICs>(TYPES.Services.KICs).to(KICs)
appContainer.bind<ITaskRunner>(TYPES.Services.TaskRunner).to(TaskRunner)
appContainer.bind<IConfig>(TYPES.Services.Config).to(Config)

export { appContainer }
