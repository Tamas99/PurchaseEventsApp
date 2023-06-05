# Instructions

## This is the place for instructions to deploy the necessary components from commandline

### Resource Group

```bash
az group create --name springbootRG --location westeurope
```

### Azure Kubernetes Service

```bash
az aks create -g springbootRG -n springbootAKS --enable-managed-identity --node-count 1 --node-vm-size Standard_B4ms
```

### MongoDB

```bash
helm install mongo --set auth.enabled=false 
bitnami/mongodb
```

### Elasticsearch

```bash
helm install elasticsearch elastic/elasticsearch
```

### Kibana

```bash
helm install kibana elastic/kibana --set service.type=LoadBalancer
```

### Metricbeat

```bash
helm install metricbeat elastic/metricbeat
```
