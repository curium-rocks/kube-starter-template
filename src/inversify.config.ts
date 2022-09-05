import 'reflect-metadata'
import { Container } from 'inversify'
import { TYPES } from './types'
import { IKubernetes, Kubernetes } from './services/kubernetes'
import { CoreV1Api } from '@kubernetes/client-node'
import { Client } from './entities/kube'

const appContainer = new Container()
appContainer.bind<IKubernetes>(TYPES.Services.Kubernetes).to(Kubernetes)
appContainer.bind<CoreV1Api>(TYPES.K8S.CoreApi).toConstantValue(Client)

export { appContainer }
