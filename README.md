# PurchaseEventsApp

This repository contains the source code for my Master thesis.

This is a demo application with some endpoints which are being tested by JMeter.

## Instructions to deploy to AKS the necessary components from commandline

### Add the Helm repositories

```bash
helm repo add azure-marketplace https://marketplace.azurecr.io/helm/v1/repo
helm repo add elastic https://helm.elastic.co
```

### Resource Group

```bash
az group create --name purchaseRG --location westeurope
```

### Azure Kubernetes Service

```bash
az aks create -g purchaseRG -n purchaseAKS --enable-managed-identity --node-count 2 --node-vm-size Standard_B8ms --enable-cluster-autoscaler --min-count 2 --max-count 2
```

Don't forget, to set the context of the created AKS to be the default.

### MongoDB

```bash
helm install mongo-purchase azure-marketplace/mongodb --set auth.enabled=false,service.ports.mongodb=27017
helm install mongo-tax azure-marketplace/mongodb --set auth.enabled=false,service.ports.mongodb=27018
```

### Elasticsearch

```bash
helm install elasticsearch elastic/elasticsearch --set replicas=2,secret.password=purchase
```

### Kibana

```bash
helm install kibana elastic/kibana --set service.type=LoadBalancer
```

### Metricbeat

```bash
helm install metricbeat elastic/metricbeat
```

### Apache Kafka

```bash
helm install kafka azure-marketplace/kafka
```

### Purchase App

```bash
cd .\<framework>\deploy\
helm install my-app .
```