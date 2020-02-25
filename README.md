# :whale: KUBERNETES #

## Dashboard

---------

### How to deploy

```shell
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/master/aio/deploy/recommended.yaml
```

source: https://kubernetes.io/fr/docs/tasks/access-application-cluster/web-ui-dashboard/

---------

### How to proxy

```shell
kubectl proxy
```

open `http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#/login`

---------

### How to register admin user

```shell
kubectl apply -f createAdminAccount.yml 
```

```shell
kubectl apply -f bindAdminRole.yml
```

---------

### How to connect

Get the user token

```shell
kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep efc-admin | awk '{print $1}')
```

On `http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#/login`

---------

### Deploy a single pod

```shell
kubectl apply -f deploySinglePod.yml
```
