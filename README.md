# ReadMe

## Getting Started

### Creating New Project in Openshift

```bash
oc new-project nodejs-openshift \
    --display-name="nodejs" --description="Sample Node.js app"
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

```
oc expose svc/nodejs-ex --hostname=www.example.com
```

### Reference

https://github.com/sclorg/nodejs-ex