#!/bin/bash
docker build . -t node-b --no-cache
kubectl delete -f k8s.yml
kubectl apply -f k8s.yml