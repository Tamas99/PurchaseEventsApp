# Instructions

## This is the place for instructions to deploy the necessary components from commandline

### Resource Group

```bash
az group create --name nodejsRG --location westeurope
```

### Azure Kubernetes Service

```bash
az aks create -g nodejsRG -n nodejsAKS --enable-managed-identity --node-count 2 --node-vm-size Standard_B8ms --enable-cluster-autoscaler --min-count 2 --max-count 2
```

### MongoDB

```bash
helm install mongo --set auth.enabled=false bitnami/mongodb
```

### Elasticsearch

```bash
helm install elasticsearch elastic/elasticsearch --set replicas=2
```

### Kibana

```bash
helm install kibana elastic/kibana --set service.type=LoadBalancer
```

### Metricbeat

```bash
helm install metricbeat elastic/metricbeat
```
