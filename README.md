# ReadMe

This is a sample NodeJS project that will be deployed in OpenShift. Jenkins pipeline for CI/CD is supported.

## Running Locally

```bash
npm start
```

http://localhost:9090/

## Docker

### Building Docker Image

```bash
docker build -t art/hello-node .
```

### Running Image

```bash
docker run -p 9090:9090 -d art/hello-node
```

## Openshift

### Creating New Project in Openshift

```bash
oc new-project nodejs-openshift \
    --display-name="nodejs" \
    --description="Sample Node.js app"
```

### Using New Project

```bash
oc project nodejs-openshift
```

### Creating New App from Source to Image

```bash
oc new-app https://github.com/arttuladhar/hello-node.git -l name=hello-nodejs
```

### Deploying the App

```bash
oc get svc
```

### Configuring Routing

```bash
oc expose svc/hello-node --port=9090
```

### Reference

https://github.com/sclorg/nodejs-ex